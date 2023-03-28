import React, { useEffect, useState } from "react";
import { getFeedBack } from "../firebase/users";

export const FeedbackContext = React.createContext();

export function FilterContextProvider({ children }) {
  const [doctor, setDoctor] = useState([]);
  const [feedback, setFeedBack] = useState([]);
  const [pacient, setPacient] = useState({});

  const getFeedBack = async () => {
    const data = await getFeedBack();
    setDoctors(data);
    setFilterDoctors(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getFeedBack();
  }, []);

  return (
    <FeedbackContext.Provider
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
