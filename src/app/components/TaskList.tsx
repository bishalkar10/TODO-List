import styles from "../styles/page.module.scss";
import Task from "./Task";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function TaskList() {
  //get the root state from redux store 
  const tasksState = useSelector((state: RootState) => state.taskList.tasks);
  //taskList array to render all the 'Task' component
  const taskList = Array.from(tasksState.values()).map((item) => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
    />
  ));

  return <div className={styles.taskList}>{taskList}</div>;
}
