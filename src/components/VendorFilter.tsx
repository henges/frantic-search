import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const VendorFilter = () => {

    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Box onClick={() => {setExpanded(!expanded)}}>
            {expanded ? 
            <Box>
                Vendors.
            </Box> 
            : 
            <Box>
                Show vendors...
            </Box>}
        </Box>
    )
}

export default VendorFilter;