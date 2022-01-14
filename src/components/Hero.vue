<template>
  <v-parallax
height="700"
      jumbotron
    dark
:aspect-ratio="16/9"
id="Hero"
  >
    <v-row
  align="end" justify="start"
    >

  <h1 class="black--text my-1 mx-12" >
 <p> WELCOME TO MY WEBSITE</p>
       <p class="d-flex justify-center align-canter secondary--text"> Eng.Safaa Houidi</p>
      <typewriter
        :speed="400"
        :full-erase="true"
        :interval="300"
        class="mx-12 secondary--text"
        :words='["FRONT-END Developer"]' >
      </typewriter>
  </h1>

      <v-col
        class="text-center"
        cols="12"
      >

      </v-col>
    </v-row>
  </v-parallax>
</template>
<style scoped>
.v-parallax{
background: url("https://cdn.pixabay.com/photo/2017/06/23/11/49/laptop-2434393__340.jpg");
   background-size:cover;

  }

</style>
