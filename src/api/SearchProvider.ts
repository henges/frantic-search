import { VendorCard } from "../types/Cards"

export type SearchRequest = {
    name: string
    quantity: string
}

export type SearchFunction = (r: SearchRequest[]) => Promise<VendorCard[]>
