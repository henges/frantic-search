import {ColorModeSwitcher} from "../theme/ColorModeSwitcher";
import React from "react";
import VendorFilter from "./VendorFilter.v2";

export const SearchNav = () => {
    return(
        <div className={"flex fixed top-4 right-4 flex-col gap-4 w-6"}>
            <VendorFilter/>
            <ColorModeSwitcher/>
        </div>
    )
}