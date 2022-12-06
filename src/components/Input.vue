<template>
    <form 
        class="flex flex-col items-center p-4 gap-3" 
        autocomplete="off"
        @submit.prevent="onSubmit"
     >
        <input 
            type="text" 
            placeholder="this is awesome!"
            class="p-4 w-full bg-slate-100 rounded-md text-gray-600"
            v-model="todo" 
         >
        <button class="px-4 py-2  rounded-md w-full bg-cyan-400 text-white">
            Add
        </button>
    </form>
</template>

<script>
    import { ref } from 'vue';
    import { useTodoStore } from '../stores/todo';

    export default {
        setup() {
            const todoStore = useTodoStore()
            const todo = ref('');

            const onSubmit = () => {
                if (todo.value.length) {
                    todoStore.addTodo(todo.value)
                    todo.value = ''
                }
            };

            return { todo, onSubmit };
        }
    };
</script>