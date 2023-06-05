export type SearchRequest = {
    name: string
    quantity: string
}

export const parseSearchString = (input: string): SearchRequest[] => {

    // The regex here is quite complicated...
    // The first portion says, if the line starts with a number, match
    // that number plus any number of spaces and wordy characters.
    // The number itself is also wrapped in a capturing group.
    // The second portion effectively just matches the remainder of the string 
    // which should be the card name.
    // The use of the conditional causes there to be an additional matching group
    // in position 1, which we ignore.
    return input
        .split('\n')
        .map(l => l.match(/((?=([0-9]+))\w*\s*)?(.+)/))
        .filter(l => l && l.length > 0)
        .map((l) => {
            
            const [_fullMatch, _countWithSpaces, quantity, name] = l as RegExpMatchArray; // guaranteed non-null via `filter` call above
            return {
                name: name.trim(),
                quantity: quantity || "1"
            }
        })
}