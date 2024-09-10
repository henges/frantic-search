import {useLocalStorage} from "usehooks-ts";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import {useEffect} from "react";

export const ColorModeSwitcher = () => {

    const [dark, setDark] = useLocalStorage<boolean>("fs-use-dark-mode", window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const darkModeHandler = () => {
        setDark(!dark);
    }

    useEffect(() => {
        if (dark) document.body.classList.add("dark")
        else document.body.classList.remove("dark")
    }, [dark])

    return (
        <>
            {!dark && <MoonIcon onClick={darkModeHandler} className={'cursor-pointer dark:bg-gray-900 dark:fill-white'}/>}
            {dark && <SunIcon onClick={darkModeHandler} className={'cursor-pointer dark:bg-gray-900 dark:fill-white'}/>}
        </>
    )
}