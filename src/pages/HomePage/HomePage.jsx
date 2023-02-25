import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
    <Navbar/>
    <h1 className={styles.title}>HomePage</h1>
    </>
  )
}
