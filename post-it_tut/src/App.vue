<script setup>

import { RouterView } from 'vue-router'
import Read from './components/PostItRead.vue'
import Form from './components/PostForm.vue'
import ArrayPost from './components/ArrayPost.vue'
import { ref } from 'vue';
import { onMounted } from 'vue';
//import array from './components/ArrayPost.vue'

// onMounted(() => {
//   document.querySelector("#app > header")
  
//  let postitarea = document.getElementsByClassName("post");
//  let postitclick = document.querySelectorAll("post")
//  postitclick.addEventListener('click', function(){
//   document.getElementsByTagName("header")[0].style.backgroundColor= "black";



//  })
// })


let testdis = document.getElementById('app').style.display = "";
console.log(testdis)
let prout = ref([])
let test = {
  id: '',
  title: '',
  content: []
};


 function getTitle(value){

  test.title = value ;
  console.log(value)

} 


function getContent(value){
  test.content = value ;
  console.log(value)
  
}

function getId(value){
  test.id = value ;
  console.log(value)
  
}

function feedarray(){

  let tut = {
    _id: test.id,
    title: test.title,
    content: [test.content],
  }
  

   prout.value.push(tut)

  console.log("feedarray:",tut)
}




</script>


<template>
  <header>
  
   
    <div class="wrapper">
      <div> <nav>

      </nav></div>
        
        <Read msgread="Post-it display" />
        <Form @title="getTitle" @content="getContent" @id="getId" @feedarray="feedarray"/>
        <div class="arraypost">
        <ArrayPost :titlef="prout" />
        
      </div>
      </div>
  
  
    </header>

<div>
    <RouterView />
  </div>




</template>

<style scoped>




.arraypost{
  display: contents;
}
.Fixed
{
  position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        background-color: green;
        border: 2px solid #4CAF50;
}
.limit{
width: 100px;
height: 22px;
text-overflow: ellipsis;
/* overflow: hidden; */
white-space: nowrap;

}


header {
  line-height: 1.5;
  max-height: 100vh;
  width: 1000px;
 
}
 td{
  border: 1px black solid
 }

 table{
  border: 1px black solid
 }
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}






nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: block;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
