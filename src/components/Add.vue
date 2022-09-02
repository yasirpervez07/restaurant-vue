<template>
  <Header/>
<h1>
  Hello User Welcome on Add Restaurant Page.
</h1>

  <form class="add mt-5" >
      <input type="text" class="form-control"  v-model="restaurant.name" placeholder="Enter name" name="name">
      <input type="text" class="form-control" v-model="restaurant.address" placeholder="Enter address" name="address">
      <input type="text" class="form-control" v-model="restaurant.phone" placeholder="Enter phone" name="phone">
      <button  type="button" v-on:click="addRestaurant" class="btn btn-dark">Add New </button>
  </form>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  name: "AddPage.vue",
  components:{
    Header
  },
  data(){
    return{
      restaurant:{
        name:'',
        address:'',
        phone:'',
      }

    }
  },
  methods:{
   async addRestaurant(){
      let result = await axios.post("http://127.0.0.1:8000/api/restaurants",{
        name:this.restaurant.name,
        address:this.restaurant.address,
        phone:this.restaurant.phone,
      });
      console.warn(result)
     this.$router.push({name: 'Home'})

   }
  }
}
</script>

<style >
.add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>