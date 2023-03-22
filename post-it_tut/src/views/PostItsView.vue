<script setup>

import { ref } from 'vue';
import Postits from '../components/PostIts.vue'
import Delete from '../components/PostDelete.vue'
import Edit from '../components/PostEdit.vue'

defineProps({
  titlepost: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  }
})

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
  <main>
  
  
    <div class="fixed" v-for="(note, index) in notes" :key="index">
      <div v-if="note._id ==  $route.params.id " >
        
        
        <Postits :title="note.title" :content="note.content"/>
        <div class=" spacing">

        </div>
        <Edit :titlepost="note.title" :contentpost="note.content"/>
        <Delete />  
      </div>
      </div>
      
      
  </main>
</template>


<style>

button{
  background-color: white;
}
.spacing{
  height: 40px;
}


</style>