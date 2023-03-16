import { useCallback, useState } from "react";
import { isEqual } from "date-fns";

export function useSchedule() {
  const [hours, setHours] = useState([]);

  const startSchedule = 5;
  const endSchedule = 15;

  const busySchedule = [
    new Date(2023, 2, 16, 11, 0, 0),
    new Date(2023, 2, 18, 14, 0, 0),
  ];

  const createSchedule = useCallback(async (date) => {
    let aux = [];

    for (let i = startSchedule; i < endSchedule; i++) {
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        i,
        0,
        0
      );

      const title = `${i}:00${i < 12 ? "am" : "pm"} - ${i + 1}:00${
        i + 1 < 12 ? "am" : "pm"
      }`;

      let busy = false;
      busySchedule.map((b) => {
        if (isEqual(newDate, b)) {
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
    busySchedule,
  };
}
