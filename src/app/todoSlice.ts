import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TodoItem = {
    id: number;
    text: string;
    checked: boolean;
};

const todosTemplate: Array<TodoItem> = [
    {
        id: 1,
        text: "Инициализировать стейт данными <todosTemplate>(в слайсе)",
        checked: true
    },
    {
        id: 2,
        text: "сделать отображение задач в колонку",
        checked: false
    },
    {
        id: 3,
        text: "починить инпут (ввод текста новой задачи)",
        checked: false
    },
    {
        id: 4,
        text: "починить добавление задачи",
        checked: false
    },
    {
        id: 5,
        text: "починить удаление задачи",
        checked: false
    },
    {
        id: 6,
        text: "починить checked-status задачи",
        checked: false
    },
    {
        id: 7,
        text: "написать поиск на onChange инпута (создать новый)",
        checked: false
    },
    {
        id: 8,
        text: "написать debounce функцию для поиска (1500ms)",
        checked: false
    },
    {
        id: 9,
        text: 'исправить счетчик заданий, использовав функцию склонения',
        checked: false
    }
];

export interface TodoState {
    todos: Array<TodoItem>;
}

const initialState: TodoState = {
    todos: todosTemplate
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state: TodoState, action: PayloadAction<TodoItem["text"]>) => {
            const newTodo = {
                id: state.todos.length,
                text: action.payload,
                checked: false
            };
            state.todos = [...state.todos, newTodo];
        },
        deleteTodo: (state, action: PayloadAction<TodoItem["id"]>) => {
            console.log(action)
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        toggleCheckTodo: (state, action: PayloadAction<TodoItem["id"]>) => {
            state.todos = state.todos.map(el => {
                if (el.id === action.payload) {
                    return {...el, checked: !el.checked}
                }
                return el
            })
        },
        searchTasks: (state, action: PayloadAction<string>) => {
            action.payload
                ? state.todos = state.todos.filter(el => el.text.includes(action.payload))
                : state.todos = todosTemplate
        }
    }
});

export const {createTodo, deleteTodo, toggleCheckTodo, searchTasks} = todoSlice.actions;

export default todoSlice;
