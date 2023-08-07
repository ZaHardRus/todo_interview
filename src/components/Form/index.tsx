import React, {KeyboardEvent, useState} from "react";
import "./form.scss";
import {TodoActions} from "../../app/store";

export const TodoForm = () => {
    const [task, setTask] = useState<string>("");

    const handleAddTodo = () => {
        TodoActions.createTodo(task);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            handleAddTodo();
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e?.target?.value)
    }

    return (
        <div className="todo-form">
            <input placeholder="Новое задание" value={task} onKeyUp={handleKeyUp} onChange={onInputChange}/>
            <button type="button" onClick={handleAddTodo}>
                Добавить задание
            </button>
        </div>
    );
};
