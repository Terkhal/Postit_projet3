<script setup>

import { ref } from 'vue';


  // all of these are automatically bound to the template
  
  let title=ref("");
  let content=ref("");
 

  const emit = defineEmits(['title','content','id',"feedarray"])


    
  function addPost() {
   
    emit("title",title.value);
    emit("content",content.value);
    
    fetch('http://mattmcm.fr:7754/notes', {
	method: 'POST',
	body: JSON.stringify({
		title: title.value,
		content: [content.value],
		
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
    
}).then(function (response) {
	if (response.ok) {
        
		return response.json();
	}
	return Promise.reject(response);
}).then ((data) => {

	 console.log("id: ",data.note_id);
     emit('id',data.note_id)

     emit('feedarray')
  
   
}).catch((error) => {
	console.warn('invalid query', error);
});

  }


</script>

<template>
 
  <div class="formidable">
    <div >
    
    <h4>
      Create a post via the form below.
    </h4>
  </div>
    
        <table >      
            <tr>
                <td>Title: </td>
                <td><input type="text" name="title" v-model="title"></td>
            </tr>
            <tr>
                <td>Content: </td>
                <td> <textarea type="text" name="content" v-model="content"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td> <button v-on:click="addPost">add</button></td>
            </tr>
    </table>

  </div>
</template>

<style scoped>

td{
    font-weight: bold;

}
input{
    width: 200px;
}
textarea{
    font-family: Arial, Helvetica, sans-serif;
    width: 200px;
}
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
