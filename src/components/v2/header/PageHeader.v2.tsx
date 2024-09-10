import React from "react";
import {ColorModeSwitcher} from "../theme/ColorModeSwitcher";
import VendorFilter from "../search/VendorFilter.v2";

export const PageHeader = () => {
    return (
        <nav
            className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />*/}
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Frantic Search</span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4 w-14">
                    <VendorFilter/>
                    <ColorModeSwitcher/>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <span
                        className="self-center text-lg whitespace-nowrap dark:text-white">Search Australian MTG vendors</span>
                </div>
            </div>
        </nav>
    )
}