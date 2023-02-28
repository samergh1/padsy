import React, { useState } from 'react'
import styles from "./LoginPage.module.css";
import googleLogo from "../../assets/google.png"
import facebookLogo from "../../assets/facebook.png"
import { RegisterPageUrl, LandingPageUrl } from "../../constants/urls"
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle, logInWithEmailAndPassword } from "./../../firebase/authentication/authentication";

export function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const onSuccess = () => {
    navigate(LandingPageUrl);
  };

  const onLogInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    const { email, password } = formData;
    await logInWithEmailAndPassword({ email: email, password: password, onSuccess: onSuccess });
  };

  const onChange = (event) => {
    const {name, value} = event.target;
    setFormData((oldData) => ({...oldData, [name]:value}));
  };

  return (
    <div className={styles.container}>

      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Log in to padsy</h1>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Email</p>
          <input onChange={onChange} required type="email" name="email" placeholder="Your email here"className={styles.input}/>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Password</p>
          <input onChange={onChange} required type="password" name="password" placeholder="Your password here" className={styles.input} />
          <p className={styles.text}>Forgot your password? <a href="#">Click here</a></p>
        </div>
        <div className={styles.signInOptions}>
          <button onClick={() => signInWithGoogle({onSuccess:onSuccess})} className={styles.google}><img className={styles.logo} src={googleLogo} alt="Google"/> Log in with Google</button>
          <button className={styles.facebook}><img className={styles.logo} src={facebookLogo} alt="Facebook"/> Log in with Facebook</button>
        </div>
        <div>
          <button onClick={onLogInWithEmailAndPassword} className={styles.continue}>Continue</button>
        </div>
        <div className={styles.registerOptn}>
          <p className={styles.text}>Don't have an account? <Link to={RegisterPageUrl}><span>Register here</span></Link></p>
        </div>
      </div>

      <div className={styles.rightContainer}>
        
      </div>

    </div>
  )
}
