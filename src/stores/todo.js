import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            { id: 1, title: 'buy some milk', completed: false },
            { id: 2, title: 'prepare dinner', completed: true },
            { id: 3, title: 'go to the gym', completed: true },
        ]
    }),
    actions: {
        addTodo(todo) {
            this.todos.push({
                id: Math.floor(Math.random() * 10000),
                title: todo,
                completed: false
            });
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(t => t.id != id);
        },
        toggleTodo(id) {
            const todo = this.todos.find(t => t.id === id);
            todo.completed = !todo.completed;
        }
    }

});