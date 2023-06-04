import { Button, HStack, Textarea, VStack } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export type SearchBoxProps = {
    handleSearch: (query: string) => void|Promise<void>
}

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {

    const [searchString, setSearchString] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleTextEntry = (e: ChangeEvent<HTMLTextAreaElement>) => {

        setSearchString(e.target.value);
    }

    const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key !== "Enter" || (!e.ctrlKey && !e.shiftKey)) {
            return;
        }

        e.preventDefault();
        await doSearch();
    }

    const doSearch = async () => {
        setLoading(true);
        await handleSearch(searchString);
        setLoading(false);
    }

    return (
        <HStack>
            <VStack>
                <Textarea 
                    resize={"both"} 
                    onKeyDown={handleKeyDown}
                    onChange={handleTextEntry}
                />
                <Button isLoading={loading} onClick={doSearch}>Search</Button>
            </VStack>
        </HStack>
    )
}

export default SearchBox;