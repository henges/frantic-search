import { Box, Button, Checkbox, Flex, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { VENDORS } from "../types/Vendors";
import { useLocalStorage } from "usehooks-ts";

const VendorFilter = () => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const vendors = Object.values(VENDORS).flatMap(e => Object.values(e));
    const [ignore, setIgnore] = useLocalStorage<Record<string, boolean>>("fs-ignore-vendors", {});

    const handleCheck = (checked: boolean, url: string) => {

        let newIgnore: Record<string, boolean>
        if (!checked) {
            newIgnore = {...ignore, [url]: true}
        } else {
            newIgnore = {...ignore}
            delete newIgnore[url];
        }

        setIgnore(newIgnore);
    }

    return (
        <Box>
            {expanded && (
                <Flex flexDir="column">
                    {/*TODO need to figure out the max height thing better*/}
                    <VStack wrap={"wrap"} maxH={"180px"} alignItems={"baseline"}>
                        {vendors.map(e => (
                        <Checkbox key={e.name} onChange={ev => handleCheck(ev.target.checked, e.url)} isChecked={!ignore[e.url]}>
                            {e.name}
                        </Checkbox>
                        ))}
                    </VStack>
                    <Button onClick={() => setExpanded(false)}>Hide</Button>
                </Flex>
            )}
            {!expanded &&
            <Button onClick={() => {if (!expanded) {setExpanded(true)}}}>
                Show vendors...
            </Button>}
        </Box>
    )
}

export default VendorFilter;