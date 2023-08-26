import React from 'react'
import Image from 'next/image'
import styles from '../styles/page.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h5 className={styles.h1}>Todo List</h5>
      <div className={styles.userIconDiv}>
        <FontAwesomeIcon className={styles.userIcon} icon={faUser} />
      </div>
      <Image className={styles.image} src="" alt="" />
    </header>
  )
}
