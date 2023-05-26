import React, { useState } from "react";
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from "./Button";
function TodoModal({modalOpen, setModalOpen}){
    const [title, setTitle ] = useState('');
    const [status, setStatus ] = useState('incomplete');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({title,status})
    }
  return(
   modalOpen && (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div 
                className={styles.closeButton}
                onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
            >
               <MdOutlineClose /> 
            </div>
            <form 
                className={styles.form} 
                onSubmit={(e) => handleSubmit(e)}
                >
                <h1 className={styles.formTitle}>Add Task</h1>
                <label htmlFor="title">
                    Title
                    <input 
                        type="text" 
                        id="title" 
                        value={title}
                        onChange = {(e) => setTitle(e.target.value)}
                        name="title" />
                </label>
                <label htmlFor="status">
                    Status
                    <select 
                        name="status" 
                        id="status"
                        value={status}
                        onChange = {(e) => setStatus(e.target.value)}
                        >
                        <option value="incomplete">incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
                <div className={ styles.buttonContainer }>
                    <Button type="submit" variant="primary"
                    onClick = {() =>setModalOpen(true)}
                    >
                        Add Task
                    </Button>
                    <Button 
                    type="button" 
                    variant="secondary"
                    onClick={() =>setModalOpen(false)}
                    onKeyDown ={() => setModalOpen(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        
        </div>
    </div>
    )
  );
};

export default TodoModal;
