import React from 'react'
import { createContext, useContext, useState } from 'react'
export const storeContext=createContext();
const Context = (props) => {
    const[token,setToken]=useState("Pratik");
    const value={token,setToken};
  return (
    <storeContext.Provider value={value}>
        {props.children}
    </storeContext.Provider>
  )
}

export default Context