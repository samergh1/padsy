import { async } from "@firebase/util";
import React, { useEffect, useState, useContext } from "react";
import { getFeedBacks, getUserById } from "../firebase/users";
import { FilterContext } from "./FilterContext";

export const FeedbackContext = React.createContext();

export function FeedBackContextProvider({ children }) {
  const { selectedDoctor, loading } = useContext(FilterContext);
  const [feedbacks, setFeedBacks] = useState([]);
  const [feedbackLoading, setIsLoading] = useState(true);

  const getFeedBack = async () => {
    const feedbacks = await getFeedBacks(selectedDoctor.feedbacks);
    setFeedBacks(feedbacks);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!loading) getFeedBack();
  }, [selectedDoctor],);

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        loading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
