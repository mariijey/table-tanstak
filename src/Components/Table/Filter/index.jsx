import React, { Fragment } from "react";
import TextInput from "./TextInput";
import RangeInput from "./RangeInput";
import StatusInput from "./StatusInput";
export default function FilterTable({ columns, table }) {
  // functions
  const renderFilter = (filterType, accessorKey, column) => {
    switch (filterType) {
      case "text":
        return (
          <TextInput
            accessorKey={accessorKey}
            onChange={(value) => {
              return column.setFilterValue(value);
            }}
            value={column.getFilterValue() ?? ""}
          />
        );
      case "range":
        return (
          <div className="grid grid-cols-2 gap-2">
            <RangeInput
              onChange={(value) => {
                console.log("min", value);
                return column.setFilterValue((oldValue) => [
                  value,
                  oldValue?.[0],
                ]);
              }}
              value={column.getFilterValue()?.[0] ?? ""}
              accessorKey={accessorKey}
              name="min"
            />
            <RangeInput
              onChange={(value) => {
                console.log("max", value);
                return column.setFilterValue((oldValue) => [
                  oldValue?.[1],
                  value,
                ]);
              }}
              value={column.getFilterValue()?.[1] ?? ""}
              accessorKey={accessorKey}
              name="max"
            />
          </div>
        );
      case "status":
        return (
          <StatusInput
            accessorKey={accessorKey}
            onChange={(value) => {
              console.log("max", value);
              return column.setFilterValue(value);
            }}
            value={column.getFilterValue()?.toString() ?? ""}
          />
        );
      default:
        return null;
    }
  };
  // render
  return (
    <div className="w-4/5 max-sm:max-w-sm  mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {table.getHeaderGroups()[0].headers.map((header, index) => (
          <Fragment key={header.id}>
            {renderFilter(
              header.column.columnDef.filterType,
              header.column.columnDef.accessorKey,
              header.column
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
