export enum VendorBackend {
    BINDER_POS,
    MTGMATE
}

interface Vendor {
    name: string
    backend: VendorBackend
    url: string
    vendorUrl: string
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
        vendorUrl: "https://guf.com.au",
        name: "Guf"
    },
    "the-hall-of-heroes.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "the-hall-of-heroes.myshopify.com",
        vendorUrl: "https://thehallofheroes.com.au",
        name: "The Hall of Heroes"
    },
    "cracking-singles.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "cracking-singles.myshopify.com",
        vendorUrl: "https://cracking-tcgsingles.com.au",
        name: "Cracking Singles"
    },
    "next-level-games-ringwood.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "next-level-games-ringwood.myshopify.com",
        vendorUrl: "https://gamesportal.com.au",
        name: "Games Portal"
    },
    "good-games-townhall.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-townhall.myshopify.com",
        vendorUrl: "https://tcg.goodgames.com.au",
        name: "Good Games National"
    },
    "good-games-morley.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-morley.myshopify.com",
        vendorUrl: "https://goodgamesmorley.com.au",
        name: "Good Games Morley"
    },
    "good-games-cannington.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-cannington.myshopify.com",
        vendorUrl: "https://good-games-cannington.myshopify.com",
        name: "Good Games Cannington"
    },
    "good-games-adelaide-sa.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-adelaide-sa.myshopify.com",
        vendorUrl: "https://ggadelaide.com.au",
        name: "Good Games Adelaide"
    },
    "unplugged-games.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "unplugged-games.myshopify.com",
        vendorUrl: "https://tcgsingles.com.au",
        name: "Unplugged Games"
    }
}
export const MTGMATE_VENDORS: Record<string, MtgMateVendor> = {
    "mtgmate.com.au": {
        backend: VendorBackend.MTGMATE,
        name: "MTGMate",
        url: "https://polluxus.dev/mtgmate/?utf8=✓&decklist=",
        vendorUrl: "https://mtgmate.com.au"
    }
}

export const VENDORS: Record<VendorBackend, Record<string, Vendor>> = {
    [VendorBackend.BINDER_POS]: BINDER_POS_VENDORS,
    [VendorBackend.MTGMATE]: MTGMATE_VENDORS
}