import { Box, Container, Flex, Grid, GridItem, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react"
import SearchBox from "./SearchBox";
import VendorFilter from "./VendorFilter";
import ResultTable from "./ResultTable";
import { useBinderPosStore } from "../stores/BinderPosStore";
import { parseSearchString } from "../converter/QueryConverter";
import { useState } from "react";
import { VendorCard } from "../types/Cards";

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

const SearchPage = () => {

    const search = useBinderPosStore((state) => state.search)
    const [results, setResults] = useState<VendorCard[]>([])

    const processResults = (res: VendorCard[]) => {

        
    }

    const handleSearch = async (query: string) => {

        const req = parseSearchString(query);
        const res = await search(req);
        const processed = processResults(res);
        setResults(res);
    }

    return (
        <Container maxW={"100%"}>
            <Grid templateColumns={"repeat(3, 1fr)"}>
                <GridItem>
                    <VendorFilter/>
                </GridItem>
                <GridItem>
                    <VStack>
                        <PageHeader/>
                        <SearchBox handleSearch={handleSearch}/>
                    </VStack>
                </GridItem>
            </Grid>
            <ResultTable results={results}/>
        </Container>
    )
}

export default SearchPage;