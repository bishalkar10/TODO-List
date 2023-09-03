import styles from "../styles/page.module.scss";
import Task from "./Task";
import {TasksState} from "../store/store";
import {useSelector} from "react-redux";

export default function TaskList() { 
  //get the task state from redux store 
  const tasksState = useSelector((state: TasksState) => state.tasks.values);
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
