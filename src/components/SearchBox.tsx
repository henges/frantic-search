import { Button, HStack, Textarea, VStack } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export type SearchBoxProps = {
    handleSearch: (query: string) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {

    const [searchString, setSearchString] = useState<string>("");

    const handleTextEntry = (e: ChangeEvent<HTMLTextAreaElement>) => {

        setSearchString(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key !== "Enter" || (!e.ctrlKey && !e.shiftKey)) {
            return;
        }

        e.preventDefault();
        handleSearch(searchString);
    }

    return (
        <HStack>
            <VStack>
                <Textarea 
                    resize={"both"} 
                    onKeyDown={handleKeyDown}
                    onChange={handleTextEntry}
                />
                <Button onClick={() => handleSearch(searchString)}>Search</Button>
            </VStack>
        </HStack>
    )
}

export default SearchBox;