import { create } from "zustand";
import { SearchRequest } from "../api/SearchProvider";
import { VendorCard } from "../types/Cards";
import { BINDER_POS_VENDORS } from "../types/Vendors";
import _ from "lodash";
import { HttpResponse, post } from "../api/Http";
import { BinderPosRequest, BinderPosResponse } from "../types/BinderPos";

interface Store {
    memo: { [query: string]: Promise<VendorCard[]> }
}

interface Actions {
    search: (r: SearchRequest[]) => Promise<VendorCard[]>
}

const resolveHosts = () => {

    const resolved = Object.assign({}, BINDER_POS_VENDORS);
    const exclude: Array<string> = JSON.parse(localStorage.getItem("fs-ignore-vendors") || "[]");
    exclude.forEach(k => delete resolved[k]);

    return resolved;
}

export const fakePost = (url: string, query: any) => {
    console.log(url, query);
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
        const query = r.map(card => ({card: card.name, quantity: card.quantity}));

        const reqs = _.chain(hosts)
            .transform((accum: Record<string, Promise<HttpResponse>>, h) => {
                accum[h.name] = fakePost(
                    `https://portal.binderpos.com/external/shopify/decklist?storeUrl=${h.url}&type=mtg`, 
                    query)
            })
            .map(async (v, k) => {
                const result = (await v).body as BinderPosResponse[];
                return _.chain(result)
                    .flatMap((entry) => _.map(entry.products, (card) => {
                        //variants is always a single-element array
                        var variants = card.variants[0];
        
                        return {
                            name: card.name,
                            availableQuantity: variants.quantity,
                            price: variants.price,
                            setName: card.setName,
                            foil: !!variants.title.toLowerCase().match(/foil/),
                            vendorName: k,
                            priceRank: 0,
                        } as VendorCard;
                    }))
                    .value();
            })
            .value();

        console.log(reqs)

        return Promise.all(reqs)
            .then((v) => v.flat());
    }
}))