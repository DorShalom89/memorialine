<template>
   <div id="login">
       <div class="login-container">
           <br>
           <div class="offset-md-3">
                <img src="../assets/images/memorialine logo.jpg">
           </div>
           <br>
            <div >
                <form>
                    <div class="form-group col-md-8 offset-md-2">
                        <input type="email" class="form-control" id="email"  placeholder="Email">
                        <input type="password" class="form-control" id="password"  placeholder="Password">
                    </div>
                    <br>
                    <div class= "col-md-8 offset-md-2">
                        <button class="btn btn-facebook ">connect with facebook</button>
                        <br>
                        <br>
                        <button class="btn btn-signup">Sign up</button>
                    </div>
                    <button class="btn-login col-md-12">LOGIN</button>
                </form>
            </div>


       </div>

   </div>
</template>

<script>
export default {
  name: "login",
   components: {
  },
  data(){
    return {
    }
  },
    methods:{
    
  } 
};

</script>

<style scoped>
.btn{
 width: 100%;
 border-radius: 3rem;
}
.btn-facebook{
    background-color: rgb(59, 89, 152);
    color: white;
    font-weight: bold;
}
.btn-signup{
    background-color: rgb(212, 212, 212);
    font-weight: bold;
}
.btn-login{
    background-color: rgb(65, 105, 225);
    color: white;
    position: absolute;
    bottom: 0%;
    font-weight: bold;
    height: 10%;
}
</style>
