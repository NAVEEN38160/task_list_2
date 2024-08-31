<script setup lang="ts">
import type { Task } from '~/types/type1';

defineProps<{
    tasks : Task[]
}>()


const emit = defineEmits<{
    (event : "deleteTask" , value : Task) : void
}>()

const handleDelete = (task : Task ) : void => {
    emit("deleteTask" , task)
}

</script>


<template>
    <ul class="list-none">
        <li v-for="task in tasks" :key="task.id" :class="['p-4 m-2 rounded-2xl flex',{
            'bg-gray-600': task.status === `To Do`,
            'bg-orange-400':task.status === `In Progress`,
            'bg-green-600': task.status === `Complete`,
        }]">
            <span class="text-white font-mono grow">{{ task.name }}</span>
            <select v-model="task.status" class="font-mono rounded-lg mr-2">
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
            </select>
            <div class="p-1 hover:scale-125" @click="handleDelete(task)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                </svg>
            </div>
        </li>
    </ul>
</template>