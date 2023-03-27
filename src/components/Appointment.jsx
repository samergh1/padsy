import React, { useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
// import { updateUser } from "../firebase/users";
import { async } from "@firebase/util";

export function Appointment({
  showModal,
  setShowModal,
  date,
  hour,
  user,
  selectedDoctor,
  selectedTime,
  today,
}) {
  async function createAppointment(data) {
    try {
      return await addDoc(collection(db, "appointments"), data);
    } catch (error) {
      console.error("Error creating appointment ", error);
    }
  }
  async function createChat(data) {
    try {
      await addDoc(collection(db, "chats"), data);
    } catch (error) {
      console.error("Error creating chat ", error);
    }
  }

  async function updateUser(userId, data) {
    try {
      await updateDoc(doc(db, "users", userId), data);
    } catch (error) {
      console.error("Error creating chat ", error);
    }
  }

  async function handleAppointment() {
    const data = {
      doctorId: selectedDoctor.id,
      patientId: user.id,
      date: selectedTime,
    };
    const chat = {
      doctorId: selectedDoctor.id,
      patientId: user.id,
      //   createdAt: Timestamp.fromDate(Date.now()),
      createdAt: serverTimestamp(),
    };
    console.log(today);
    const reference = await createAppointment(data);
    console.log(reference.id);
    await createChat(chat);

    const patData = {
      appointments: arrayUnion(reference.id),
    };
    const docData = {
      appointments: arrayUnion(reference.id),
      busySchedule: arrayUnion(selectedTime),
    };
    await updateUser(selectedDoctor.id, docData);
    await updateUser(user.id, patData);
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Your Appointment</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {date}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {hour}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {user.name}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {selectedDoctor.name}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleAppointment();
                      setShowModal(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
