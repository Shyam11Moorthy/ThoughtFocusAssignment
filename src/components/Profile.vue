<template>
  <div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-toolbar-title>ThoughtFocus</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title @click="goTODO()">TODO</v-toolbar-title>
    </v-toolbar>

    <h4 class="title">Sports Admission Form</h4>

    <v-layout>
      <v-card class="card">
        <v-container>
          <v-layout row>
            <v-flex xs6 sm6 md4>
              <v-flex>
                <p>Please Enter Name</p>
              </v-flex>
              <v-text-field v-model="Name" solo label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs6 sm6 md4 class="mar40">
              <v-flex>
                <p>Please Enter Age</p>
              </v-flex>
              <v-text-field v-model="Age" solo label="Age" @change="ageLimit(Age)"></v-text-field>
            </v-flex>
          </v-layout>
          <v-flex class="headerRadio">
            <p>Please Select Gender</p>
            <v-radio-group class="posradio" name="alternateContact" v-model="seletcedGender" row>
              <v-radio
                color="blue black--text"
                :key="1"
                :label="`Male`"
                :value="1"
                v-on:change="genderMaleSelected()"
              ></v-radio>
              <v-radio
                color="blue black--text"
                :key="2"
                :label="`Female`"
                :value="2"
                v-on:change="genderFemaleSelected()"
              ></v-radio>
            </v-radio-group>
          </v-flex>
          <v-layout row>
            <v-flex xs12 sm6 md4>
              <v-flex>
                <p>Choose Game</p>
              </v-flex>
              <v-text-field v-model="seletcedGame" solo label="Eg : Cricket , Football" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4 class="mar40">
              <v-flex>
                <p>Please Enter Address</p>
              </v-flex>
              <v-text-field v-model="Address" solo label="Address" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 md4>
              <v-flex>
                <p>Please Enter City</p>
              </v-flex>
              <v-text-field v-model="selectedCity" solo label="City" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4 class="mar40">
              <v-flex>
                <p>Please Enter Pincode</p>
              </v-flex>
              <v-text-field v-model="pincode" solo label="Pincode" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-flex>
            <v-flex xs12 sm6 md4>
              <v-flex>
                <p>Highest Standard of Game Played</p>
              </v-flex>
              <v-text-field v-model="gameStandard" solo label="Eg : National ,State" required></v-text-field>
            </v-flex>
          </v-flex>
            <v-layout row>
                  
            <v-flex xs12 sm6 md4>
              <v-flex>
                <p>Please Enter Profession</p>
              </v-flex>
              <v-text-field v-model="currentProfession" solo label="Profession" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4  class="mar40">
              <v-flex>
                <p>Please Enter Salary</p>
              </v-flex>
              <v-text-field v-model="salary" solo label="salary" required></v-text-field>
            </v-flex>
         
            </v-layout>
          <v-flex>
            <v-flex xs12 sm6 md4>
              <v-flex>
                <p>Current Team (if Currently Coaching)</p>
              </v-flex>
              <v-text-field v-model="currentTeam" solo label="Current Team" required></v-text-field>
            </v-flex>
          </v-flex>
          <v-flex>
            <v-btn color="error" dark @click="submitProfile()">Submit</v-btn>
          </v-flex>
        </v-container>
      </v-card>
      <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Saved Successfully</v-card-title>

        <v-card-text>
          The Informations you provided ara saved Successfully
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="NavEditProfile()"
          >
            View Profile
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-layout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Mixins ,Watch} from "vue-property-decorator";
import * as types from '../store/Modules/mutation-types';
import AgeLimitMixin from './Mixins/AgeLimitMixin'


@Component({
  mixins: [AgeLimitMixin]
 
})
export default class Profile extends Vue {
  //Global Declarations //
  public Name = "";
  public seletcedGender = "";
  public seletcedGame = "";
  public Age = 0;
  public Address = "";
  public currentTeam = "";
  public selectedCity = "";
  public pincode = "";
  public gameStandard = "";
  public currentProfession = "";
  public games = ['Cricket','Football','Tennis','Badmintion','VolleyBall','Handball','Table Tennis','Chess','Throw Ball'];
  public dialog =  false;
  public salary = "";
  

  // mounted() {
// @Watch("seletcedGame") public seletcedGameValue() {
   


// }
  goTODO() {
    this.$router.push("ToDOApp");
  }
  genderMaleSelected() {
    this.seletcedGender = "Male";
  }
  genderFemaleSelected() {
    this.seletcedGender = "Female";
  }
  submitProfile() {
    const profInfo = {
      userName : this.Name, userAge : this.Age,userGame : this.seletcedGame, userGender:this.seletcedGender , userAddress: this.Address , userTeam :this.currentTeam , userCity : this.selectedCity, 
      userPincode : this.pincode, userStandard :this.gameStandard ,userProfession :this.currentProfession ,userSalary: this.salary
    }
    this.$store.dispatch('updateUserInfo',profInfo)
    this.dialog=  true;
  }
  NavEditProfile() {
    this.dialog = false;
    this.$router.push('EditProfile');
  }
}
</script>
<style>
.TodoClass {
  margin: 13px;
}
.addbtn {
  margin-top: 0px;
  height: 48px !important;
}
.card {
  height: 200%;
  width: 500% !important;
}
.mar40 {
  margin: 0px 0px 0px 44px;
}
</style>