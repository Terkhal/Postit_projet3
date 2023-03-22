<script setup>

import { RouterView } from 'vue-router'
import Read from './components/PostItRead.vue'
import Form from './components/PostForm.vue'
import ArrayPost from './components/ArrayPost.vue'
import { ref } from 'vue';
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
  <header>
  
   

    <div class="wrapper">
      <div> <nav>

      </nav></div>

      <Read msgread="Post-it display" />
      <Form />
      <ArrayPost />
      
     
    </div>
 
  </header>


  <RouterView />





</template>

<style scoped>

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
overflow: hidden;
white-space: nowrap;

}


header {
  line-height: 1.5;
  max-height: 100vh;
  width: 900px;
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
