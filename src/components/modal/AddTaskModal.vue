<script setup>
import {useTasksStore} from "@/stories/tasksStore.js";
const store = useTasksStore()
const props = defineProps(["newTask"]);
</script>

<template lang="">
    <div class="add-task">
        <h3>Add a new task</h3>
        <label for="title">Title *</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a title..."
        /><br />
        <br />
        <label for="description">Description *</label>
        <textarea
          name="description"
          rows="4"
          id="description"
          placeholder="Enter a description..."
        /><br />
        <button @click="addTask" class="btn gray">Add Task</button>
      </div>
</template>

<style lang="scss">
.modal-wrapper {
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 20px;
  }
}
    .add-task {
  input,
  textarea {
    width: 100%;
    max-width: 100%;
    padding: 5px 10px;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
  }

  button {
    // width: 360px;
    margin-top: 12px;
  }
}
</style>