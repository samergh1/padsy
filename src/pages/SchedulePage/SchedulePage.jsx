import React, { useContext, useEffect } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { UilAngleLeft, UilAngleRight } from "@iconscout/react-unicons";
import { useSchedule } from "../../hooks/useSchedule";
import { Navbar } from "../../components/Navbar";
import { Appointment } from "../../components/Appointment";
import { useUserContext } from "../../context/userContext";
import { SearchContext } from "../../context/SearchContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function SchedulePage() {
  const { hours, createSchedule } = useSchedule();
  const { user, isLoadingUser } = useUserContext();
  const { selectedDoctor } = useContext(SearchContext);
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [selectedTime, setSelectedTime] = useState(
    new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      selectedDay.getDate(),
      0,
      0,
      0
    )
  );
  useEffect(() => {
    createSchedule(selectedDay);
  }, [createSchedule]);
  let [showModal, setShowModal] = useState(false);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  // console.log(selectedTime);
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  /* let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  ) */
  return (
    <div className="flex">
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" pt-16 max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <UilAngleLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <UilAngleRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  title={day.toString()}
                  key={dayIdx}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      createSchedule(day);
                    }}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14 flex flex-col justify-start items-center">
            <h2 className="font-semibold text-gray-900">
              Schedule for {""}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <div className="flex flex-col justify-center items-center my-3">
              {hours.map((hour, idxHour) => (
                <div key={idxHour}>
                  <button
                    onClick={() => {
                      console.log(hour.startHour);
                      const newTime = new Date(
                        selectedDay.getFullYear(),
                        selectedDay.getMonth(),
                        selectedDay.getDate(),
                        hour.startHour,
                        0,
                        0
                      );
                      setSelectedTime(newTime);
                      setShowModal(true);
                    }}
                    className={
                      hour.busy === true
                        ? "cursor-not-allowed bg-gray-200 text-gray-400 rounded my-0.5 w-48 font-semibold py-2 px-4 borderrounded shadow"
                        : "cursor-pointer bg-white hover:bg-gray-100 my-0.5 w-48 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    }
                  >
                    {hour.title}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Appointment
        showModal={showModal}
        setShowModal={setShowModal}
        date={selectedTime.toDateString()}
        hour={selectedTime.toTimeString().split(" ")[0]}
        user={user}
        selectedDoctor={selectedDoctor}
        selectedTime={selectedTime}
      ></Appointment>
      ;
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
