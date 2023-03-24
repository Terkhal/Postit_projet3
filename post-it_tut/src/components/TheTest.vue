<script setup>

import TestItem from './TestItem.vue'
import PostitIcon from './icons/IconPostit.vue'
</script>
<template>
  <TestItem>
    <template #prout> <PostitIcon /> </template>
    <template #heading>This side will display your post it.</template>
   <template #postit>This wille be the body of the post-it in a template</template>
  </TestItem>
</template>
  


<style scoped>
.item{
  margin-top: 50%;
}

</style>