<template>
<div class="nav">
  <router-link to="/" href="#">Home</router-link>
  <router-link to="/Add"  href="#">Add Restaurant</router-link>
  <a  href="#" v-on:click="logout">Logout</a>
</div>
</template>

<script>
export default {
  name: "HeaderPage.vue",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>
  .nav{
    background-color: black;
    overflow: hidden;

  }
  .nav a{
    text-decoration: none;
    float:left;
    padding: 10px 15px;
    color: white;
    font-size: 18px;
  }
  .nav a:hover{
    background-color: grey;
    color: black;
  }
</style>