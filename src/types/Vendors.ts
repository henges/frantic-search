export enum VendorBackend {
    BINDER_POS,
    MTGMATE,
    CK
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

interface CardKingdomVendor extends Vendor {
    backend: VendorBackend.CK
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
    ,
    "plenty-of-games-au.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "plenty-of-games-au.myshopify.com",
        vendorUrl: "https://plentyofgames.com.au",
        name: "Plenty of Games"
    },
    "eternal-magic-oz.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "eternal-magic-oz.myshopify.com",
        vendorUrl: "https://eternalmagic.cc",
        name: "Eternal Magic"
    },
    "good-games-pty.myshopify.com": {
        backend: VendorBackend.BINDER_POS,
        url: "good-games-pty.myshopify.com",
        vendorUrl: "https://www.goodgamesnorth.com.au/",
        name: "Good Games North"
    }
}
export const MTGMATE_VENDORS: Record<string, MtgMateVendor> = {
    "mtgmate.com.au": {
        backend: VendorBackend.MTGMATE,
        name: "MTGMate",
        url: "https://www.mtgmate.com.au/cards/decklist_results?utf8=%E2%9C%93&decklist=",
        vendorUrl: "https://mtgmate.com.au"
    }
}

export const CK_VENDORS: Record<string, CardKingdomVendor> = {
    "cardkingdom.com-regular": {
        backend: VendorBackend.CK,
        name: "Card Kingdom",
        url: "https://www.cardkingdom.com/catalog/search?search=header&filter[tab]=mtg_card&filter[name]=",
        vendorUrl: "https://www.cardkingdom.com"
    },
    "cardkingdom.com-foils": {
        backend: VendorBackend.CK,
        name: "Card Kingdom",
        url: "https://www.cardkingdom.com/catalog/search?search=header&filter[tab]=mtg_foil&filter[name]=",
        vendorUrl: "https://www.cardkingdom.com"
    }
}

export const VENDORS: Record<VendorBackend, Record<string, Vendor>> = {
    [VendorBackend.BINDER_POS]: BINDER_POS_VENDORS,
    [VendorBackend.MTGMATE]: MTGMATE_VENDORS,
    [VendorBackend.CK]: CK_VENDORS,

}