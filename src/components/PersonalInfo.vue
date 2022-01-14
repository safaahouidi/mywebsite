<template >
<div id="AboutMe">
  <v-container v-vue-aos="{animationClass:'animate__lightSpeedInLeft animated'}">

    <v-row >
    <v-col cols=12 md=4>
    <v-card
        max-width="320"
         elevation="24"
          shaped

      >
            <v-card-text class="background mt-12">
             <v-row justify="end" align="end">
               <v-col cols=12 md=2 >
                 <v-img
                  width="100"
                  src="..\assets\show-id-card-identification-driver-260nw-1211005639.jpg"
                         ></v-img>
               </v-col>
                <v-col cols=12 md=10 >
                  <h2 class=" black--text ">Personal Info</h2>
                </v-col>
             </v-row>
            </v-card-text>
   <v-img src="https://thumbs.dreamstime.com/b/woman-showing-personal-information-idea-cloud-computing-security-personal-information-concept-102467586.jpg"/>
        <h4 >
          <v-row class="ml-6 my-4">Name : Safaa Houidi</v-row>
          <v-divider></v-divider>
           <v-row class="ml-6 my-4">Phone Number : +963951729739 </v-row>
  <v-divider></v-divider>
          <v-row class="ml-6 my-4">Address : Syria-Damascus</v-row>
  <v-divider></v-divider>
          <v-row class="ml-6 mt-4"> Email : safaa.safaa.houdy@gmail.com</v-row>
  <br>
        </h4>

      </v-card>
    </v-col>
    <v-divider vertical class="mt-16 "></v-divider>
    <v-col cols=12 md=8 >
    <v-card
        max-width="700"
         elevation="24"
          shaped
      >
            <v-card-text class=" mt-12 ">
  <v-row>

                    <v-col cols=12 md=4>
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MN2dpTTtygc8sjv5FqHRO506Dzw3UNeBPQ&usqp=CAU" width="100px"/>
                    </v-col>
                         <v-col cols=12 md=8>
                      <h1 class="d-flex justify-start align-end  orange--text mt-6">Who AM I ?</h1>
                    </v-col>
  </v-row>

            </v-card-text>

        <h4 class="mx-4 mb-2">My name is, <strong>Safaa Houidi</strong>, and I'm an Syrian <strong>Frontend Web Developer</strong> who was born in 1994.

    <br>I have about four months of experience with frontend web development and its technologies such as : <br><strong>HTML5, CSS3, Bulma, JavaScript(ES6), Vue js, and GitHub</strong>.
    <br>I prefer learning from Documentations rather than youtube tutorials.

    I'm seeking to have an opportunity that matches my skills, to improve my knowledge, experience and skills, technical and communicational ones.</h4>
     <br>
      </v-card>
      <v-card
        max-width="700"
         elevation="24"
          shaped
      >
            <v-card-text class=" mt-12">
  <v-row>

                    <v-col cols=12 md=4>
                     <img src="https://i.pinimg.com/originals/3c/5c/70/3c5c706c67201bfdc5034e964a9a3697.jpg" width="200" />
                    </v-col>
                         <v-col cols=12 md=8>
                      <h1 class="d-flex justify-start align-center  orange--text mt-12 "> Education </h1>
                        <h3 class="mx-4 mt-5 black--text">I have studied <strong>Computer and Automation Engineering </strong>in Damascus University,
        <br>and I have <strong>graduted</strong> since 2016
         </h3>
                    </v-col>

  </v-row>

            </v-card-text>

      </v-card>
    </v-col>
    </v-row>

  </v-container>
</div>
</template>
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

</style>
