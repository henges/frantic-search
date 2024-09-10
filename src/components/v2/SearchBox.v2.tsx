import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {Combobox, ComboboxInput, ComboboxOption, ComboboxOptions} from "@headlessui/react";
import * as scryfall from 'scryfall-api';
import {ArrowPathIcon, XMarkIcon} from "@heroicons/react/24/solid";

export type SearchBoxProps = {
    handleSearch: (query: string) => void | Promise<void>
}

const SearchBox: React.FC<SearchBoxProps> = ({handleSearch}) => {

    const [searchString, setSearchString] = useState<string>("");
    const [filteredCards, setFilteredCards] = useState<string[]>([""]);
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleTextEntry = (e: ChangeEvent<HTMLTextAreaElement>) => {

        setSearchString(e.target.value);
    }

    const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key !== "Enter" || (!e.ctrlKey && !e.shiftKey)) {
            return;
        }

        e.preventDefault();
        await doSearch();
    }

    const doSearch = async () => {
        setLoading(true);
        await handleSearch(selectedCards.join("\n"));
        setLoading(false);
    }


    const scryfallAutoComplete = async (q: string) => {
        const cards = await scryfall.Cards.autoCompleteName(q)
        setFilteredCards(cards)
    }

    useEffect(() => {
        if (searchString === "" || searchString.length < 3) {
            setFilteredCards([])
            return
        }
        scryfallAutoComplete(searchString)

    }, [searchString])

    return (
        <div className={""}>
            <div className={'flex items-baseline gap-1'}>
                <div className={"flex-grow"}>
                <Combobox value={searchString} onChange={(v: string) => setSelectedCards((prev) => [...prev, v])}
                          onClose={() => setSearchString('')}>
                    <ComboboxInput
                        placeholder={"Search for a card..."}
                        className={'h-fit w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                        displayValue={(name: string) => name.toString()}
                        onChange={(event) => setSearchString(event.target.value)}
                    />
                    <ComboboxOptions anchor="bottom" className="border empty:invisible w-[var(--input-width)] rounded-lg dark:bg-gray-500">
                        {filteredCards.map((name) => (
                            <ComboboxOption key={name} value={name} className="data-[focus]:bg-blue-200 p-2 rounded-lg dark:data-[focus]:bg-gray-700 dark:text-white">
                                {name}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
                </div>
                <button type="button"
                        onClick={doSearch}
                        className="min-w-24 mt-4 flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {!loading && <span>Search</span>}
                    {loading && <ArrowPathIcon className={'animate-spin size-4 align-middle'}/>}
                </button>
            </div>
            <div className={"mt-4"}>
                {selectedCards.map(it => {
                    return (
                        <span key={it}
                              className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                        {it}
                            <button
                                onClick={() => setSelectedCards(selectedCards.splice(0, selectedCards.indexOf(it)))}
                                className={"inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"}>
                            <XMarkIcon className={"size-4"}/>
                        </button>
                    </span>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchBox;