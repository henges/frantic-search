import {createHashRouter} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import * as v2 from "./components/v2/SearchPage.v2";
import {App } from "./components/v2/App.v2";
import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {layoutV1} from "./layouts/layout.v1";

export const AppRouter = createHashRouter([
    {
        path: "/",
        element: <ChakraProvider theme={layoutV1}><SearchPage/></ChakraProvider>,
    },
    {
        path: "/v2",
        element: <App />,
        children: [{
            path: "",
            element: <v2.SearchPage />
        }]
    }
]);