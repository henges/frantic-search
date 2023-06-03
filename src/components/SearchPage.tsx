import { Box, Container, Flex, Grid, GridItem, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react"
import SearchBox from "./SearchBox";
import VendorFilter from "./VendorFilter";

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
        </Container>
    )
}

export default SearchPage;