import React from 'react'
import styles from "./LoginPage.module.css";
import googleLogo from "../../assets/google.png"

export function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Log in to padsy</h1>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Email</p>
          <input type="email" name="email" placeholder="Your email here" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Password</p>
          <input type="password" name="password" placeholder="Your password here" className={styles.input} />
          <p className={styles.text}>Forgot your password? <a href="#">Click here</a></p>
        </div>
        <div className={styles.signInOptions}>
          <button className={styles.google}>Log in with Google</button>
          <button className={styles.facebook}>Log in with Facebook</button>
        </div>
        <div>
          <button className={styles.continue}>Continue</button>
        </div>
        <div className={styles.registerOptn}>
          <p className={styles.text}>Don't have an account? <a href='#'>Register here</a></p>
        </div>

      </div>
      <div className={styles.rightContainer}>
        
      </div>

    </div>
  )
}
