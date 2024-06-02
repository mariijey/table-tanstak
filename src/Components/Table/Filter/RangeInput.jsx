import React from "react";
import { useState,useEffect } from "react";

const RangeInput = ({ accessorKey, onChange, value:initialValue , name }) => {
  
  // states
  const [value, setValue] =useState(initialValue);
  console.log(value);
  // hooks
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 500);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <label className="relative block">
      <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {accessorKey}
      </span>
      <input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={name}
        name={name}
      />
    </label>
  );
};

export default RangeInput;
