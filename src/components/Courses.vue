<template >
<div id="Courses">
  <v-container v-vue-aos="{animationClass:'animate__lightSpeedInLeft animated'}">
  <v-card  class="mx-auto my-12"
              max-width="1200">
              <br>
                 <v-card-text class="p-16 mb-6">
             <v-row justify="center" align="center">
               <v-col cols=12 md=2 >

               </v-col>
                <v-col cols=12 md=10 >
                  <h1 class="d-flex align-center justify-center margin-right orange--text ">Courses</h1>
                </v-col>
             </v-row>
            </v-card-text>
      <v-row>
          <v-card v-for="course in courses"
          :key="course.title"
              class="mx-auto mt-6"
              max-width="240"

            > <h2 class="mx-auto  background d-flex justify-center">
                    {{course.title}}
                  </h2>
                  <v-img :src="course.image" height="120"></v-img>
              <v-row>

                  <v-card-subtitle>
                    {{course.subject}}
                  </v-card-subtitle>
              </v-row>
              </v-card>
      </v-row>
      <br>
      <br>
  </v-card>
  </v-container>
</div>
</template>
<script>
export default {
  name: 'Courses',

  data: () => ({
    courses: [
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtKhFMVOqB3Fd4cYkkWAu3jn4seAdRv_26EaKSjoIM4HIs6g3DtX4zQXlo2GvTUm6dDg&usqp=CAU',
        title: 'CCNA',
        subject: 'this course was about Routing and switching and how to connect between different network '

      },
      {
        image: 'data:image/png;base64,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',
        title: 'MCSA',
        subject: 'this course was about servers, how to configuration servers (DNS , DHCP,DC) and how to connect and replecate between networks'

      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm-bkfsOlKth9HhSgBP-m6klx4pKTAycq0JAH0nccIVUBOD1o256r5gvPq2Y20MkJudM&usqp=CAU',
        title: 'CEH',
        subject: 'this course was about secure network and how to prevent hacker do any thing'
      },
      {
        image: 'https://miro.medium.com/max/1200/1*qHsE-PM5TLmqzmYjmlr6-A.png',
        title: 'FRONT-End',
        subject: 'this course was about Front-end language, HTML5, CSS3, bulma, Javascript, VUEjs, vuetifyjs'

      }
    ]
  })
}
</script>
<style scoped>
.background{
  background:orange;
}
.gray-background{
  background:rgb(242, 239, 239)
}
.margin{
  margin-left:120px
}
.margin-right{
  margin-right:200px;
}

</style>
