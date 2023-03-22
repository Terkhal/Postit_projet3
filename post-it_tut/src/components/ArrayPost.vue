
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
//import array from './components/ArrayPost.vue'


const url = "http://mattmcm.fr:7754/notes";
let notes = ref([])
 fetch(url)
 .then((response) => response.json()) 
  .then((data) => { 
    
    notes.value = data.notes
    console.log(notes);  
  }
  )

</script>

<template>
    
    <div v-for="(note, index) in notes" :key="index">
    
    <RouterLink :to="'/postit/id='+note._id" >
  <div class="postit">
    
    <div><h2>{{ note.title }}</h2></div>
    
    <div  v-for="(content, index) in note.content" :key="index" ><h3 class="limit">{{ content }}</h3> </div>
  </div>
  </RouterLink>
  </div>

</template>
<style>

.limit{
width: 100px;
height: 22px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;

}
.postit{
  
   background-color: #FA9F42;
   width: 200px;
   height: 100px;
   margin: 10px;
   padding: 5px;
   color: black;
   text-overflow: ellipsis;
 
   overflow: hidden;
}

</style>

