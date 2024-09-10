import {useMtgMateStore} from "../../stores/MtgMateStore";
import {useBinderPosStore} from "../../stores/BinderPosStore";
import React, {useState} from "react";
import {VendorCard} from "../../types/Cards";
import ResultTableV2 from "./ResultTable.v2";
import {CardRequest, parseSearchString} from "../../converter/QueryConverter";
import {useScryfallStore} from "../../stores/ScryfallStore";
import {Card} from "scryfall-api";
import SearchBox from "./SearchBox.v2";
import {PageHeader} from "./header/PageHeader.v2";

export const SearchPage = () => {
    const searchMtgMate = useMtgMateStore((state) => state.search)
    const searchBinderPos = useBinderPosStore((state) => state.search)
    const searchScryfall = useScryfallStore((state) => state.search)

    const [results, setResults] = useState<VendorCard[] | null>(null)
    const [scryfallCards, setScryfallCards] = useState<Card[] | null>(null)
    const search = async (query: CardRequest[]) => {
        return Promise.all([searchBinderPos(query), searchMtgMate(query)]).then(r => r.flat())
    }

    const scryfallSearch = async (query: CardRequest[]) => {
        return Promise.all([searchScryfall(query)]).then(r => r.flat())
    }

    const processResults = (res: VendorCard[]) => {

        // Map entries to card name
        const keyedByName = res.reduce((accum: Record<string, VendorCard[]>, e) => {

            if (!accum[e.name]) {
                accum[e.name] = [];
            }
            accum[e.name].push(e);
            return accum;
        }, {})

        // Sort and rank results
        return Object.values(keyedByName).map(v => {
            const sorted = v.sort((a, b) => a.price - b.price);

            let priceRank = 1;
            for (let i = 0; i < sorted.length; i++) {

                // After the first entry, check that the previous
                // values is actually lower than the current and
                // increment current price rank if so
                if (i > 0 && sorted[i - 1].price < sorted[i].price) {
                    priceRank++
                }
                sorted[i].priceRank = priceRank;
            }

            return sorted;
        }).flat();
    }

    const handleSearch = async (query: string) => {
        const req = parseSearchString(query)
        const res = await search(req)
        const sc = await scryfallSearch(req)

        const processed = processResults(res)
        setResults(processed)
        if (sc.length > 0) {
            processed.forEach(p => {
                p.imageUrl = sc.find(it => it.name == p.name && p.setName == it.set_name)?.image_uris?.png
            })
        }
        // setScryfallCards(sc)
    }

    return (
        <div className={"w-full h-full overflow-auto bg-white dark:bg-gray-800"}>
            {/* TODO: grid is just for padding now, can center content instead. */}
            <div className={"container mx-auto h-full overflow-auto"}>
                <PageHeader/>
                <div className={'mt-32'}>
                    <SearchBox handleSearch={handleSearch}/>
                </div>
            </div>
            {results && <ResultTableV2 results={results}/>}
        </div>
    )
}