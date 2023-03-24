<script setup>


  // all of these are automatically bound to the template

  
  function deletePost(id) {

    console.log("test: ", id)

    fetch('http://mattmcm.fr:7754/note/' + id, {
  method: 'DELETE',
})
.then(res => res.json()) // or res.json()
.then(res => console.log(res))

window.location.href = '/'

  }


</script>

<template>

  
  <div class="formidable">
    
                <input type="hidden" name="id"  v-model="id">
                 <button v-on:click="deletePost($route.params.id)">Delete</button>
  


  </div>
</template>

<style scoped>

.formidable{
    width: -webkit-fill-available;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
