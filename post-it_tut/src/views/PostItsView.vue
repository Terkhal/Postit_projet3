<script setup>

import { ref,watch, onMounted } from 'vue';
import Postits from '../components/PostIts.vue'
import Delete from '../components/PostDelete.vue'
import Edit from '../components/PostEdit.vue'
import { useRoute } from 'vue-router';

const route = useRoute();  



    





//  defineProps({
//   titlepost: {
//     type: String,
//     required: true
//   },
//   content: {
//     type: Array,
//     required: true
//   },

//   test: {
//     type: String,
//     required: true,
//     default: "prouty"
//   },

//   refresh:{
//     type:Boolean,
//   }
  
// })

let notes = ref(undefined)


onMounted(() => {
  const url = "http://mattmcm.fr:7754/notes/";
 fetch(url)
 .then((response) => response.json())
  .then((data) => { 
    
    notes.value = data.notes
    console.log(notes);  
  }
  )
})


watch(() => route.params.id, () => {
  console.log(notes.value)
  
  notes.value = JSON.parse(localStorage.getItem("postItsTmp"))

})
// function refresh(){
//   fetch(url)
//  .then((response) => response.json())
//   .then((data) => { 
    
//     notes.value = data.notes
//   }
//   )


// }


//  watch(trig,(newVal,oldVal)=>{
//    console.log("newurl",newVal,"oldurl: ",oldVal)
//  })
</script>

<template>
  <main v-if="notes !== undefined">
   

   
    <div class="fixed" v-for="(note, index) in notes" :key="index" >
      
      
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

.fixed{
  position: fixed;
  top:10px;
}


</style>