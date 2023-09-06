import styles from '../styles/page.module.scss';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { toggleModal } from '../store/reducers/modal';
import { updateFormData, clearFormData } from '../store/reducers/formData';
import { addTask, updateTask } from "../store/reducers/tasks";

import { v4 as uuidv4 } from 'uuid';

export default function Modal() {
  const formData = useSelector((state: RootState) => state.formData);
  const currentMode = useSelector((state: RootState) => state.modal.mode);
  const show = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(clearFormData());
    dispatch(toggleModal({ mode: currentMode }))
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    dispatch(updateFormData({ [name]: value }));
  }

  function handleSubmit() {
    // generate unique task id
    const taskId = uuidv4();
    const newTask = {
      ...formData,
      // title: formData.title.trim(),
      // description: formData.description.trim(),
      id: taskId,
      checked: false,
    }
    dispatch(addTask({ task: newTask }));
    dispatch(toggleModal({ mode: currentMode }));
    dispatch(clearFormData());
  }

  function handleUpdate() {
    // Remove trailing white spaces from formData
    const updatedFormData = {
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    };

    dispatch(updateTask(updatedFormData));
    dispatch(toggleModal({ mode: currentMode }));
    dispatch(clearFormData());
  }

  return (
    <>
      {show && (<div className={styles.modal} >
        <div className={styles.inputContainer}>
          <input type='text' className={styles.titleInput}
            placeholder='Enter Task Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <textarea className={styles.textInput}
            placeholder='Enter Text'
            name="description"
            value={formData.description}
            onChange={handleChange}
          >

          </textarea>
        </div>

        <div className={styles.buttonsContainer}>
          {currentMode === 'add' ?
            <button
              className={styles.saveBtn}
              onClick={handleSubmit}
            > Save
            </button>
            :
            <button
              className={styles.updateBtn}
              onClick={handleUpdate}
            > Update
            </button>
          }
          <button
            className={styles.cancelBtn}
            onClick={handleCancel}

          >Cancel</button>

        </div>
      </div>)}
    </>
  )
}
