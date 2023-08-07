import * as React from "react"
import "./results.scss"
import {useAppSelector} from "../../app/hooks";

function pluralize(n: number, forms: Array<string>) {
    const correctForm = n % 10 === 1 && n % 100 !== 11
        ? forms[0]
        : (n % 10 >= 2 && n % 10 <= 4
        && (n % 100 < 10
            || n % 100 >= 20) ? forms[1] : forms[2])
    return `${n} ${correctForm}`
}

export const TodoResults = () => {
    const todo =  useAppSelector(state => state.todo)
    const todosLength = todo.todos.length
    const resultText = () => {
        // Исправить счетчик заданий, использовав функцию склонения
        return `${pluralize(todosLength,['Задача','Задачи','Задач'])}`
    }

    return (
        <div className="todo-results">
            {resultText()}
        </div>
    )
}
