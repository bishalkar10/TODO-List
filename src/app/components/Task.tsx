"use client"
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../store/toggleShow'
import styles from "../styles/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
  id: string,
  title: string,
  description: string,
}

export default function Task({ id, title, description }: TaskProps) {
  const show = useSelector((state: any) => state.showButtons[id])
  const dispatch = useDispatch();
  return (
    <div
      id={id}
      className={styles.taskContainer}
      onMouseEnter={() => dispatch(toggle({ taskId: id }))}
      onMouseLeave={() => dispatch(toggle({ taskId: id }))}
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

  function deleteTask(event: any) {
    // get the id of the container and delete it.
    const targetElement = event.currentTarget.parentElement?.parentElement?.id;
    console.log("clicked delete");
  }

  function editTask(event: any) {
    const targetElement = event.currentTarget.parentElement?.parentElement?.className;
    console.log(targetElement);
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
        onClick={deleteTask}
      >
        <FontAwesomeIcon className={styles.icon} icon={faTrashCan} />
      </button>
    </div>
  );
}


{/* <div className={styles.taskList}>
  <div className={styles.taskContainer}>
    <div className={styles.task}>
      <p className={styles.taskTitle}>{title}</p>
      <p className={styles.taskDesc}>{description}</p>
    </div>
    <div className={styles.iconsContainer}>
      <button className={styles.iconDiv}>
        <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} />
      </button>
      <button className={styles.iconDiv}>
        <FontAwesomeIcon className={styles.icon} icon={faTrashCan} />
      </button>
    </div>
  </div>
</div>; */}




//