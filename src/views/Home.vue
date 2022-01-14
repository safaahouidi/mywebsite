<template>
  <div class="gray-background" id="Home">
    <Hero />
    <PersonalInfo />
    <Experience />
    <Courses />
    <Skills />
    <Banners />
  </div>

</template>

<script>
import Hero from '../components/Hero.vue'
import PersonalInfo from '../components/PersonalInfo.vue'
import Experience from '../components/Experience.vue'

import Courses from '../components/Courses.vue'
import Skills from '../components/Skills.vue'
import Banners from '../components/Banners.vue'
export default {
  name: 'Home',

  components: {
    Hero,
    PersonalInfo,
    Experience,
    Courses,
    Skills,
    Banners
  }
}
</script>
<style scoped>

.gray-background{
  background:rgb(242, 239, 239)
}

</style>
