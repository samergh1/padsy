import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { LandingPageUrl, PatientProfileUrl } from "../constants/urls";
import { SearchContext } from "../context/SearchContext";
import { useUserContext } from "../context/userContext";
import { db } from "../firebase/config";

export function FeedbackPage() {
  const { user, isLoadingUser } = useUserContext();
  const { selectedDoctor } = useContext(SearchContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState(serverTimestamp());

  async function createFeedback(data) {
    try {
      const reference = await addDoc(collection(db, "feedbacks"), data);
      await updateDoc(doc(db, "feedbacks", reference.id), { id: reference.id });
      return reference;
    } catch (error) {
      console.error("Error creating feedback ", error);
    }
  }

  async function updateUser(userId, a) {
    try {
      await updateDoc(doc(db, "users", userId), a);
    } catch (error) {
      console.error("Error updating user ", error);
    }
  }

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function handleFeedback() {
    const data = {
      doctorId: selectedDoctor.id,
      patientId: user.id,
      date: date,
      message: message,
      title: title,
      rating: rating,
    };
    const reference = await createFeedback(data);
    const a = {
      feedbacks: arrayUnion(reference.id),
    };
    await updateUser(data.doctorId, a);
    toast.success("Succesfully registered feedback :)");
    await timeout(4000);
    navigate(LandingPageUrl);
  }

  return (
    <>
      <Toaster />
      <div className="bg-white py-24 px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Doctor's Feedback
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Help improve our services
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="Feedback's Title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Feedback's Title
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Write a title..."
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Write a review about the experience with your doctor..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              className="rounded-md bg-[#00786A] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2fa093] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleFeedback()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
