import React from 'react'
import styles from "../styles/page.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../store/reducers/modal';
import { RootState } from '../store/store';

export default function Add() {
  const show = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  function openModal() {
    // if show is true then return . It is meant to disable the button when modal is open
    if (show) return;
    dispatch(toggleModal({ mode: 'add' }))
  }
  // we are not usign 'button' tag as usign it will cause the '+' icon shift to the bottom and not centered. Increased font-size causes this issue
  return (
    <div
      className={styles.addBtn}
      onClick={openModal}
    >+</div>
  )
}
