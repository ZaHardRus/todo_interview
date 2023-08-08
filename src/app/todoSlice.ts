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
    todos: []
};

export const counterSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<TodoItem["text"]>) => {
            const newTodo = {
                id: state.todos.length,
                text: "new task",
                checked: false
            };
            state.todos = [newTodo, ...state.todos];
        },
        deleteTodo: (state, action: PayloadAction<TodoItem["id"]>) => {
            // Fix me please =\
        },
        toggleCheckTodo: (state, action: PayloadAction<TodoItem["id"]>) => {
            // Fix me please =\
        }
    }
});

export const {createTodo, deleteTodo, toggleCheckTodo} = counterSlice.actions;

export default counterSlice;
