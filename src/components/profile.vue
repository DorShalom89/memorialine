<template>
    <div id="profile">
        <div class= "profile">
            <div class = "row" background = "../assets/images/header.jpg" >
                <img  src="../assets/images/profile pic.jpg" width="7.5%" height = "7.5%" >
                <div class="details">
                    <h1>Rafael Shoresh</h1>
                    <h2>1928-2004</h2>
                </div>
                <button class="btn btn-light btn-lg"><font-awesome-icon id = "shareIcon" icon="share-alt"/> share</button>
                <button class="btn btn-light btn-lg"><font-awesome-icon id = "shareIcon" icon="envelope"/> invite</button>
                <button class="btn btn-light btnEdit btn-lg"><font-awesome-icon id = "shareIcon" icon="pencil-alt"/> Edit Page</button>
            </div>
            <div class="navigator"> 
            <nav class="navbar navbar-expand-md">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-on:click="activate('about')" class="nav-item" v-bind:class="{active: active_el == 'about' }">
                            <router-link class="link"  to="/about">ABOUT</router-link>
                        </li>
                        <li v-on:click="activate('tributes')" class="nav-item" v-bind:class="{active:  active_el ==  'tributes'}">
                            <router-link class="link"  to="/tributes">TRIBUTES & CONDOLENCES</router-link>
                        </li>
                        <li v-on:click="activate('events')" class="nav-item" v-bind:class="{active:  active_el == 'events'}">
                            <router-link class="link"  to="/events">EVENTS</router-link>
                        </li>
                        <li v-on:click="activate('friends')" class="nav-item " v-bind:class="{active: active_el == 'friends'}">
                            <router-link class="link"  to="/friends">FRIENDS & FAMILY</router-link>
                        </li>
                        <li v-on:click="activate('gallery')" class="nav-item" v-bind:class="{active: active_el == 'gallery'}">
                            <router-link class="link"  to="/gallery">GALLERY</router-link>
                        </li>
                        <li v-on:click="activate('communities')" class="nav-item" v-bind:class="{active: active_el == 'communities'}">
                            <router-link class="link"  to="/communities">COMMUNITIES</router-link>
                        </li>
                        <li v-on:click="activate('links')" class="nav-item" v-bind:class="{active: active_el == 'links'}">
                            <router-link class="link"  to="/links">LINKS</router-link>
                        </li>
                         <li v-on:click="activate('other')" class="nav-item" v-bind:class="{active: active_el == 'other'}">
                            <router-link class="link" to="/other">. . .</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "profile",
   components: {
  },
  data(){
    return {
        active_el:"about"
    }
  },
    methods:{
    activate:function(el){
        this.active_el = el;
    }
  } 
};

</script>

<style scoped>
.profile {
  background-image: url("../assets/images/header.jpg");
    padding-bottom: 2px;
}
img {
  margin-top: 3%;
  margin-left: 16%;
  border-radius: 50%;
  border: 5px solid;
  border-color: white;
}
.details {
  margin-top: 5%;
  margin-left: 2%;
}
h1 {
  background-color: whitesmoke;
  color: olive;
  font-weight: 100;
  font-size: 32px;
  padding-left: 10px;
  padding-right: 25px;
}
h2 {
  color: white;
  font-size: 24px;
  padding-left: 10px;
  font-weight: 400;
}
.btn {
    height: 100%;
  margin-top:5%;
  margin-left: 1%;
  color: black;
  border-radius: 3rem;
  padding-left: 1.25%;
  padding-right: 1.25%;
  font-weight: bold;
}
.btnEdit {
  height: 10%;
  margin-top: 1%;
  margin-left: 25%;
  color: black;
  border-radius: 3rem;
  padding-left: 1.25%;
  padding-right: 1.25%;
  font-weight: bold;
}
#shareIcon {
  color: rgb(25, 106, 199);
}
.navbar-default {
  background: none;
}
.link {
  padding-top: 2%;
  padding-bottom: 2%;
  margin-right: 25px;
  margin-left: 25px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 255, 255, 0);
}
.navbar-nav > li {
  float: left;
  position: relative;
  margin-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
}
.navbar-nav li.active::after{
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  width: 100%;
  content: " ";
  color: white;
  border-bottom: 5px solid white;
}
.navigator {
  margin-left: 15%;
}
li a {
text-decoration: none;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
background-color: rgb(2, 136, 170);
cursor: pointer;
}
</style>
