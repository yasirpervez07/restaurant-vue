<template>
  <h1>
    Helo User Welcome on Add Restaurant Page
  </h1>
  <form class="add mt-5" >
    <input type="text" class="form-control"  v-model="restaurant.name" placeholder="Enter name" name="name">
    <input type="text" class="form-control" v-model="restaurant.address" placeholder="Enter address" name="address">
    <input type="text" class="form-control" v-model="restaurant.phone" placeholder="Enter phone" name="phone">
    <button  type="button" v-on:click="updateRestaurant" class="btn btn-dark">Update  Restaurant </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdatePage.vue",
  data(){
    return{
      restaurant:{
        name:'',
        address:'',
        phone:'',
      }

    }
  },
  async mounted(){
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'Login'})
    }
    let result = await axios.get("http://127.0.0.1:8000/api/restaurants/"+this.$route.params.id);
    // console.warn(this.$route.params.id)
    console.warn(result.data)
    this.restaurant = result.data
  },
  methods:{
  async updateRestaurant(){
      console.warn("this function called" , this.restaurant)
    let result = await axios.put("http://127.0.0.1:8000/api/restaurants/"+this.$route.params.id,{
      name:this.restaurant.name,
      address:this.restaurant.address,
      phone:this.restaurant.phone,
    });
      if(result.status == 200){
        this.$router.push({name: 'Home'})
      }
      console.warn(result)
  }
  }
}
</script>

<style scoped>

</style>