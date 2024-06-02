import React from "react";
import styles from "./TableComponent.module.css";

function TableRow({ rows }) {
  

  return (
    <tbody>
      {rows?.map((row) => (
        <tr key={row.id} className="text-sm odd:bg-white even:bg-slate-50">
          {row.getAllCells().map((cell, i) =>
             (
              <td
                key={i}
                className="px-6 py-4 lg:text-base md:text-xs  whitespace-nowrap text-slate-500"
              >
                {cell.getValue()}{" "}
              </td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default TableRow;
