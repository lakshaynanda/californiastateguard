<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
import 'vue-select/dist/vue-select.css';
export default {
  mounted() {
  },
  methods: {
  //   onloadfunc () {
  //       if( window.localStorage )
  //       {
  //         //check if reloaded once already 
  //         if( !localStorage.getItem('firstLoad') )
  //         {
  //         //if not reloaded once, then set firstload to true
  //           localStorage['firstLoad'] = true;
  //           //reload the webpage using reload() method
  //           window.location.reload();
  //         }  
  //         else 
  //           localStorage.removeItem('firstLoad');
  //       }
  //     }
  }
}
</script>

<style>

::-webkit-scrollbar {
    display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #18365D;
  color: #17C1FB;
}
#nav {
  padding: 30px;
  background-color: #18365D;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
html {
  background-color: #18365D;
}
label {
  color: #17C1FB;
}
.custom-control-input {
  background-color: #2c3e50;
}


</style>
