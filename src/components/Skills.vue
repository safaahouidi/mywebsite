<template>
  <div id="skill">
    <v-container v-vue-aos="{animationClass:'animate__lightSpeedInLeft animated'}">
    <v-card  class="mx-auto mt-4 mb-12"
              max-width="1200">
              <br>
      <h1 class="d-flex align-center justify-center margin-right orange--text mb-6">Skills</h1>
      <v-row v-for="skill in skills" :key="skill.title" >
      <v-col cols=12 md=2></v-col>
      <v-col cols=12 md=2>
    <h3>{{skill.title}} :</h3>
      </v-col>
          <v-col cols=12 md=6>
              <v-progress-linear
                v-model="skill.value"
                :color="skill.color"
                height="25"
              >
              </v-progress-linear>
              <br>
          </v-col>
      </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    skills: [
      {
        title: 'Html',
        value: '85',
        color: 'amber'
      },
      {
        title: 'CSS',
        value: '90',
        color: 'blue-grey'
      },
      {
        title: 'Javascript',
        value: '50',
        color: 'orange'

      },
      {
        title: 'Vuejs',
        value: '70'
      }
    ]
  })
}
</script>
