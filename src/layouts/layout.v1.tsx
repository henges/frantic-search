import {extendTheme, StyleFunctionProps} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export const layoutV1 = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                fontFamily: 'body',
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode('bisque', 'gray.800')(props),
                lineHeight: 'base',
            },
            "textarea": {
                bg: mode('gray.100 !important', 'gray.800')(props)
            },
            Checkbox: {
                border: mode('gray.100 !important', 'gray.800')(props)
            },
        }),
    },
})