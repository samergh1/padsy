import React from 'react';
import styles from "./HomePage.module.css";
import { useUserContext } from '../../context/userContext';

export function HomePage() {
  const {user} = useUserContext();
  console.log(user);
  return (
    <h1 className={styles.title}>{user.email}</h1>
  )
}
