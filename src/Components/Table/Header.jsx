
export default function Header({ columns}) { 

  return (
    <tr>
      {
        columns?.map((col, index) => (
          <th key={index} scope="col" className="text-left lg:text-base md:text-xs px-6 py-5">
            {col.header ? col.header: '-'}
          </th>
        ))}
    </tr>
  );
}


