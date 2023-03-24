<script setup>


  // all of these are automatically bound to the template
  defineProps({
    titlepost: {
        type:String,
        required:true,
    },
    contentpost: {
        type:Array,
        required:true,
    },

  })
  
  let title="";
  let content="";
    
  function editPost(id,titlepost,contentpost) {
console.log(this.content, "vs" ,contentpost)
if(this.title == ""){
    this.title = titlepost;
}
if(this.content == ""){
    this.content = contentpost[0];
}

console.log("post: ",this.title," old: ",titlepost)
    fetch('http://mattmcm.fr:7754/note/' + id, {
	method: 'PUT',
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
     window.location.href = '/postit/id='+id
   
}).catch(function (error) {
	console.warn('invalid query', error);
});


  }


</script>

<template>
  <div class="read">
    <h1 class="black">{{ msgread }}</h1>
    <h3>
      You will edit your post-it 
    </h3>
  </div>
  <div class="formidable">
    
        <table >      
            <tr>
                <td>title</td>
                <td><input type="text" name="title" :placeholder="titlepost" v-model="title"></td>
            </tr>
            <tr>
                <td>content</td>
                <td> <input type="text" name="content" :placeholder="contentpost" v-model="content"></td>
            </tr>
            <tr>
                <td><button v-on:click="editPost($route.params.id,titlepost,contentpost)">edit</button> </td>
                <td> </td>
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
