<template>
  <div id="app">
      <div class="row">
        <img class="img-fluid" src="./assets/images/memorialine logo.jpg">
        <div class="search-input col-md-2">
          <input id="search" type="text" class= "search" placeholder="Search">
          <font-awesome-icon id = "search-icon" icon="search"/>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light offset-md-4">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link">REVIEWS & TESTIMONIALS </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">PLANS & FEATURES </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">NEED HELP? </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">CONTACT US </a>
            </li>
          </ul>
        </nav>
        <button @click="loginModal" class="btn btn-primary">Login</button>
      </div>
      <modal name="login"
      :height="500"
      :width="500">
        <login></login>
      </modal>
    <profile></profile>
  </div>
</template>

<script>
import profile from './components/profile'
import login from './components/login'
export default {
  name: 'App',
  components: {
    profile,
    login
  },
  data () {
    return {
      //
    }
  },
  methods:{
    loginModal(){
      this.$modal.show('login');
    }
  }
}
</script>

<style scoped>
img{
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 1%;
  margin-right: 1%;
  height: 8%;
  width: 8%;
}
#search{
  width: 90%;
  margin-left: 1%;
  height: 35px;
  font-size: 15px;
}
.search-input{
  margin-top:1%;
  height: 50%;
  border: solid 1px black;
  border-radius: 3rem;
  border-color: rgb(184, 184, 184);
}
#search-icon{
  color:rgb(128, 119, 0);
  margin-left:3%;
}
input:focus{
  outline: none;
}
.navbar{
  font-weight: bold;
}
.btn{
  height: 50%;
  margin-top:1%;
  border-radius: 3rem;
  padding-left: 3%;
  padding-right: 3%;
  font-weight: bold;
  margin-left: 1%;
}
.v--modal-overlay {
  background: rgba(0, 8, 36, 0.808);
}

</style>