<template>
<div id="writeSomething">
  <form class="write">
    <input class="custom-title" type="text" placeholder="Title">
    <hr class="line">
    <textarea class="custom-post" type="text" rows = "5" placeholder="Post"></textarea>
    <div class="last">
      <a class="post">POST</a>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "writeSomething",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.write{
  border: solid 1px rgba(184, 179, 179, 0.479);
  border-radius: 5px;
}
input:focus {
  outline: none;
}
textarea:focus {
  outline: none;
}
textarea{
  resize: none;
}
.custom-title{
  margin-top: 1%;
  width: 100%;
  margin-left: 2.5%;
}
.custom-post{
  margin-bottom: 1%;
  margin-left: 2.5%;
  width: 100%;
}
.line{
  width: 96%;
  margin-left: 2%;
}
.last{
  text-align: right;
  width: 100%;
  background-color: rgb(216, 216, 216);
  padding: 2%;
  color: rgb(25, 106, 199);
}
.post{
  margin-right: 2%;
  font-weight: bolder;
}
</style>
