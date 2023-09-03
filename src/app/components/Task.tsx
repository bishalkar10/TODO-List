"use client"
import { useState } from "react";
import styles from "../styles/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTask, addTask, updateTask } from "../store/reducers/tasks";

interface TaskProps {
  id: string,
  title: string,
  description: string,
}

export default function Task({ id, title, description }: TaskProps) {
  const [show, setShow] = useState(false);
  return (
    <div
      data-tasks-id={id}
      className={styles.taskContainer}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className={styles.task}>
        <p className={styles.taskTitle}>{title}</p>
        <p className={styles.taskDesc}>{description}</p>
      </div>
      {/* We are not  */}
      <Buttons show={show} />
    </div>
  );
}

export function Buttons({ show }: { show: boolean }) {
  const dispatch = useDispatch()

  function deleteTaskHandler(event: any) {
    const targetElement = event.currentTarget.parentElement?.parentElement;
    console.log("clicked delete", targetElement);
    if (targetElement) {
      const ID = targetElement.getAttribute("data-tasks-id");
      dispatch(deleteTask({ id: ID }));
    }
  }

  function editTask(event: any) {
    const targetElement = event.currentTarget.parentElement?.parentElement
  }

  return (
    <div className={styles.iconsContainer}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <button className={styles.iconDiv}
        onClick={editTask}
      >
        <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} />
      </button>
      <button className={styles.iconDiv}
        onClick={deleteTaskHandler}
      >
        <FontAwesomeIcon className={styles.icon} icon={faTrashCan} />
      </button>
    </div>
  );
}