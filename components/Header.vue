<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    count : number
}>()

const emit = defineEmits<{
    (event : 'newTask', value : string) : void
}>()

const input = ref<string>("")

const handleInput = () => {
    if(input.value.length > 40){
        input.value = ""
        alert("Character Limit is 40 :/")
    }else{
        emit("newTask",input.value)
        input.value = ""
    }
}

</script>



<template>
    <div class="font-mono my-4 text-2xl text-white bg-gradient-to-r from-purple-500 to-cyan-600 p-6 rounded-3xl w-full max-w-3xl flex">
        <span class="grow">task manager [{{ count }}]</span>
        <input v-model="input" @keydown.enter="handleInput" placeholder="add a task..." class="text-black rounded-xl text-lg pl-3">
    </div>
</template>