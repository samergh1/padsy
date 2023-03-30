import { useCallback, useContext, useState } from "react";
import { isEqual } from "date-fns";
import { FilterContext } from "../context/FilterContext";

export function useSchedule() {
  const { selectedDoctor } = useContext(FilterContext);
  const [hours, setHours] = useState([]);

  const createSchedule = useCallback(async (date) => {
    let aux = [];
    for (let i = (parseInt(selectedDoctor.startSchedule) ?? 4); i < (parseInt(selectedDoctor.endSchedule) ?? 15); i++) {
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        i,
        0,
        0
      );
      const title = `${i}:00${i < 12 ? "am" : "pm"} - ${i + 1}:00${i + 1 < 12 ? "am" : "pm"
        }`;
      let busy = false;
      (selectedDoctor.busySchedule ?? []).map((timestamp) => {
        if (isEqual(newDate, timestamp.toDate())) {
          busy = true;
        }
      });
      const hour = {
        title: title,
        startHour: i,
        endHour: i + 1,
        busy: busy,
      };
      aux.push(hour);
    }
    setHours(aux);
  }, []);
  return {
    hours,
    createSchedule,
    setHours,
  };
}
