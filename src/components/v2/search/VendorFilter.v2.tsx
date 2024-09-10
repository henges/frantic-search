import {useRef, useState} from "react";
import {useLocalStorage} from "usehooks-ts";
import {VENDORS} from "../../../types/Vendors";
import {BuildingStorefrontIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const VendorFilter = () => {
    const [open, setOpen] = useState(false)

    const vendors = Object.values(VENDORS).flatMap(e => Object.values(e)).sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);
    const [ignore, setIgnore] = useLocalStorage<Record<string, boolean>>("fs-ignore-vendors", {});
    const [transientIgnore, setTransientIgnore] = useState<Record<string, boolean>>(ignore)
    const hasChanges = useRef<boolean>(false)

    const handleCheck = (checked: boolean, url: string) => {
        console.log(checked)
        let newIgnore = {...transientIgnore}
        if (!checked) {
            newIgnore[url] = true
        } else {
            delete newIgnore[url];
        }

        setTransientIgnore(newIgnore);
        hasChanges.current = true;
    }

    const onReset = () => {

        setTransientIgnore({});
        hasChanges.current = true;
    }

    const onSave = () => {

        setIgnore(transientIgnore);
        hasChanges.current = false;
        close();
    }

    const close = () => {

        // Needed to avoid setting stale state.
        if (hasChanges.current) {
            setTransientIgnore(ignore);
            hasChanges.current = false;
        }
        setOpen(false)
    }

    return (
        <>
            <BuildingStorefrontIcon
                className={'cursor-pointer dark:bg-gray-900 dark:fill-white'}
                onClick={() => setOpen(true)}
                aria-label={`Set vendor options`}
            />
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-4/12 mx-auto bg-gray-100 h-fit pb-5 mt-20 rounded-md">
                    <div
                        className="flex flex-col items-end justify-start mt-6 p-4 text-center sm:items-center sm:p-0"
                    >
                        <div className={"flex justify-between w-full px-5"}>
                            <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                Vendor Options
                            </DialogTitle>
                            <XMarkIcon className={"h-6 w-6 cursor-pointer"} onClick={() =>setOpen(false)}/>
                        </div>
                        <div className="w-3/4 text-sm mt-10">
                            <p>
                                The following vendors are currently supported. If a particular vendor isn't
                                relevant to you, you may exclude them from the search results here.
                            </p>
                        </div>

                        <div className="flex justify-around items-baseline flex-wrap mt-10 mx-auto w-auto gap-2">
                            {vendors.map(e => (
                                <div key={e.name} className={'basis-5/12 inline-flex gap-2'}>
                                    <input type={'checkbox'} onChange={ev => handleCheck(ev.target.checked, e.url)}
                                           checked={!transientIgnore[e.url]}/> {e.name}
                                </div>
                            ))}
                        </div>
                        <div className={"mt-10 flex justify-between w-5/6"}>
                            <button
                                onClick={() => onReset()}
                                className={"text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>Select
                                All
                            </button>
                            <div>
                                <button
                                    onClick={() => onSave()}
                                    className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>
                                    Save
                                </button>
                                <button
                                    onClick={() =>setOpen(false)}
                                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default VendorFilter;