import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logInWithEmailAndPassword } from "./../../firebase/authentication/authentication";
import { HomePageUrl } from "../../constants/urls";

export function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "daniel.sre02@gmail.com",
    password: "Monolito69",
  });

  const onSuccess = () => {
    navigate(HomePageUrl);
  };

  const onLogInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    const { email, password } = formData;
    await logInWithEmailAndPassword({ email: email, password: password, onSuccess: onSuccess });
  };

  const handleGoogleClick = async () => {
    await signInWithGoogle({ onSuccess: onSuccess });
  };

  return (
    <>
      <div>LoginPage</div>
      <button onClick={handleGoogleClick}>
        Login with Google
      </button>
      <button onClick={onLogInWithEmailAndPassword}>
        Log in with email and password
      </button>
    </>
  )
}
