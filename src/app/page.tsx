import Image from 'next/image';
import styles from './styles/page.module.scss';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TaskList />
      <Add />
    </div>
  )
}
