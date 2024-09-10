import {create} from "zustand";
import {CardRequest} from "../converter/QueryConverter";
import {VendorCard} from "../types/Cards";
import {MTGMATE_VENDORS} from "../types/Vendors";
import {get, post} from "../api/Http";

interface Store {
    memo: { [query: string]: Promise<VendorCard[]> }
}

interface Actions {
    search: (r: CardRequest[]) => Promise<VendorCard[]>
}

const resolveHosts = () => {

    const resolved = Object.assign({}, MTGMATE_VENDORS);
    const exclude: Record<string, boolean> = JSON.parse(localStorage.getItem("fs-ignore-vendors") || "{}");
    const filtered = Object.fromEntries(Object.entries(resolved).filter(([k, v]) => !exclude.hasOwnProperty(v.url)));

    return filtered;
}

export const useMtgMateStore = create<Store & Actions>((set, _get) => ({
    memo: {},
    search: async (r) => {
        if (r === null || r.length === 0) return [];

        const hosts = resolveHosts();
        const query = r.map(card => `${card.quantity} ${card.name}`)
            .reduce((s1, s2) => `${s1}\n${s2}`);

        const createCardGroup = (nodes: NodeListOf<HTMLTableRowElement>) => {
            const nodeArray = Array.from(nodes);
            let groups : HTMLTableRowElement[][] = [];
            let tempGroup : HTMLTableRowElement[] = [];
            let inGroup = false;
            nodeArray.forEach((node) => {
                if (node.classList.contains('new-card-sku')) {
                    // If we encounter 'new-card-sku' and we're already in a group, push the group
                    if (inGroup) {
                        groups.push(tempGroup); // Store the completed group
                        tempGroup = []; // Reset for the next group
                    }
                    inGroup = true; // We're now in a new group
                }

                if (inGroup) {
                    tempGroup.push(node); // Add nodes to the current group
                }
            });

            // Push the final group, if any
            if (tempGroup.length) {
                groups.push(tempGroup);
            }

            return groups;
        }

        const result = Object.values(hosts).map(async (v) => {
            const response = (await get(`${v.url}${encodeURIComponent(query)}`)).body as string;

            const dom = new DOMParser().parseFromString(response, "text/html");
            // Handle no-match case - even though TS claims this can't be undefined, it of course can.
            const table = dom.querySelectorAll("tbody").item(1);
            if (!table) {
                return [];
            }
            const nodeList = table.querySelectorAll("tr");
            const groupedCards = createCardGroup(nodeList)

            const result = groupedCards.map(group => {
                let cardName = group[0]?.textContent?.trim() || "";
                return group.slice(1)?.map(r => {
                    const tdRow = r.querySelector("td.card-name")
                    let name = cardName;
                    if (name.indexOf("(") > 0) {
                        name = name.substring(0, name.indexOf("(") - 1);
                    }

                    const cardHref = tdRow?.querySelector("a")?.href.trim()
                    let path = ""
                    if (cardHref != null) {
                        const url = new URL(cardHref)
                        path = `${v.vendorUrl}${url.pathname}`
                    }

                    const qty = r?.querySelector("td.quantity")?.textContent?.replace("Available: ", "").trim() || "0";
                    const ret: VendorCard = {
                            name: name,
                            quantity: parseInt(qty),
                            price: parseFloat(r.querySelector("td.price")?.textContent?.trim().slice(1) || "0.00"),
                            setName: tdRow?.querySelector("span.set-name-link")?.querySelector("a")?.text.trim() || "",
                            foil: tdRow?.querySelector("span.finish")?.textContent?.trim() !== "Nonfoil",
                            vendor: v.name,
                            priceRank: 0,
                            url: path
                        }
                    ;

                    return ret;
                })
            })


            return result.flat();
        });

        return Promise.all(result)
            .then((v) => {
                return v.flat()
            });
    }
}))