<template>
<NavBar/>
 <router-view/>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
body{
  /* background: #f2f2f2; */
   background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
   color: #555;
  
  
}
</style>
