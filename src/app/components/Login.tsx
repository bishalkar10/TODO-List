import React from 'react'
import styles from "../styles/page.module.scss";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { signInWithGoogle } from '../../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus, updateUser } from '../store/reducers/user';
import { RootState } from '../store/store';

export default function Login() {

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const signInStatus = useSelector((state: RootState) => state.user.signedIn)

  async function signIn() {
    try {
      const user = await signInWithGoogle();
      // You can access the user data here
      if (user) {
        dispatch(updateStatus(true))
      }
      dispatch(updateUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))

      // Access user.displayName, user.email, user.photoURL, etc.
    } catch (error) {
      // Handle the sign-in error here
      console.error("Error signing in:", error);
    }
  }

  return (
    <div
      className={styles.loginContainer}>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src={signInStatus ? user.photo : '/user.png'}
          width={56}
          height={56}
          alt="user" />
        {/* Render the userName only if signed IN */}
        {signInStatus && <figcaption className={styles.username}>{user.name}</figcaption>}
      </figure>
      {/* if signed IN then render the 'signout' div else render the 'sign In' div */}
      {signInStatus && <p className={styles.userEmail}>{user.email}</p>}

      {!signInStatus ?
        <button className={styles.signinButton}
          onClick={signIn}
        >
          Continue with
          <Image
            className={styles.icon}
            src='/google.svg'
            width={24}
            height={24}
            alt="google" />
        </button>
        :
        <button className={styles.signoutButton}>
          Sign out
          <FontAwesomeIcon icon={faArrowRight} />
        </button>}
    </div>
  )
}
