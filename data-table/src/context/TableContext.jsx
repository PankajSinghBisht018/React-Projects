import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const TableContext = createContext();

export const TableProvider = (props) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const fetchTable = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = response.data;
        setTable(data);
    };
    fetchTable();
  }, []);

  return (
    <TableContext.Provider value={{ table, setTable }}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContext;
