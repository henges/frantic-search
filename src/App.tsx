import {
  ChakraProvider,
  StyleFunctionProps,
  extendTheme,
} from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import SearchPage from "./components/SearchPage"
import { ColorModeSwitcher } from "./components/vendor/ColorModeSwitcher"

const custom = extendTheme({
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

export const App = () => (
  <ChakraProvider theme={custom}>
    <ColorModeSwitcher/>
    <SearchPage/>
  </ChakraProvider>
)
