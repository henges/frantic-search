import { Button, HStack, Textarea, VStack } from "@chakra-ui/react";
import { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from "react";
import { parseSearchString } from "../converter/QueryConverter";
import { useBinderPosStore } from "../stores/BinderPosStore";

const SearchBox = () => {

    const [searchString, setSearchString] = useState<string>("");
    const search = useBinderPosStore((state) => state.search)

    const handleTextEntry = (e: ChangeEvent<HTMLTextAreaElement>) => {

        setSearchString(e.target.value);
    }

    const handleSearch = async () => {

        const req = parseSearchString(searchString);

        search(req);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key !== "Enter" || (!e.ctrlKey && !e.shiftKey)) {
            return;
        }

        e.preventDefault();
        handleSearch();
    }

    return (
        <HStack>
            <VStack>
                <Textarea 
                    resize={"both"} 
                    onKeyDown={handleKeyDown}
                    onChange={handleTextEntry}
                />
                <Button onClick={handleSearch}>Search</Button>
            </VStack>
        </HStack>
    )
}

export default SearchBox;