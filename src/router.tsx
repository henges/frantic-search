import {createBrowserRouter} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import {SearchPageV2} from "./components/v2/SearchPageV2";
import {AppV2} from "./components/v2/AppV2";
import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {layoutV1} from "./layouts/layout.v1";
import {layoutV2} from "./layouts/layout.v2";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <ChakraProvider theme={layoutV1}><SearchPage/></ChakraProvider>,
    },
    {
        path: "/v2",
        element: <ChakraProvider theme={layoutV2}><AppV2/></ChakraProvider>,
        children: [{
            path: "",
            element: <SearchPageV2/>
        }]
    }
]);