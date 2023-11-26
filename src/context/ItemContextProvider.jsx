import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

 useEffect(() => {
  async function fetchData(){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    
    setItems(data)
  }
  fetchData();

 },[])


  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  );
};