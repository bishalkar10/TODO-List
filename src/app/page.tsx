"use client";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";

export function App() {
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);

  return (
    <div>
      <Navbar />
      {isOpen ? <Login /> : null}
      <TaskList />
      <Add />
      <Modal />
    </div>
  );
}

// Wrap the entire component tree with the Provider
export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
