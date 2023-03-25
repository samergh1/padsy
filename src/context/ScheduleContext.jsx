import React from "react";

export const ScheduleContext = React.createContext();

export function ScheduleContextProvider({ children }) {
  return (
    <ScheduleContext.Provider value={{}}>{children}</ScheduleContext.Provider>
  );
}
