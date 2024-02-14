import { create } from "zustand";
import { CardRequest } from "../converter/QueryConverter";
import { VendorCard } from "../types/Cards";
import { MTGMATE_VENDORS } from "../types/Vendors";
import { get, post } from "../api/Http";

interface Store {
    memo: { [query: string]: Promise<VendorCard[]> }
}

interface Actions {
    search: (r: CardRequest[]) => Promise<VendorCard[]>
}

const resolveHosts = () => {

    const resolved = Object.assign({}, MTGMATE_VENDORS);
    const exclude: Record<string, boolean> = JSON.parse(localStorage.getItem("fs-ignore-vendors") || "{}");
    Object.keys(exclude).forEach(k => delete resolved[k]);

    return resolved;
}

export const useMtgMateStore = create<Store & Actions>((set, _get) => ({
    memo: {},
    search: async (r) => {

        const hosts = resolveHosts();
        const query = r.map(card => `${card.quantity} ${card.name}`)
            .reduce((s1, s2) => `${s1}\n${s2}`);

        const result = Object.values(hosts).map(async (v) => {
            const response = (await get(`${v.url}${encodeURIComponent(query)}`)).body as string;

            const dom = new DOMParser().parseFromString(response, "text/html");
            // Handle no-match case - even though TS claims this can't be undefined, it of course can.
            const table = dom.querySelectorAll("tbody").item(1);
            if (!table) {
                return [];
            }
            const result = Array.from(table.querySelectorAll("tr"))
                .map(r => {
                    const tdCard = r.querySelector("td.card-name")
                    let name = tdCard?.querySelector("a")?.text.trim() || "";
                    if (name.indexOf("(") > 0) {
                        name = name.substring(0, name.indexOf("(") - 1);
                    }

                    const cardHref = tdCard?.querySelector("a")?.href.trim()

                    let path = ""
                    if (cardHref != null) {
                        const url = new URL(cardHref)
                        path = `${v.vendorUrl}${url.pathname}`
                    }
                    const ret: VendorCard = {
                            name: name,
                            quantity: parseInt(r.querySelector("td.available-quantity")?.textContent?.trim() || "0"),
                            price: parseFloat(r.querySelector("td.price")?.textContent?.trim().slice(1) || "0.00"),
                            setName: r.querySelector("td.magic-set-name")?.querySelector("a")?.text.trim() || "",
                            foil: tdCard?.querySelector("span.finish")?.textContent?.trim() !== "Nonfoil",
                            vendor: v.name,
                            priceRank: 0,
                            url: path
                        }
                    ;

                    return ret;
                })
            return result;
        });

        return Promise.all(result)
            .then((v) => v.flat());
    }
}))