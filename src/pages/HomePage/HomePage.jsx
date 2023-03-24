<<<<<<< HEAD
import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
=======
import React from "react";
>>>>>>> develop
import styles from "./HomePage.module.css";
import { useUserContext } from "../../context/userContext";

export function HomePage() {
<<<<<<< HEAD
  return (
    <>
    <Navbar/>
    <h1 className={styles.title}></h1>
    </>
  )
=======
  const { user } = useUserContext();
  // console.log(user);
  return <h1 className={styles.title}>{user.email}</h1>;
>>>>>>> develop
}
