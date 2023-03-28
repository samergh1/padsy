import React, { useEffect, useState } from "react";
import { getUsersDoctors } from "../firebase/users";

export const FilterContext = React.createContext();

export function FilterContextProvider({ children }) {
  const [listSpecialty, setListSpecialty] = useState([]);
  const [listCost, setListCost] = useState([]);
  const [rate, setRate] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const [search, setSearch] = useState("");

  const [doctors, setDoctors] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [filterDoctors, setFilterDoctors] = useState([]);

  const filterFunction = () => {
    const newList = doctors.filter((doctor) => {
      const specialtyCondition =
        listSpecialty.length > 0
          ? listSpecialty.includes(doctor.specialty)
          : true;
      const costCondition =
        listCost.length > 0
          ? listCost.filter(
              (cost) =>
                (cost.start ?? 0) <= doctor.cost &&
                doctor.cost <= (cost.end ?? 10000000)
            ).length > 0
          : true;
      const ratingCondition = rate != 0 ? rate == doctor.rating : true;

      const nameCondition =
        search.length > 0
          ? doctor.name.toLowerCase().includes(search.toLowerCase())
          : true;

      return (
        specialtyCondition && nameCondition && ratingCondition && costCondition
      );
    });
    setFilterDoctors(newList);
  };

  useEffect(() => {
    filterFunction();
  }, [search, listCost, listSpecialty, rate]);

  const getDoctors = async () => {
    const data = await getUsersDoctors();
    setDoctors(data);
    setFilterDoctors(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const handleListSpecialty = (idSpecialty) => {
    const isFound = listSpecialty.includes(idSpecialty);
    if (isFound) {
      const newListSpecialty = listSpecialty.filter(
        (value) => value !== idSpecialty
      );
      setListSpecialty(newListSpecialty);
    } else {
      setListSpecialty(listSpecialty.concat(idSpecialty));
    }
  };

  const handleListCost = (cost) => {
    const isFound = listCost.includes(cost);
    if (isFound) {
      const newListCost = listCost.filter((value) => value !== cost);
      setListCost(newListCost);
    } else {
      setListCost(listCost.concat(cost));
    }
  };

  const handleRate = (idRate) => {
    const isFound = rate == idRate;
    if (isFound) {
      setRate(0);
    } else {
      setRate(idRate);
    }
  };

  const resetSearch = () => {
    setListCost([]);
    setRate(0);
    setListSpecialty([]);
  };

  return (
    <FilterContext.Provider
      value={{
        resetSearch,
        handleRate,
        handleListCost,
        handleListSpecialty,
        setSearch,
        listSpecialty,
        listCost,
        rate,
        loading,
        filterDoctors,
        selectedDoctor,
        setSelectedDoctor,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
