import React, { useEffect, useState } from "react";
import { getUsersDoctors } from "../firebase/users";

export const SearchContext = React.createContext();

export function SearchContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const getDoctors = async () => {
    const data = await getUsersDoctors();
    setList(data);
    setIsLoading(false);
    setFilterList(data);
  };

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

  useEffect(() => {
    getDoctors();
  }, []);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
