import React, { useEffect, useState } from "react";
import { getUsersDoctors } from "../firebase/users";

export const SearchContext = React.createContext();

export function SearchContextProvider({ children }) {
  const searchFilterFunction = (text) => {
    if (text) {
      const newList = list.filter((user) => {
        const userList = user.name ? user.name.toUpperCase() : "".toUpperCase;
        const textBar = text.toUpperCase();
        return userList.indexOf(textBar) > -1;
      });
      setFilterList(newList);
    } else {
      setFilterList(list);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        open,
        setOpen,
        selectedDoctor,
        setSelectedDoctor,
        loading,
        setIsLoading,
        list,
        setList,
        filterList,
        setFilterList,
        searchFilterFunction,
        getDoctors,
        openFilter,
        setOpenFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
