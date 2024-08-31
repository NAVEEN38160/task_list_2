<script setup lang="ts">
import { reactive , watch} from 'vue';
import type { Task } from '~/types/type1';


const loadTasks = () : Task[] => {
    if(typeof window !== 'undefined'){
        const tasksString = localStorage.getItem('tasks')
        return tasksString ? (JSON.parse(tasksString) as Task[]) : []
    }
    return []
}
const tasks = reactive<Task[]>(loadTasks())

let ID : number = 0

const count = computed<number>(() => {
    let pending = tasks.filter((task) => task.status !== 'Complete')
    return pending.length
})

const addTask = (task : string) : void => {
    tasks.unshift({id : ID++ , name : task , status : "To Do"})
}

const deleteTask = (task : Task) : void => {
    tasks.forEach((item : Task,index : number) => {
        if(task === item){
            tasks.splice(index , 1)
        }
    })
}

watch(tasks, () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
})

</script>

<template>
    <div class="mx-auto max-w-3xl">
        <Header :count @newTask="addTask" />
        <Tasks :tasks="tasks" @deleteTask="deleteTask" />
    </div>
</template>