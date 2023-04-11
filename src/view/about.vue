<template>

    <section id = "sec-2" class = "py-5">
      <div class = "container my-4">
        <div class = "row gx-lg-5">
          <div class = "col-lg-6 mb-5">
            <img src = "../assets/background.jpeg" class = "img-fluid">
          </div>
          <div class = "col-lg-6">
            <h3>About me</h3>
            <p class = "text-muted fw-light lh-lg my-4"> Hello Gais </p>
            <p class = "text-muted fw-light lh-lg my-4"> My name is Hendrawansyah Nasution, I was born on Agust, 2001 in the city of Pekanbaru, now I live in the Pekanbaru. and my profession is a student at the Sultan Syarif Kasim Riau State Islamic University. </p>
  
  
            <button type = "button" class = "btn btn-blue mt-2">Read more</button>
          </div>
        </div>
      </div>
    </section>
  
    
  </template>
  
  <script>
  export default {
    name: 'App',
    components: {
    }
  }
  </script>
  
  <style>
  :root{
    --blue: #4B65E8F4;
    --blue-dark: #444BCCF4;
    --light-grey: #f1f4f6;
  }
  
  *{
    font-family: 'Roboto', sans-serif;
  }
  
  /* misc stylings */
  ul li{
    list-style-type: none;
  }
  .container{
    max-width: 1200px;
  }
  .display-1{
    letter-spacing: 1px;
  }
  .bg-blue{
    background-color: var(--blue)!important;
  }
  .bg-grey{
    background-color: var(--light-grey);
  }
  .text-blue{
    color: var(--blue);
  }
  .btn{
    border: 2px solid #fff;
    border-radius: 1.5rem;
    padding: 0.6rem 0;
    width: 160px;
  }
  .btn-blue{
    background-color: var(--blue);
    color: #fff;
    padding: 0.55rem 0;
    width: 140px;
  }
  .btn-blue:hover{
    color: var(--blue);
    background: #fff;
    border-color: var(--blue);
  }
  .lh-lg{
    line-height: 1.7!important;
  }
  .circle-icon{
    width:55px;
    height: 55px;
    border-radius: 50%;
    background-color: var(--blue);
  }
  
  
  
  /* section 6 */
  #sec-6{
    background: linear-gradient(rgba(91, 215, 72, 0.96), rgba(22, 219, 147, 0.9)), url(../assets/section-6-bg.jpg) center/cover no-repeat;
  }
  #sec-6 .circle-icon{
    width: 95px;
    height: 95px;
  }
  
  /* section 7 */
  #sec-7 .card{
    border: none;
  }
  
  /* section 8 */
  #sec-8 .carousel-item img{
    width: 180px!important;
  }
  
  /* section 9 */
  .pricing-item{
    border-radius: 0.3rem;
    overflow: hidden;
    max-width: 340px;
  }
  .pricing-title{
    background-color: var(--green-dark);
  }
  .pricing-price, .pricing-item ul li{
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0.9rem 0;
  }
  .pricing-item .btn:hover{
    background: transparent!important;
    color: #fff;
  }
  </style>
  