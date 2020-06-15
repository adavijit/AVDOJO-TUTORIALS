<template>
  <div id="app" class="container">
         <form id="form" class="form-inline" v-on:submit.prevent="add">
          <div class="form-group">
            <input type="text" id="bookTitle" class="form-control" v-model="text.text">
          </div>
          <input type="submit" class="btn btn-primary" value="Add">
        </form>
  </div>
</template>
<script>

import Firebase from 'firebase'
import toastr from 'toastr'
let config = {


  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let textRef = db.ref('texts')
export default {
  name: 'app',  firebase: {
    text: textRef
  },
  
  data () {
    return {
      text: {
          text: ''
      }
    }
  },
  
   methods: {
      add: function () {
        textRef.push(this.text);
        this.text.text = '';
        toastr.success('Added')
      }
    },  
  
}
</script><style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>