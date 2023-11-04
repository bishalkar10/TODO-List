import React from "react";
import Image from "next/image";
import styles from "../styles/page.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { togglePopup, closePopup } from "../store/reducers/popup";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const signInStatus = useSelector((state: RootState) => state.user.signedIn);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);

  function handleClick() {
    dispatch(togglePopup());
  }

  return (
    <header className={styles.header}>
      <h5 className={styles.h1}>Todo List</h5>
      <Image
        onClick={handleClick}
        className={styles.image}
        src={signInStatus ? user.photo : "/user.png"} // if signed in then render the user photo from Gmail else render the default user.png
        width={56}
        height={56}
        alt="user"
      />
    </header>
  );
}
