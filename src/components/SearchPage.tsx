import { Box, Container, Flex, Grid, GridItem, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react"
import SearchBox from "./SearchBox";
import VendorFilter from "./VendorFilter";
import ResultTable from "./ResultTable";

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

    const cards = [{
        name: "Snapcaster Mage",
        availableQuantity: 1,
        foil: true,
        price: 50,
        priceRank: 1,
        setName: "BRO",
        vendorName: "Good Games Morley"
    }].flatMap((c) => {
        const r = []
        for (var i = 0; i < 20; i++) {
            r.push(c)
        }
        return r
    })

    return (
        <Container maxW={"100%"}>
            <Grid templateColumns={"repeat(3, 1fr)"}>
                <GridItem>
                    <VendorFilter/>
                </GridItem>
                <GridItem>
                    <VStack>
                        <PageHeader/>
                        <SearchBox/>
                    </VStack>
                </GridItem>
            </Grid>
            <ResultTable cards={cards}/>
        </Container>
    )
}

export default SearchPage;