import React from "react";

const Footer = ({ columns, rows }) => {
  console.log();
  //constant
  const len = columns?.length - 1;
  const newColumns = columns.filter((col) => {
    return col.footer !== null;
  });
  // function
  const renderFooter = (col) => {
    if (col.accessorKey === "price") {
      return (
        <span>
          <span className="text-cyan-600 mr-2">total amount :</span>
          {rows?.reduce(
            (acc, row) => {
              const calculate = acc + row.original.price * row.original.count;
              console.log()
              return Number(calculate.toFixed(2)) },
            0
          )}
        </span>
      );
    }
    if (col.accessorKey === "product") {
      return (
        <span>
          <span className="text-cyan-600 mr-2">sum product :</span>
          {rows?.length}
        </span>
      );
    }
    if (col.accessorKey === "count") {
      return (
        <span>
          <span className="text-cyan-600 mr-2">sum :</span>
          {rows?.reduce((acc, row) => acc + row.original.count, 0)}
        </span>
      );
    }
    if (col.accessorKey === "final_amount") {
      return (
        <span>
          <span className="text-cyan-600 mr-2">total final amount :</span>
          {rows.reduce(
            (acc, row) => Number(acc) + Number(row.renderValue("final_amount")),
            0
          )}
        </span>
      );
    }
  };
  // render
  return (
    <tfoot className="border-t-2 border-cyan-500 w-full">
      <tr className="  w-full">
        {newColumns?.map((col, index) => (
          <td
            key={index}
            colSpan={col.colSpan}
            className="text-center text-base px-6 py-5 text-slate-500 "
          >
            {renderFooter(col)}
          </td>
        ))}
      </tr>
    </tfoot>
  );
};

export default Footer;
