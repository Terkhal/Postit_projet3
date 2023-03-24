
<script setup>
import { ref,watch,onMounted } from 'vue';
import { RouterLink } from 'vue-router'
//import array from './components/ArrayPost.vue'





const testprop = defineProps({
    titlef:{
      type:Array,
      required:true,
      
     
    }
})

const url = "http://mattmcm.fr:7754/notes";
// let item = "";
let notes = ref([])
fetch(url)
.then((response) => response.json()) 
.then((data) => { 
  
  notes.value = data.notes
 
  
}
)




watch(testprop.titlef,(newVal,oldVal)=>{
  let notesTmp = [...notes.value,...newVal]
  console.log("test newval :", newVal)
  notes.value = notesTmp
  console.log("test :", notesTmp)
  localStorage.setItem("postItsTmp", JSON.stringify(notesTmp))
  // refresh();


})





</script>

<template>
 
    <div class="post" v-for="(note, index) in notes.slice().reverse()" :key="index" >
    
    <RouterLink :to="'/postit/id='+note._id"  >
  <div class="postit" :style="{backgroundColor:note.color}">
    
    <div ><h2 class="limittitle">{{ note.title }}</h2></div>
    <div class="divcont">
    <p v-for="(content, index) in note.content" :key="index" class="limit">{{ content }}</p> 
  </div>
  </div>
  </RouterLink>
  </div>

</template>
<style>
/* .post:nth-child(2) {
  background: red;
} */

h2{font-weight: bold;}

.limittitle{
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;


}
.limit{
  overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

}
.postit{

  width:250px;
  height:140px;
  position:relative;
  background:#FA9F42;
  overflow:hidden;
  margin:10px 5px;
  padding:20px;
  border-radius:0 0 0 10px/25px;
  box-shadow:
  inset 0 -40px 40px rgba(0,0,0,0.2),
    inset 0 25px 10px rgba(0,0,0,0.2),
    0 5px 6px 5px rgba(0,0,0,0.2);
  font-family: 'Permanent Marker', cursive;
  line-height:1.7em;
  font-size:19px;

  color:black;
}

.divcont{
  
  max-height: 70px;
    overflow: hidden;

}






</style>

