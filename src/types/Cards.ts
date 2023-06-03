
export type Card = {
    name: string
    availableQuantity: number
    price: number // TODO: consolidate price and internalPrice property into this.
    setName: string
    foil: boolean
    vendorName: string
    priceRank: number
}