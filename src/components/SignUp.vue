<template>
  <img class="logo" src="../assets/burger.png">
  <h1> Sign Up</h1>

  <div class="register">

    <input class="form-control" name="name" v-model="name" type="text" placeholder="Enter Name"/>
    <input class="form-control" name="email"  v-model="email" type="email" placeholder="Enter Email"/>
    <input class="form-control"  name="password" v-model="password" type="password" placeholder="Enter Password"/>

    <button  v-on:click="signUp" class="btn btn-dark"> Sign up</button>
    <p class="btn btn-dark mt-3 "><router-link to="/Login"> Login</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SignUp.vue",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp(){
      console.warn('Haaan ho raha hai',this.name ,this.email);
      let result = await axios.post("http://127.0.0.1:8000/api/register",{
        email:this.email,
        name:this.name,
        password:this.password,
      });
      console.warn(result,)
      if(result.status == 201 ){
        alert('USER REGISTERED')
      }
      localStorage.setItem("user-info",JSON.stringify(result.data))
      this.$router.push({name: 'Home'})
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

<style >
.logo {
  width: 100px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>