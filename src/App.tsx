import React from "react";
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "./router";

export const App = () => {
    return (
        <RouterProvider router={AppRouter}/>
    )
}
