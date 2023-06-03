export enum VendorBackend {
    BINDER_POS,
    MTGMATE
}

interface Vendor {
    name: string
    backend: VendorBackend
    url: string
}

interface BinderPosBackendVendor extends Vendor {
    backend: VendorBackend.BINDER_POS
}

interface MtgMateVendor extends Vendor {
    backend: VendorBackend.MTGMATE
}

export const BINDER_POS_VENDORS: Record<string, BinderPosBackendVendor> = {
    "gufgames.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "gufgames.myshopify.com",
        name: "Guf"
    },
    "the-hall-of-heroes.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "the-hall-of-heroes.myshopify.com",
        name: "The Hall of Heroes"
    },
    "cracking-singles.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "cracking-singles.myshopify.com",
        name: "Cracking Singles"
    },
    "next-level-games-ringwood.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "next-level-games-ringwood.myshopify.com",
        name: "Games Portal"
    },
    "good-games-townhall.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-townhall.myshopify.com",
        name: "Good Games National"
    },
    "good-games-morley.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-morley.myshopify.com",
        name: "Good Games Morley"
    },
    "good-games-cannington.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-cannington.myshopify.com",
        name: "Good Games Cannington"
    },
    "good-games-adelaide-sa.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-adelaide-sa.myshopify.com",
        name: "Good Games Adelaide"
    },
    "unplugged-games.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "unplugged-games.myshopify.com",
        name: "Unplugged Games"
    }
}
export const MTGMATE_VENDORS: Record<string, MtgMateVendor> = {
    "mtgmate.com.au": {
        backend: VendorBackend.MTGMATE,
        name: "MTGMate",
        url: "polluxus.dev/mtgmate"
    }
}

export const VENDORS: Record<VendorBackend, Record<string, Vendor>> = {
    [VendorBackend.BINDER_POS]: BINDER_POS_VENDORS,
    [VendorBackend.MTGMATE]: MTGMATE_VENDORS
}