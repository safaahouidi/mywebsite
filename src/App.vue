<template>

    <div>
      <v-app>
 <v-app-bar
      app

      color="#E9E8EB"
      dark
       elevation="15"
    >
      <div class="d-flex align-center black--text">
      <h1>Portfolio</h1>
      </div>

      <v-spacer></v-spacer>

        <div class="black--text d-xl-flex d-lg-flex  d-none" >
          <v-btn class="mr-2 black--text"   text href="#Home" ><v-icon>mdi-home</v-icon>Home</v-btn>
          <v-btn class="mr-2 black--text"  text href="#AboutMe">AboutMe</v-btn>
           <v-btn class="mr-2 black--text"  text href="#Experience">Experience</v-btn>
          <v-btn class="mr-2 black--text"  text href="#Courses">Courses</v-btn>
          <v-btn class="mr-2 black--text"  text href="#skill">Skills</v-btn>
        </div>
 <div class="text-center d-sm-flex d-flex d-md-flex d-lg-none d-xl-flex">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#D8D7D8"
          dark
          v-bind="attrs"
          v-on="on"

        >
          <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-btn text :href="item.href">{{ item.title }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-app-bar>
        <v-main>
          <router-view/>
        </v-main>
      <v-footer
    color="#b7b7b7"

    align="center"
        >

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>Portfolio</strong>
        </v-card-text>

        </v-footer>
      </v-app>
    </div>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    items: [
      {
        title: 'Home',
        href: '#Home'
      },
      {
        title: 'AboutMe',
        href: '#AboutMe'
      },
      {
        title: 'Experience',
        href: '#Experience'
      },
      {
        title: 'Courses',
        href: '#Courses'
      },
      {
        title: 'Skills',
        href: '#skill'
      }
    ]
  })
}

</script>
