import {
    createColumnHelper,
    useReactTable,
    getCoreRowModel,
    flexRender,
    RowData,
    ColumnMeta,
    getSortedRowModel,
    getPaginationRowModel,
    getFilteredRowModel
} from "@tanstack/react-table";
import {
    Box,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Center,
    Flex,
    Button,
    Select,
    Input,
    HStack,
    Link, Popover, PopoverTrigger, PopoverContent, Image, useColorModeValue
} from "@chakra-ui/react";
import {TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";
import {useMemo, useState} from "react";
import {VendorCard} from "../../types/Cards";

declare module '@tanstack/table-core' {
    interface ColumnMeta<TData extends RowData, TValue> {
        isNumeric: boolean
    }
}

export type ResultTableProps = {
    results: VendorCard[]
}

const ResultTableV2: React.FC<ResultTableProps> = ({results}) => {
    const [globalFilter, setGlobalFilter] = useState<string>("");

    const colHelper = createColumnHelper<VendorCard>();

    const linkColor = useColorModeValue('blue.500', 'white')

    const columns = useMemo(() => [
        colHelper.accessor(row => [row.name, row.imageUrl], {
            cell: info =>
                <Popover trigger="hover">
                    <PopoverTrigger><Link>{info.getValue()[0]}</Link></PopoverTrigger>
                    <PopoverContent><Image src={info.getValue()[1]}/></PopoverContent>
                </Popover>,
            header: "Card Name"
        }),
        colHelper.accessor("price", {
            cell: info => `$${info.getValue().toFixed(2)}`,
            header: "Price",
            meta: {
                isNumeric: true
            }
        }),
        colHelper.accessor("quantity", {
            cell: info => info.getValue(),
            header: "Quantity",
            meta: {
                isNumeric: true
            }
        }),
        colHelper.accessor("setName", {
            cell: info => info.getValue(),
            header: "Set Name"
        }),
        colHelper.accessor("priceRank", {
            cell: info => info.getValue(),
            header: "Price Rank"
        }),
        colHelper.accessor("foil", {
            cell: info => info.getValue() ? "Yes" : "No",
            header: "Foil"
        }),
        colHelper.accessor(row => [row.vendor, row.url], {
            cell: info => <Link color={'blue.500'} href={info.getValue()[1]}>{info.getValue()[0]}</Link>,
            header: "Vendor"
        }),
    ], [])

    const table = useReactTable({
        data: results,
        columns: columns,
        state: {
            globalFilter: globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    })

    return (
        <Flex pt="16px" direction="column">
            <Input
                placeholder="Filter results..."
                width={"sm"}
                alignSelf={["center", "start"]}
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
            <Box overflow="scroll">
                <Table>
                    <Thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                    const meta = header.column.columnDef.meta;
                                    return (
                                        <Th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            isNumeric={meta?.isNumeric}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}

                                            <Box as="span" pl="4">
                                                {header.column.getIsSorted() ? (
                                                    header.column.getIsSorted() === "desc" ? (
                                                        <TriangleDownIcon aria-label="sorted descending"/>
                                                    ) : (
                                                        <TriangleUpIcon aria-label="sorted ascending"/>
                                                    )
                                                ) : null}
                                            </Box>
                                        </Th>
                                    );
                                })}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {results.length > 0 ?
                            table.getRowModel().rows.map((row) => (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                        const meta = cell.column.columnDef.meta;
                                        return (
                                            <Td key={cell.id} isNumeric={meta?.isNumeric}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            ))
                            :
                            // again, why doesnt this work?
                            <Tr key={"none"}>
                                <Center w="100%">
                                    No results found... :\
                                </Center>
                            </Tr>}
                    </Tbody>
                </Table>
            </Box>
            <HStack my="8px" wrap="wrap">
                <Button
                    onClick={() => table.setPageIndex(0)}
                    isDisabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </Button>
                <Button
                    onClick={() => table.previousPage()}
                    isDisabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </Button>
                <Button
                    onClick={() => table.nextPage()}
                    isDisabled={!table.getCanNextPage()}
                >
                    {'>'}
                </Button>
                <Button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    isDisabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </Button>
                <Box minW="max-content">
                    Page {table.getState().pagination.pageIndex + 1} of{' '}{table.getPageCount()}
                </Box>
                <Flex minW="max-content" alignItems={"center"} gap="1">
                    Go to page:
                    <Input
                        type="number"
                        maxW="100px"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            table.setPageIndex(page)
                        }}
                    />
                </Flex>
                <Flex minW="max-content" alignItems={"center"} gap="1">
                    Show
                    <Select
                        value={table.getState().pagination.pageSize}
                        maxW="sm"
                        onChange={e => {
                            table.setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </Select>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default ResultTableV2;