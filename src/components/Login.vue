<template>
  <img class="logo" src="../assets/burger.png">
  <h1>
    Login Page
  </h1>

  <div class="register">

    <input class="form-control" name="email" v-model="email" type="email" placeholder="Enter Email"/>
    <input class="form-control" name="password" v-model="password" type="password" placeholder="Enter Password"/>

    <button v-on:click="login" class="btn btn-dark"> Login</button>
    <p class="btn btn-dark mt-3 ">
      <router-link to="/SignUp"> Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginPage.vue",
  data() {
    return {
      email:'',
      password:'',
    }
  },
  methods:{
  async  login(){
    let result = await axios.get(
        `http://127.0.0.1:8000/api/login?email=${this.email}&password=${this.password}`
    );
      if(result.status == 200){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name: 'Home'})

      }
    console.warn(result)
    }
  },

  mounted() {
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({name: 'Home'})
    }
  }
}

</script>

<style scoped>

</style>