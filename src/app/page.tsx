"use client"
import { Provider } from "react-redux";
import store from './store/store';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import Login from "./components/Login";

export default function Home() {
  return (
    <Provider store={store}>
      <Navbar />
      <Login />
      <TaskList />
      <Add />
      <Modal />

    </Provider>
  )
}
