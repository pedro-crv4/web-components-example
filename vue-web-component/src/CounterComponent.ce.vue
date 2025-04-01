<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <p>Contador: {{ counter }}</p>
        <button @click="increment">Incrementar</button>
        <slot></slot>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    props: {
        title: String,
        count: {
            type: Number,
            default: 0,
        },
    },
    emits: ["update-count"],
    setup(props, { emit }) {
        const counter = ref(props.count);
        
        const increment = () => {
            counter.value++;
            emit("update-count", counter.value);
        };
        
        return { counter, increment };
    },
};
</script>

<style>
.container {
    border: 2px solid #333;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    font-family: Arial, sans-serif;
}
button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 10px;
}
button:hover {
    background: #0056b3;
}
</style>
