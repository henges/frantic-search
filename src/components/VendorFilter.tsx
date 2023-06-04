import { Box, Button, Checkbox, Flex, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { VENDORS } from "../types/Vendors";
import { useLocalStorage } from "usehooks-ts";

const VendorFilter = () => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const vendors = Object.values(VENDORS).flatMap(e => Object.values(e)).sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);
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
        <Flex height="100%" flexDir="column" alignItems={"center"} zIndex={1}>
            {expanded && (
                <>
                {/*TODO need to figure out the max height thing better*/}
                <VStack wrap={"wrap"} width="100%" maxH={"50%"} alignItems={"baseline"}>
                    {vendors.map(e => (
                    <Checkbox key={e.name} onChange={ev => handleCheck(ev.target.checked, e.url)} isChecked={!ignore[e.url]}>
                        {e.name}
                    </Checkbox>
                    ))}
                </VStack>
                <Button onClick={() => setExpanded(false)}>Hide</Button>
                </>
            )}
            {!expanded &&
            <Button maxW="min-content" onClick={() => {if (!expanded) {setExpanded(true)}}}>
                Show vendors
            </Button>}
        </Flex>
    )
}

export default VendorFilter;