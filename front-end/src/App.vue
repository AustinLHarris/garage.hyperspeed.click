<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="../public/icon2.png">
      </div>
    </router-link>
    <div class="title">
      <h1>Austin's Garage</h1>
    </div>
    <div class="alink">
      <router-link to="/help">
        <h1 >Mechanic Help</h1>
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Answer Questions</router-link>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #a50000;
  color: #8ca1a7;
}

.title {
  margin-top: 5px;
}

.logo{
  max-height: 50dp;
  max-width: 50dp;
} 

.img{
  size: 10px;
  height: 10%;
  object-fit:inherit
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .alink{
  text-align: right;
  align-content: right;
  margin-left: 500px;
}
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .alink{
  text-align: right;
  align-content: right;
  margin-left: 200px;
}
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .alink{
  text-align: right;
  align-content: right;
  margin-left: 50px;
}
}
/* .alink{
  text-align: right;
  align-content: right;
  margin-left: 500px;
} */
</style>
