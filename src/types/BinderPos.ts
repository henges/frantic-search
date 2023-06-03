export type BinderPosRequest = {
    card: string
    quantity: string
}

export type BinderPosResponse = {
    products: BinderPosProduct[]
}

export type BinderPosProduct = {
    variants: BinderPosVariant[] // will always be of size 1
    img: string // eg "https://images.binderpos.com/97d20557-a99a-5e16-bfd7-099327cb9705.jpg",
    title: string // eg "Boseiju, Who Endures [Kamigawa: Neon Dynasty Prerelease Promos]",
    name: string // eg "Boseiju, Who Endures",
    setName: string // eg "Kamigawa: Neon Dynasty Prerelease Promos",
    collectorNumber: string //eg "266"
}

export type BinderPosVariant = {
    title: string //eg "Near Mint Foil",
    price: number //eg 83.1,
    quantity: number //eg 1
}