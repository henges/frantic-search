import {useMtgMateStore} from "../../stores/MtgMateStore";
import {useBinderPosStore} from "../../stores/BinderPosStore";
import React, {useState} from "react";
import {VendorCard} from "../../types/Cards";
import ResultTableV2 from "./ResultTableV2";
import {CardRequest, parseSearchString} from "../../converter/QueryConverter";
import {Container, Flex, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import SearchBox from "../SearchBox";
import VendorFilter from "../VendorFilter";
import {ColorModeSwitcher} from "../vendor/ColorModeSwitcher";
import {useScryfallStore} from "../../stores/ScryfallStore";
import {Card} from "scryfall-api";

const PageHeader = () => (
    <>
        <Heading>
            Frantic Search
        </Heading>
        <Text>
            Search Australian MTG vendors
        </Text>
    </>
)

const SearchPageNav = () => (
    <Flex
        flexDir="column"
        gap="2"
        position="fixed"
        top="16px"
        right="16px"
    >
        <VendorFilter/>
        <ColorModeSwitcher/>
    </Flex>
)
export const SearchPageV2 = () => {
    const searchMtgMate = useMtgMateStore((state) => state.search)
    const searchBinderPos = useBinderPosStore((state) => state.search)
    const searchScryfall = useScryfallStore((state) => state.search)

    const [results, setResults] = useState<VendorCard[] | null>(null)
    const [scryfallCards, setScryfallCards] = useState<Card[] | null>(null)
    const search = async (query: CardRequest[]) => {
        return Promise.all([searchBinderPos(query), searchMtgMate(query)]).then(r => r.flat())
    }

    const scryfallSearch = async (query: CardRequest[]) => {
        return Promise.all([searchScryfall(query)]).then(r => r.flat())
    }

    const processResults = (res: VendorCard[]) => {

        // Map entries to card name
        const keyedByName = res.reduce((accum: Record<string, VendorCard[]>, e) => {

            if (!accum[e.name]) {
                accum[e.name] = [];
            }
            accum[e.name].push(e);
            return accum;
        }, {})

        // Sort and rank results
        return Object.values(keyedByName).map(v => {
            const sorted = v.sort((a, b) => a.price - b.price);

            let priceRank = 1;
            for (let i = 0; i < sorted.length; i++) {

                // After the first entry, check that the previous
                // values is actually lower than the current and
                // increment current price rank if so
                if (i > 0 && sorted[i - 1].price < sorted[i].price) {
                    priceRank++
                }
                sorted[i].priceRank = priceRank;
            }

            return sorted;
        }).flat();
    }

    const handleSearch = async (query: string) => {
        const req = parseSearchString(query)
        const res = await search(req)
        const sc = await scryfallSearch(req)


        const processed = processResults(res)
        setResults(processed)
        if (sc.length > 0) {
            processed.forEach(p => {
                p.imageUrl = sc.find(it => it.name == p.name && p.setName == it.set_name)?.image_uris?.png
            })
        }
        // setScryfallCards(sc)
    }

    return (
        <>
            <SearchPageNav/>
            <Container w="100%" h="100%" maxW="100%" marginInline={"0"} py="16px">
                {/* TODO: grid is just for padding now, can center content instead. */}
                <HStack alignItems={"center"} justifyContent={"center"}>
                    <VStack>
                        <PageHeader/>
                        <SearchBox handleSearch={handleSearch}/>
                    </VStack>
                </HStack>
                {results && <ResultTableV2 results={results}/>}
            </Container>
        </>
    )
}