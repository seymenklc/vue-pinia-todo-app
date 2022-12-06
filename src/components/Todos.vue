<template>
    <div 
        v-if="todoStore.todos.length" 
        class="flex flex-col gap-4 p-4"
    >
        <div v-for="todo in todoStore.todos" :key="todo.id" >
            <Todo :todo="todo" />
        </div>
    </div>
    <p v-else class="text-center p-1">Nothing to show here :(</p>
</template>

<script>
    import Todo from './Todo.vue';
    import { useTodoStore } from '../stores/todo'

    export default {
        components: { Todo },
        setup() {
            const todoStore = useTodoStore()

            return { todoStore };
        },
}
</script>
