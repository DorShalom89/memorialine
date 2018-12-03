<template>
  <div id="tributes">
    <div class="row">
      <div class="col-md-6 offset-md-2">
         <h1>Add New Tributes \ Condolences</h1>
         <br>
         <nav class="navbar navbar-expand-md navbar-light">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link  class="link" to="/write">WRITE SOMETHING</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="link" to="/shareaphoto">SHARE A PHOTO</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="link" to="/candle">LIGHT A CANDLE</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="link" to="/flower">GIVE A FLOWER</router-link>
                </li>
              </ul>
            </div>
         </nav>
         <router-view></router-view>
      </div>
      <div class="container col-md-2">
        <div class="creator">
          <h2 class="customTitle">ADS</h2>
          <div class= "row">
            <br><br><br><br><br><br><br><br><br><br>
          </div>
        </div>
      </div>
      <div class="container col-md-2">
        <div class = "creator">
          <h2 class="customTitle" >EXTRA AD</h2>
          <div class = "row">
            <br><br><br><br><br><br><br><br><br><br>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: "tributes",
  data(){
    return {
        
    }
  },
    methods:{

  } 
};

</script>

<style scoped>
h1 {
  margin-top: 4%;
  color: rgb(161, 154, 48);
  font-weight: 300;
  font-size: 28px;
}
.link {
  padding-top: 2%;
  padding-bottom: 2%;
  margin-right: 25px;
  margin-left: 25px;
  font-weight: bold;
  background-color: rgba(0, 255, 255, 0);
}
.row{
  width: 100%;
}
.customTitle {
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 16px;
  text-align: center;
  background-color:rgb(240, 240, 240);
  font-weight: bold; 
}
.creator {
  border: solid 2px;
  border-color: rgb(240, 240, 240); 
  border-radius: 5px;
  vertical-align: top;  
  float: top;
}
.navbar{
  margin-left: 10%;
  margin-bottom: 5%;
}

</style>
