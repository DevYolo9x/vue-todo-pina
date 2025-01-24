<script setup>
import { ref, reactive, computed } from "vue";

import Task from "./components/Task.vue";
import Filter from "./components/Filter.vue";
import ModalWindow from "./components/modal/ModalWindow.vue";
import AddTaskModal from "./components/modal/AddTaskModal.vue";
import {useTasksStore} from "./stories/tasksStore.js";

const appName = ref("Task mannager");

let modalIsActivated = ref(false);

const store = useTasksStore()



let newTask = { completed: false };

function addTask() {
  if (!newTask.name || !newTask.description) {
    alert("Please fill in all fields");
    return false;
  }
  newTask.id = store.tasks.length;
  store.tasks.push(newTask);
  newTask = { completed: false };
}

function toggleCompleted(id) {
  const task = store.tasks.map((task) => {
    if (task.id == id) {
      task.completed = !task.completed;
    }
  });
}


</script>

<template>
  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          {{ appName }}
        </h1>
      </div>
      <div class="header-side">
        <button @click="modalIsActivated = true" class="btn secondary">
          + Add Task
        </button>
      </div>
    </div>

    <Filter />

    <div class="tasks">
      <Task
        @toggleCompleted="toggleCompleted"
        v-for="task in store.filteredTasks"
        :key="task.id"
        :task="task"
      />
    </div>

    <ModalWindow
      @closePopup="modalIsActivated = false"
      v-if="modalIsActivated"
    >
      <AddTaskModal />
    </ModalWindow>
  </main>
</template>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }
}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>