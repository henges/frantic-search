import {
    ChakraProvider,
    StyleFunctionProps,
    extendTheme,
} from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools'
import SearchPage from "./components/SearchPage"
import {ColorModeSwitcher} from "./components/vendor/ColorModeSwitcher"
import React from "react";
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "./router";

export const App = () => (
    <RouterProvider router={AppRouter}/>
)
