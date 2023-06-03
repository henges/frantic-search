export type Card = {
    name: string
    setName: string
}

export type VendorCard = Card & {
    availableQuantity: number
    price: number // TODO: consolidate price and internalPrice property into this.
    foil: boolean
    vendorName: string
    priceRank: number
}