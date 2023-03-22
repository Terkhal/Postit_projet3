<script setup>


  // all of these are automatically bound to the template
  
  let title="";
  let content="";
    
  function addPost() {

    fetch('http://mattmcm.fr:7754/notes', {
	method: 'POST',
	body: JSON.stringify({
		title: this.title,
		content: [this.content],
		
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
}).then(function (response) {
	if (response.ok) {
        
		return response.json();
	}
	return Promise.reject(response);
}).then(function (data) {
	 console.log(data);
   
}).catch(function (error) {
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
                <td>title</td>
                <td><input type="text" name="title" v-model="title"></td>
            </tr>
            <tr>
                <td>content</td>
                <td> <input type="text" name="content" v-model="content"></td>
            </tr>
            <tr>
                <td></td>
                <td> <button v-on:click="addPost()">add</button></td>
            </tr>
    </table>


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
