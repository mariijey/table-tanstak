import React, { useState } from "react";

const StatusInput = ({accessorKey ,onChange,value }) => {


  return (
    <div>
      <label className="relative block">
        <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {accessorKey}
        </span>
        <select
          value={value}
          onChange={({ target }) => onChange(target.value) }
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="select"
          name="select"
        >
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
      </label>
    </div>
  );
};

export default StatusInput;
