<template >
<div  id="Experience">
  <v-container v-vue-aos="{animationClass:'animate__lightSpeedInLeft animated'}">

    <v-row  >
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-88aq3yXaJ1pThnDNrbuSu9biMSbfmYxxHQ&usqp=CAU"
                         ></v-img>
               </v-col>
                <v-col cols=12 md=10 >
                  <h2 class=" black--text ">Experience</h2>
                </v-col>
             </v-row>
            </v-card-text>
   <v-img src="../assets/images.png"/>

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
                      <v-img src="data:image/jpeg;base64,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" width="70px"/>
                    </v-col>
                         <v-col cols=12 md=8>
                      <h1 class="d-flex justify-start align-end  orange--text mt-6">Experience</h1>
                    </v-col>
  </v-row>

            </v-card-text>

        <h4 class="mx-4 mb-2">From 2018 I have working as System Admin :  work details<br> Windows server (2012 ,2016) administrator
  <br>Design implementing network infrastructure
  Administering the whole IT infrastructure (switches , routers
  and servers )
  and Antivirus Administration<br>
  <br>

  From 2017 to 2018 I have worked as Technical Support : work details <br>
  Computer Maintainance (Software and Hardware)<br>
  Installation Programs<br>
  Trainning Customer about special programs
  </h4>
     <br>
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
