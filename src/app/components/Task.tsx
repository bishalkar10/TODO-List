"use client"
import { useState } from "react";
import styles from "../styles/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/reducers/tasks";
import { toggleModal } from "../store/reducers/modal";
import { updateFormData } from "../store/reducers/formData";

interface TaskProps {
  id: string,
  title: string,
  description: string,
  checked: boolean,
}

export default function Task(props: TaskProps) {
  const { id, title, description, checked } = props;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(updateTask({ id, title, description, checked: !checked }));
  }

  return (
    <div
      data-tasks-id={id}
      className={styles.taskContainer}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    > <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className={styles.task}>
        <p className={styles.taskTitle}>{title}</p>
        <p className={styles.taskDesc}>{description}</p>
      </div>
      <Buttons show={show} {...props} />
    </div>
  );
}

export function Buttons({ show, id, title, description, checked }: TaskProps & { show: boolean }) {
  const dispatch = useDispatch();

  function deleteTaskHandler() {
    dispatch(deleteTask({ id }));
  }

  function editTask() {
    dispatch(updateFormData({ id, title, description, checked }))
    dispatch(toggleModal({ mode: "update" }))
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