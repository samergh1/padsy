import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "./../../firebase/authentication/authentication";
import { HomePageUrl } from "../../constants/urls";

export function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Daniel",
    email: "daniel.sre02@gmail.com",
    password: "Monolito69",
  });

  const onSuccess = () => {
    navigate(HomePageUrl);
  };

  const onRegisterWithEmailAndPassword = async (event) => {
    event.preventDefault();

    const { name, email, password } = formData;
    await registerWithEmailAndPassword({ name: name, email: email, password: password, onSuccess: onSuccess });
  };

  return (
    <>
      <div>RegisterPage</div>
      <button onClick={onRegisterWithEmailAndPassword}>
        Register with email and password
      </button>
    </>

  )
}
