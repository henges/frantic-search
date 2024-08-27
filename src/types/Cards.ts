
import * as scryfall from 'scryfall-api';

export type Card = {
    name: string
    setName: string
}

export type VendorCard = Card & {
    quantity: number
    price: number // TODO: consolidate price and internalPrice property into this.
    foil: boolean
    vendor: string
    priceRank: number
    url: string
    imageUrl?: string
}

export type ScryfallCardSearch = {
    object: string
    total_cards: number
    has_more: boolean
    next_page: string | undefined
    data: scryfall.Card[]
}

/** A mapping from vendor names to card names to lists of that card available at that vendor. */
export type VendorToCardsMap = Record<string, Record<string, VendorCard[]>>