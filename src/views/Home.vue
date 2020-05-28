<template>
  <div>
  <flex>
     <img src="../assets/Homepg.jpg">
    <v-container>
      <v-layout>
       <v-card class="centered">
         <h4 class="heading headline">Thought Focus Vue Assignment</h4>
         <v-flex class="todobtn">
           <v-btn rounded color="primary" dark @click="navigateTodo()">
             TODoApp
           </v-btn>
           </v-flex>
           <v-flex class="prfbtn">
           <v-btn rounded color="primary" dark @click="navigateProfile()"> 
             Profile Creation
           </v-btn>
         </v-flex>
      
       </v-card>
          </v-layout>
     </v-container >
  </flex>
  
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import ToDoApp from '@/components/ToDoApp.vue'

 @Component({

  }) 
export default class Home extends Vue {
 public navigateProfile() {
   this.$router.push('Profile');
  }
 
   public navigateTodo() {
    this.$router.push('ToDOApp');
  }
  }

</script>
<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width:50%;
}
.heading {
      margin: 10px 165px;
}
.todobtn {
  margin: 52px 208px;
}
.prfbtn {
  margin: 52px 208px;
}
</style>