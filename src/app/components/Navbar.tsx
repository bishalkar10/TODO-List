import React from 'react'
import Image from 'next/image'
import styles from '../styles/page.module.scss';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h5 className={styles.h1}>Todo List</h5>
      <Image 
      className={styles.image} 
      src='/user.png'
      width={56} 
      height={56} 
      alt="user" />
    </header>
  )
}
