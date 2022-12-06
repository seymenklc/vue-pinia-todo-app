<template>
    <div class="flex justify-between p-2 shadow-sm bg-slate-100">
        <div class="flex gap-3 items-center">
            <div v-if="todo.completed" class="w-1 h-full bg-green-300" />
            <div v-if="!todo.completed" class="w-1 h-full bg-red-400" />
            <p>{{ todo.title }}</p>
        </div>
       <div class="flex gap-2 items-center">
        <button 
            @click="handleComplete"
            class="text-white hover:bg-green-400 rounded-full bg-green-200
            p-2 text-sm"
        />
        <button 
            @click="handleDelete"
            class="text-white hover:bg-red-400 rounded-full bg-rose-200
            hover:e p-2 text-sm"
        />
       </div>
    </div>
</template>

<script>
import { useTodoStore } from '../stores/todo';

    export default {
        props: ['todo'],
        setup(props) {
            const todoStore = useTodoStore()

            const handleComplete = () => {
                todoStore.toggleTodo(props.todo.id)
            }

            const handleDelete = () => {
                todoStore.deleteTodo(props.todo.id)
            }

            return { handleDelete, handleComplete }
        }
    }
</script>
