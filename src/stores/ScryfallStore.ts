import {create} from "zustand";
import {CardRequest} from "../converter/QueryConverter";
import {Card} from "scryfall-api";
import * as scryfall from 'scryfall-api';
import {get} from "../api/Http";
import {ScryfallCardSearch} from "../types/Cards";

interface Store {
    memo: { [query: string]: Promise<Card[]> }
}

interface Actions {
    search: (r: CardRequest[]) => Promise<Card[]>
}

export const useScryfallStore = create<Store & Actions>((set, _get) => ({
    memo: {},
    search: async (cardRequest) => {
        console.log(cardRequest)
        const fetch =
            async (uri: string): Promise<Card[]> => {
                const result = await get(uri)
                const response = result.body as ScryfallCardSearch

                if (response.has_more && response.next_page) {
                    return [...response.data, ...(await fetch(response.next_page))]
                }

                return response.data
            }

        const result = cardRequest.map(async cr => {
            const c = await scryfall.Cards.byName(cr.name)
            if (c) {
                return await fetch(c.prints_search_uri)
            }
            return []
        })

        return Promise.all(result)
            .then((v) => v.flat());
    },
}))
