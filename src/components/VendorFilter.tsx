import { Box, Button, Checkbox, Flex, HStack, IconButton, Modal, VStack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { VENDORS } from "../types/Vendors";
import { useLocalStorage } from "usehooks-ts";
import { FaMoon } from "react-icons/fa";
import { BasicModal } from "./modal/BasicModal";
import { MdStore } from 'react-icons/md'

const VendorFilter = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const vendors = Object.values(VENDORS).flatMap(e => Object.values(e)).sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);
    const [ignore, setIgnore] = useLocalStorage<Record<string, boolean>>("fs-ignore-vendors", {});
    const [transientIgnore, setTransientIgnore] = useState<Record<string, boolean>>(ignore)

    const handleCheck = (checked: boolean, url: string) => {

        let newIgnore = {...transientIgnore}
        if (!checked) {
            newIgnore[url] = true
        } else {
            delete newIgnore[url];
        }

        setTransientIgnore(newIgnore);
    }

    const onReset = () => {

        setTransientIgnore({});
    }

    const onSave = () => {

        setIgnore(transientIgnore);
    }

    useEffect(() => {
        close();
    }, [ignore])

    const close = () => {

        setTransientIgnore(ignore);
        onClose();
    }

    return (
        
        <>
        <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={onOpen}
            icon={<MdStore />}
            aria-label={`Set vendor options`} />
        <BasicModal isOpen={isOpen} onReset={onReset} onSave={onSave} onClose={close} title="Vendor options">
            <VStack wrap={"wrap"} width="100%" maxH={"20%"} alignItems={"baseline"}>
                <Text>
                    The following vendors are currently supported. If a particular vendor isn't
                    relevant to you, you may exclude them from the search results here.
                </Text>
                {vendors.map(e => (
                <Checkbox key={e.name} onChange={ev => handleCheck(ev.target.checked, e.url)} isChecked={!transientIgnore[e.url]}>
                    {e.name}
                </Checkbox>
                ))}
            </VStack>
        </BasicModal>
        </>
    )
}

export default VendorFilter;