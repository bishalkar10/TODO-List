import styles from "../styles/page.module.scss";
import Task from "./Task";

interface DataItem {
  id: string;
  title: string;
  description: string;
}

const dataObject: Map<string, DataItem> = new Map([
  [
    "ab1",
    {
      id: "ab1",
      title: "Task Title 1",
      description: "Lorem ipsum dolor...",
    },
  ],
  [
    "ab2",
    {
      id: "ab2",
      title: "Task Title 2",
      description: "Lorem ipsum dolor...",
    },
  ],
  [
    "x@1",
    {
      id: "x@1",
      title: "Task Title 3",
      description: "Lorem ipsum dolor...",
    },
  ],
  [
    "xy2",
    {
      id: "xy2",
      title: "Task Title 4",
      description: "Lorem ipsum dolor...",
    },
  ],
  [
    "a2y",
    {
      id: "a2y",
      title: "Task Title 5",
      description: "Lorem ipsum dolor...",
    },
  ],
]);

export default function TaskList() {
  const taskList = Array.from(dataObject.values()).map((item) => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
    />
  ));

  return <div className={styles.taskList}>{taskList}</div>;
}
