<template lang="">
    <div class="modal-wrapper" aria-modal="true"
      role="dialog" tabindex="-1">
      <div class="inner">
           <div class="form">
                <ModalCloseButtonVue />
                <div class="add-task">
                    <h3>Add a new task</h3>
                    <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..."><br />
                    <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." /><br />
                    <button @click="addTask" class="btn gray">Add Task</button>
                </div>
           </div>
      </div>
  </div>
</template>
<script setup>
import ModalCloseButtonVue from "./ModalCloseButton.vue";
const props = defineProps(["newTask"]);
</script>
<style lang="scss" scoped>
    .modal-wrapper {
       position: fixed;
       left: 0;
       top: 0;
       z-index: 500;
       width: 100vw;
       height: 100vh;
       background: rgba(0, 0, 0, 0.2);
       display: grid;
       place-items: center;
       color: #000;
  
       .inner {
       background-color: white;
       padding: 30px;
       border-radius: 12px;
       display: flex;
       flex-direction: column;
       position: relative;
       max-width: 600px;
       width: 90%;
  
       h3 {
           font-size: 16px;
           font-weight: 700;
           line-height: 21px;
           margin-bottom: 20px;
       }
  
       .close-btn {
           position: absolute;
           top: 15px;
           right: 15px;
           cursor: pointer;
           background-color: #fff;
       }
  
       .form {
           display: flex;
           flex-direction: column;
           max-width: 100%;


           label {
           font-size: 12px;
           font-weight: 500;
           line-height: 16px;
           letter-spacing: 0em;
           text-align: left;
           }


           input,
           select,
           textarea {
           font-size: 12px;
           font-weight: 400;
           line-height: 16px;
           letter-spacing: 0em;
           text-align: left;
           border: 1px solid #C2C2C2;
           border-radius: 4px;
           padding: 8px 12px;
           margin-top: 5px;


           &::placeholder {
               color: #A6A6A6;
           }
           }
  
          
  
           .btn {
           width: fit-content;
           padding-inline: 23px;
           }
       }
       }
   }

</style>