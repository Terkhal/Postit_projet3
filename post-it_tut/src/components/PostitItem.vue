<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})



</script>

<template>
  <div class="postit">
    <div><h2>{{ title }}</h2></div>
    <div class=""><h3>{{ content }}</h3> </div>

  </div>
</template>




<style scoped>
.postit{
  
  background-color: #FA9F42;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 5px;
}


</style>
