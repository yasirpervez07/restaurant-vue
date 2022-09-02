<template>
  <Header/>
  <h1>Hello {{name}},  Welcome to Home Page</h1>


  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in restaurants " :key="item.id">
      <td> {{item.id}}</td>
      <td> {{item.name}}</td>
      <td> {{item.address}}</td>
      <td> {{item.phone}}</td>
      <td>
        <router-link :to="'/Update/'+item.id"> <button class="btn " >Edit</button>  </router-link>
        <button v-on:click="deleteRestaurant(item.id)" class="btn btn-danger"> Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  name: "HomePage.vue",
  components: {
    Header
  },
  data(){
    return{
      name:'',
      restaurants:[],
    }
  },
  mounted() {
   this.loadData()
  },
  methods:{
    async deleteRestaurant(id){
      let result = await axios.delete("http://127.0.0.1:8000/api/restaurants/"+id);
      this.loadData()
console.warn(result)
    },
  async loadData(){
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name
      if (!user) {
        this.$router.push({name: 'Login'})
      }
      let result = await axios.get("http://127.0.0.1:8000/api/restaurants");
      console.warn(result)
      this.restaurants = result.data
    }
  }
}
</script>

<style scoped>

</style>