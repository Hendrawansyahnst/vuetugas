<template>
    <!--banner image-->
  
    <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <div  class="images">
        <div class="profile">
        <img src="../assets/background.jpeg" class="rounded-circle"
             height="200px" width="200px">
      </div>
      <div class="content text-center">
        <h1 class="text-white">Hendrawansyah Nasution</h1>
        <h2>TUGAS 3</h2>
      </div>
      </div>
    </div>
  
  
  </template>
  
  <script>
  export default {
    name: 'App',
    components: {
      // HelloWorld
    }
  }
  </script>
  
  <style>
  .text-center{
    margin-top: 50px;
  }
  .images {
    margin-top: -300px;
  }
  .banner-image{
    background: #282828;
    background-size: cover;
  }
  
  
  </style>