import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useTasksStore = defineStore('tasks', () =>{
    const tasks = reactive( JSON.parse(localStorage.getItem('tasks')) || []);

    let filterBy = ref("");

    let modalIsActivated = ref(false);

    function setFilter(filter) {
        filterBy.value = filter;
    }

    const filteredTasks = computed(() => {
      if (filterBy.value === "todo") {
        return tasks.filter((task) => !task.completed);
      } else if (filterBy.value === "done") {
        return tasks.filter((task) => task.completed);
      } else {
        return tasks;
      }
    });

    function addTask(newTask) {            
      if (!newTask.name || !newTask.description) {
        alert("Please fill in all fields");
        return false;
      }
      newTask.id = tasks.length > 0 ? tasks.length + 1 : 1;
      tasks.push(newTask);
      closeModal();
    }

    function openModal() {
      modalIsActivated.value = true;
    }

    function closeModal() {
      modalIsActivated.value = false;
    }

    function toggleCompleted(id) {
      const task = tasks.map((task) => {
        if (task.id == id) {
          task.completed = !task.completed;
        }
      });
    }

    return {
        tasks,
        filterBy,
        setFilter,
        addTask,
        modalIsActivated,
        openModal,
        closeModal,
        filteredTasks,
        toggleCompleted
    }
})