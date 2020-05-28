<template>
  <div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-toolbar-title>ThoughtFocus</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title @click="goTODO()">TODO</v-toolbar-title>
    </v-toolbar>

    <h4 class="title">Sports Admission Form</h4>

    <v-card class="card">
      <v-layout v-if="!editProfile" row>
        <v-container>
          <v-flex>
            <small class="labeltxt">Name</small>
            <span class="sub-title">{{getUserDetails.userName | toUpperCase}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">Age</small>
            <span class="sub-title">{{getUserDetails.userAge}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">Game</small>
            <span class="sub-title">{{getUserDetails.userGame}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">City</small>
            <span class="sub-title">{{getUserDetails.userCity}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">Gender</small>
            <span class="sub-title">{{getUserDetails.userGender == 1?"Male":"Female"}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">
              <Address></Address>
            </small>
            <span class="sub-title">{{getUserDetails.userAddress}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">Profession</small>
            <span class="sub-title">{{getUserDetails.userProfession}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">Game Level</small>
            <span class="sub-title">{{getUserDetails.userStandard}}</span>
          </v-flex>
             <v-flex>
            <small class="labeltxt">Salary</small>
            <span class="sub-title">{{getUserDetails.userSalary | indianCurrency}}</span>
          </v-flex>
          <v-flex>
            <small class="labeltxt">Current Team</small>
            <span class="sub-title">{{getUserDetails.userTeam}}</span>
          </v-flex>
          <v-flex>
            <v-btn color="error" dark @click="EditProfile()">Edit Profile</v-btn>
          </v-flex>
        </v-container>
      </v-layout>
    </v-card>
    <v-layout v-if="editProfile">
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
              <v-text-field v-model="Age" solo label="Age"  @change="ageLimit(Age)" required></v-text-field>
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
              <v-text-field v-model="gameStandard" solo label="Standard" required></v-text-field>
            </v-flex>
          </v-flex>
          <v-flex>
            <v-flex xs12 sm6 md4>
              <v-flex>
                <p>Please Enter Profession</p>
              </v-flex>
              <v-text-field v-model="currentProfession" solo label="Profession" required></v-text-field>
            </v-flex>
          </v-flex>
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
    </v-layout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import * as types from "../store/Modules/mutation-types";
import { Getter ,Mutation} from "vuex-class";
import { indianCurrency } from '../../filter';
import AgeLimitMixin from './Mixins/AgeLimitMixin'

@Component({
  filters: {
  indianCurrency,
  },
   mixins: [AgeLimitMixin]
})
export default class EditProfile extends Vue {
  @Getter("getUserInfo") public getUserDetails!: any;
  @Mutation("UpdateUserProfile") public UpdateUserProfile !: any;

  //Global Declarations //
  public Name = "";
  public seletcedGender = "";
  public seletcedGame = "";
  public Age = "";
  public Address = "";
  public currentTeam = "";
  public selectedCity = "";
  public pincode = "";
  public gameStandard = "";
  public currentProfession = "";
  public games = [
    "Cricket",
    "Football",
    "Tennis",
    "Badmintion",
    "VolleyBall",
    "Handball",
    "Table Tennis",
    "Chess",
    "Throw Ball"
  ];
  public dialog = false;
  public editProfile = false;
  public salary = "";
  mounted() {
    console.log(this.getUserDetails);
    this.assignEditVal();
  }
  assignEditVal() {
    this.Name = this.getUserDetails.userName;
    this.Age = this.getUserDetails.userName;
    this.seletcedGender = this.getUserDetails.user;
    this.seletcedGame = this.getUserDetails.userGame;
    this.Address = this.getUserDetails.userAddress;
    this.currentTeam = this.getUserDetails.userTeam;
    this.selectedCity = this.getUserDetails.userCity;
    this.pincode = this.getUserDetails.userPincode;
    this.gameStandard = this.getUserDetails.userStandard;
    this.currentProfession = this.getUserDetails.userProfession;
    this.salary = this.getUserDetails.userSalary;
  }
  goTODO() {
    this.$router.push("ToDo");
  }
  genderMaleSelected() {
    this.seletcedGender = "Male";
  }
  genderFemaleSelected() {
    this.seletcedGender = "Female";
  }
  submitProfile() {
    const profInfo = {
      userName: this.Name,
      userAge: this.Age,
      userGender: this.seletcedGender,
      userAddress: this.Address,
      userTeam: this.currentTeam,
      userCity: this.selectedCity,
      userPincode: this.pincode,
      userStandard: this.gameStandard,
      userProfession: this.currentProfession
    };
    this.UpdateUserProfile(profInfo);
    this.dialog = true;
    console.log(this.getUserDetails);
    this.editProfile = false;
  }
  EditProfile() {
    this.editProfile = true;
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
.labeltxt {
  display: block;
  font-size: 13px;
  color: #045388;
  font-weight: bold;
  padding-bottom: 5px;
}
.sub-title {
  font-size: 14px;
  margin: 10px 0;
  line-height: normal;
  color: #6f6f6f;
}
</style>