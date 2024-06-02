import React, { useEffect, useMemo, useState } from "react";
import TableHeader from "./Header";
import TableRow from "./TableRow";
import TableFooter from "./Footer";
import { data as info } from "../../constant/MokData";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import IndexFormTable from "./Filter";

function Table() {
  // state
  const [columnFilters, setColumnFilters] = useState([]);
  // hooks
  const columns = useMemo(() => {
    return [
      {
        accessorKey: "fullName",
        header: "Full Name",
        filterType: "text",
        footer: null,
      },
      {
        accessorKey: "email",
        header: "email",
        filterType: "text",
        footer: null,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        filterType: "text",
        footer: null,
      },
      {
        accessorKey: "product",
        header: "Product",
        filterType: "text",
        footer: "product",
        colSpan:1,
      },
      {
        accessorKey: "price",
        header: "price",
        filterType: "text",
        footer: "price",
        colSpan:2,
      },
      {
        accessorKey: "count",
        header: "count",
        filterType: "range",
        footer: "count",
        colSpan:2
      },
      {
        accessorKey: "tax",
        header: "tax",
        filterType: "status",
        footer: null,
      },
      {
        accessorKey: "final_amount",
        header: "final amount",
        filterType: "text",
        footer: "final_amount",
        colSpan: 2,
        accessorFn: (row) => {
          const calculatedValue =
            row.count * row.price - row.price * row.count * 0.003;
          return calculatedValue.toFixed(2);
        },
      },
    ];
  }, []);
  const data = useMemo(() => {
    return info;
  });
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(), //row model
    getRowId: (originalRow) => originalRow.uuid,
    getFilteredRowModel: getFilteredRowModel(),
  });
  // constant
  const rows = table.getRowModel().rows;
  // render
  return (
    <div className="container mx-auto mt-6">
      <IndexFormTable columns={columns} table={table} />
      <div className="shadow-md max-sm:max-w-sm overflow-x-scroll mt-6 shadow-md mx-auto my-5">
        <table className="container sm:mx-auto table-auto overflow-scroll ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <TableHeader columns={columns} />
          </thead>
          <TableRow rows={rows} />
          <TableFooter columns={columns} rows={rows} />
        </table>
      </div>
    </div>
  );
}

export default Table;
