import {useLocalStorage} from "usehooks-ts";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";

export const ColorModeSwitcher = () => {

    const [dark, setDark] = useLocalStorage<boolean>("fs-use-dark-mode", window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div>
            {dark && <MoonIcon onClick={darkModeHandler} className={' cursor-pointer'}/>}
            {!dark && <SunIcon onClick={darkModeHandler} className={' cursor-pointer'}/>}
        </div>
    )
}