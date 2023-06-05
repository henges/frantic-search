import { create } from "zustand";
import { SearchRequest } from "../converter/QueryConverter";
import { VendorCard } from "../types/Cards";
import { BINDER_POS_VENDORS } from "../types/Vendors";
import { post } from "../api/Http";
import { BinderPosResponse } from "../types/BinderPos";

interface Store {
    memo: { [query: string]: Promise<VendorCard[]> }
}

interface Actions {
    search: (r: SearchRequest[]) => Promise<VendorCard[]>
}

const resolveHosts = () => {

    const resolved = Object.assign({}, BINDER_POS_VENDORS);
    const exclude: Record<string, boolean> = JSON.parse(localStorage.getItem("fs-ignore-vendors") || "{}");
    Object.keys(exclude).forEach(k => delete resolved[k]);

    return resolved;
}

export const fakePost = (url: string, query: any) => {
    return Promise.resolve({
            code: 200,
            ok: true,
            body: JSON.parse(`[{"requested":1,"found":2,"searchName":"Boseiju, Who Endures","productDetails":null,"products":[{"id":0,"variants":[{"id":0,"shopifyId":41157953061043,"productTitle":null,"tcgImage":null,"collectorNumber":null,"img":null,"title":"Near Mint","barcode":null,"sku":null,"price":57.8,"cashBuyPrice":null,"storeCreditBuyPrice":null,"maxPurchaseQuantity":null,"canPurchaseOverstock":null,"creditOverstockBuyPrice":null,"overtStockBuyPrice":null,"quantity":1,"reserveQuantity":null,"position":null,"taxable":null,"taxCode":null,"option1":null,"option2":null,"option3":null,"fulfillmentService":null,"priceOverride":null,"cashBuyPercent":null,"creditBuyPercent":null,"maxInstockBuyPrice":null,"maxInstockBuyPercentage":null,"maxInstockCreditBuyPrice":null,"maxInstockCreditBuyPercentage":null,"variantSyncSettings":null}],"event":null,"shopifyId":7054208368819,"selectedVariant":-1,"overallQuantity":null,"img":"https://images.binderpos.com/b43c7721-dd76-50ec-b4e1-f055b8b14a0b.jpg","tcgImage":null,"title":"Boseiju, Who Endures [Kamigawa: Neon Dynasty]","vendor":null,"tags":null,"handle":"boseiju-who-endures-kamigawa-neon-dynasty","productType":null,"metaFieldsGlobalDescriptionTag":null,"metaFieldsGlobalTitleTag":null,"templateSuffix":null,"name":"Boseiju, Who Endures","setName":"Kamigawa: Neon Dynasty","collectorNumber":"266","extendedName":"Boseiju, Who Endures"},{"id":0,"variants":[{"id":0,"shopifyId":41220031774899,"productTitle":null,"tcgImage":null,"collectorNumber":null,"img":null,"title":"Near Mint Foil","barcode":null,"sku":null,"price":83.1,"cashBuyPrice":null,"storeCreditBuyPrice":null,"maxPurchaseQuantity":null,"canPurchaseOverstock":null,"creditOverstockBuyPrice":null,"overtStockBuyPrice":null,"quantity":1,"reserveQuantity":null,"position":null,"taxable":null,"taxCode":null,"option1":null,"option2":null,"option3":null,"fulfillmentService":null,"priceOverride":null,"cashBuyPercent":null,"creditBuyPercent":null,"maxInstockBuyPrice":null,"maxInstockBuyPercentage":null,"maxInstockCreditBuyPrice":null,"maxInstockCreditBuyPercentage":null,"variantSyncSettings":null}],"event":null,"shopifyId":7070115528883,"selectedVariant":-1,"overallQuantity":null,"img":"https://images.binderpos.com/97d20557-a99a-5e16-bfd7-099327cb9705.jpg","tcgImage":null,"title":"Boseiju, Who Endures [Kamigawa: Neon Dynasty Prerelease Promos]","vendor":null,"tags":null,"handle":"boseiju-who-endures-kamigawa-neon-dynasty-prerelease-promos","productType":null,"metaFieldsGlobalDescriptionTag":null,"metaFieldsGlobalTitleTag":null,"templateSuffix":null,"name":"Boseiju, Who Endures","setName":"Kamigawa: Neon Dynasty Prerelease Promos","collectorNumber":"266","extendedName":"Boseiju, Who Endures"}],"imageUrl":null,"validName":false},{"requested":1,"found":25,"searchName":"Fires of Invention","productDetails":null,"products":[{"id":0,"variants":[{"id":0,"shopifyId":37689181339827,"productTitle":null,"tcgImage":null,"collectorNumber":null,"img":null,"title":"Near Mint","barcode":null,"sku":null,"price":1.0,"cashBuyPrice":null,"storeCreditBuyPrice":null,"maxPurchaseQuantity":null,"canPurchaseOverstock":null,"creditOverstockBuyPrice":null,"overtStockBuyPrice":null,"quantity":22,"reserveQuantity":null,"position":null,"taxable":null,"taxCode":null,"option1":null,"option2":null,"option3":null,"fulfillmentService":null,"priceOverride":null,"cashBuyPercent":null,"creditBuyPercent":null,"maxInstockBuyPrice":null,"maxInstockBuyPercentage":null,"maxInstockCreditBuyPrice":null,"maxInstockCreditBuyPercentage":null,"variantSyncSettings":null}],"event":null,"shopifyId":6111892963507,"selectedVariant":-1,"overallQuantity":null,"img":"https://images.binderpos.com/605fe33e-8d57-5731-ace3-95df3253f9e4.jpg","tcgImage":null,"title":"Fires of Invention [Throne of Eldraine]","vendor":null,"tags":null,"handle":"fires-of-invention-throne-of-eldraine","productType":null,"metaFieldsGlobalDescriptionTag":null,"metaFieldsGlobalTitleTag":null,"templateSuffix":null,"name":"Fires of Invention","setName":"Throne of Eldraine","collectorNumber":"125","extendedName":"Fires of Invention"},{"id":0,"variants":[{"id":0,"shopifyId":37689181503667,"productTitle":null,"tcgImage":null,"collectorNumber":null,"img":null,"title":"Near Mint Foil","barcode":null,"sku":null,"price":1.5,"cashBuyPrice":null,"storeCreditBuyPrice":null,"maxPurchaseQuantity":null,"canPurchaseOverstock":null,"creditOverstockBuyPrice":null,"overtStockBuyPrice":null,"quantity":1,"reserveQuantity":null,"position":null,"taxable":null,"taxCode":null,"option1":null,"option2":null,"option3":null,"fulfillmentService":null,"priceOverride":null,"cashBuyPercent":null,"creditBuyPercent":null,"maxInstockBuyPrice":null,"maxInstockBuyPercentage":null,"maxInstockCreditBuyPrice":null,"maxInstockCreditBuyPercentage":null,"variantSyncSettings":null}],"event":null,"shopifyId":6111892963507,"selectedVariant":-1,"overallQuantity":null,"img":"https://images.binderpos.com/605fe33e-8d57-5731-ace3-95df3253f9e4.jpg","tcgImage":null,"title":"Fires of Invention [Throne of Eldraine]","vendor":null,"tags":null,"handle":"fires-of-invention-throne-of-eldraine","productType":null,"metaFieldsGlobalDescriptionTag":null,"metaFieldsGlobalTitleTag":null,"templateSuffix":null,"name":"Fires of Invention","setName":"Throne of Eldraine","collectorNumber":"125","extendedName":"Fires of Invention"},{"id":0,"variants":[{"id":0,"shopifyId":37689247957171,"productTitle":null,"tcgImage":null,"collectorNumber":null,"img":null,"title":"Near Mint Foil","barcode":null,"sku":null,"price":3.2,"cashBuyPrice":null,"storeCreditBuyPrice":null,"maxPurchaseQuantity":null,"canPurchaseOverstock":null,"creditOverstockBuyPrice":null,"overtStockBuyPrice":null,"quantity":2,"reserveQuantity":null,"position":null,"taxable":null,"taxCode":null,"option1":null,"option2":null,"option3":null,"fulfillmentService":null,"priceOverride":null,"cashBuyPercent":null,"creditBuyPercent":null,"maxInstockBuyPrice":null,"maxInstockBuyPercentage":null,"maxInstockCreditBuyPrice":null,"maxInstockCreditBuyPercentage":null,"variantSyncSettings":null}],"event":null,"shopifyId":6111900008627,"selectedVariant":-1,"overallQuantity":null,"img":"https://images.binderpos.com/ba961ecc-b661-5883-9ac7-efc192e35c42.jpg","tcgImage":null,"title":"Fires of Invention [Throne of Eldraine Prerelease Promos]","vendor":null,"tags":null,"handle":"fires-of-invention-throne-of-eldraine-promos","productType":null,"metaFieldsGlobalDescriptionTag":null,"metaFieldsGlobalTitleTag":null,"templateSuffix":null,"name":"Fires of Invention","setName":"Throne of Eldraine Prerelease Promos","collectorNumber":"125s","extendedName":"Fires of Invention"}],"imageUrl":null,"validName":false}]`)
    });
}

export const useBinderPosStore = create<Store & Actions>((set, get) => ({
    memo: {},
    search: async (r) => {

        const hosts = resolveHosts();
        // Strip diacritics, if any, from BinderPOS seaches (their backend won't accept them otherwise.)
        const query = r.map(card => ({card: card.name.normalize("NFD").replace(/\p{Diacritic}/gu, ""), quantity: card.quantity}));

        const result = Object.values(hosts).map(async (v) => {
            const response = (await post(
                `https://portal.binderpos.com/external/shopify/decklist?storeUrl=${v.url}&type=mtg`, 
                query)).body as BinderPosResponse[];

            const result = response
                .flatMap(e => e.products)
                .reduce((accum: Record<string, VendorCard>, c) => {
                    //variants is always a single-element array
                    var variants = c.variants[0];
                    let vendor = v.name;
                    // Special case for Guf, who returns the store location in the `title` field
                    if (vendor === "Guf") {
                        const storeName = variants.title.match(/^\w+\b/)?.[0];
                        storeName && (vendor += ` (${storeName})`)
                    }

                    const entry: VendorCard = {
                        name: c.name,
                        quantity: variants.quantity,
                        price: variants.price,
                        setName: c.setName,
                        foil: !!variants.title.toLowerCase().match(/foil/),
                        vendorName: vendor,
                        priceRank: 0,
                    };

                    // Deduplicate entries
                    var key = entry.name + entry.setName + entry.vendorName + entry.foil + entry.price.toString();
                    if (accum[key]) {

                        accum[key].quantity += entry.quantity;
                    } else {
        
                        accum[key] = entry;
                    }

                    return accum;
                }, {})

            return Object.values(result);
        });

        return Promise.all(result)
            .then((v) => v.flat());
    }
}))