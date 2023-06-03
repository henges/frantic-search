import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/vendor/ColorModeSwitcher"
import SearchPage from "./components/SearchPage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <SearchPage/>
  </ChakraProvider>
)
