import { Button, HStack, Textarea, VStack } from "@chakra-ui/react";
import { KeyboardEvent, useEffect } from "react";
import VendorFilter from "./VendorFilter";


const SearchBox = () => {

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key !== "Enter" || (!e.ctrlKey && !e.shiftKey)) {
            return;
        }

        // TODO run search
    }

    return (
        <HStack>
            <VStack>
                <Textarea resize={"both"} onKeyDown={handleKeyDown}></Textarea>
                <Button>Search</Button>
            </VStack>
        </HStack>
    )
}

export default SearchBox;