<script setup>

import { ref, reactive, computed } from 'vue';

import Task from '../components/Task.vue';
import Filter from '../components/Filter.vue';
import ModalWindow from '../components/ModalWindow.vue';

const appName = ref('Task mannager')

let filterBy = ref('')

let modalIsActivated = ref(false);

const filteredTasks = computed( () => {
  if( filterBy.value === 'todo' ) {
    return tasks.filter( task => !task.completed );
  } else if( filterBy.value === 'done' ) {
    return tasks.filter( task => task.completed );
  } else {
    return tasks;
  }
})

const tasks= reactive([
    {
      name: "Website design",
      description: "Define the style guide, branding and create the webdesign on Figma.",
      completed: true,
      id: 1
    },
    {
      name: "Website development",
      description: "Develop the portfolio website using Vue JS.",
      completed: false,
      id: 2
    },
    {
      name: "Hosting and infrastructure",
      description: "Define hosting, domain and infrastructure for the portfolio website.",
      completed: false,
      id: 3
    },
    {
      name: "Composition API",
      description: "Learn how to use the composition API and how it compares to the options API.",
      completed: true,
      id: 4
    },
    {
      name: "Pinia",
      description: "Learn how to setup a store using Pinia.",
      completed: true,
      id: 5
    },
    {
      name: "Groceries",
      description: "Buy rice, apples and potatos.",
      completed: false,
      id: 6
    },
    {
      name: "Bank account",
      description: "Open a bank account for my freelance business.",
      completed: false,
      id: 7
    }
]);

let newTask = {completed: false}

function addTask() {
  if( !newTask.name || !newTask.description) {
    alert('Please fill in all fields');
    return false;
  }
  newTask.id = tasks.length;
  tasks.push(newTask);
  newTask = {completed: false}
}

function toggleCompleted(id) {
  const task = tasks.map( task => {
    if( task.id == id ) {
      task.completed = !task.completed;
    }
  })
}

function setFilter(filter) {
  filterBy.value = filter;
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
    </div>
    
    <Filter @setFilter="setFilter" :filterBy="filterBy" />

    <div class="tasks">
      <Task @toggleCompleted="toggleCompleted" v-for="task in filteredTasks" :key="task.id" :task="task" />
    </div>

    <ModalWindow v-if="modalIsActivated" :newTask="newTask" />

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



.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}


</style>