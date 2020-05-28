<template>
<div>
  <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
  <v-toolbar-title>ThoughtFocus</v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-title >TODO</v-toolbar-title>

   <v-toolbar-title @click="goSearch()">Profile</v-toolbar-title>
     

      
    </v-toolbar>
     <v-container>
       <v-card>
      <h4>Add Item</h4>
      <v-layout>
        <v-flex  xs8>
      <v-text-field
            label="Add Item"
            solo
            v-model="addDoItems"
          ></v-text-field>
          </v-flex>
            <v-flex xs4>
          <v-btn class="addbtn" tile color="indigo" @click="addItems()" dark>Add</v-btn>
            </v-flex>
          </v-layout>
           </v-card>
    
     <v-spacer></v-spacer>
       <v-card>
      <h4>ToDo Lists</h4>
      <v-flex v-if="ToDoLists.length == 0">
         <v-img src="../assets/NoRecord.png" aspect-ratio="6.5"></v-img>
      </v-flex>
      <v-flex v-if="ToDoLists.length != 0">
        <v-flex   v-for="(ToDo,index) in ToDoLists" :key="ToDo" xs8>
          <div  v-if="index != activeIndex">
      <v-checkbox
      :v-model="ToDo"   
      :label="ToDo" 
      @change="getCompleted(ToDo,index)"
    ></v-checkbox>
    </div>
    <div  v-if="index == activeIndex">
    <v-text-field
            label="Add Item"
            solo
            v-model="editVal"
          ></v-text-field>
    </div>

    <v-flex  v-if="index != activeIndex">
         <v-btn class="ma-2" tile color="indigo" @click="EditItems(index,ToDo)" dark>Edit</v-btn>
    </v-flex>
     <v-flex v-if="index == activeIndex">
         <v-btn class="ma-2" tile color="indigo" @click="DeleteItems(index)" dark>Delete</v-btn>
         <v-btn class="ma-2" tile color="indigo" @click="SaveItems(index,editVal)" dark>Save</v-btn>
    </v-flex>
          </v-flex>  
        </v-flex>
           </v-card>
    
    <v-card>
      <h4>Completed Lists</h4>
      <v-flex v-if="completedItem.length == 0">
         <v-img src="../assets/NoRecord.png" aspect-ratio="4.5"></v-img>
      </v-flex>
      <v-flex v-if="completedItem.length != 0">
       <v-flex  v-for="(ToDo,index) in completedItem" :key="ToDo" xs8>
        
      <v-flex>
        {{ToDo}}
        
        <v-btn  tile color="indigo" @click="DeleteCompletedItems(index)" dark>Delete</v-btn>
      </v-flex>

       
          </v-flex>  
          </v-flex>
    </v-card>
  </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component ({

})
export default class ToDOApp extends Vue{
  public addDoItems: any;
  public ToDoLists: any[] = [];

  public activeIndex = -1;
  public completedItem: any[]= [];
  public editVal = '';
  addItems() {
    debugger; // eslint-disable-line
    this.ToDoLists.push(this.addDoItems)
    this.addDoItems = '';
  }
  EditItems(index,getEditVal) {
  
  this.activeIndex = index;
  this.editVal =  getEditVal;
  }
  DeleteItems(index) {

  this.ToDoLists.splice(index, 1);
  }
  SaveItems(index,Todo) {
  debugger; // eslint-disable-line
  
  // this.completedItem.push(Todo);
  this.ToDoLists[index] = Todo;
  this.activeIndex = -1;
  }
  getCompleted(event,index) {
    console.log(event);
    this.completedItem.push(event);
     this.ToDoLists.splice(index, 1);
  }
  goSearch() {
  
    this.$router.push('Profile');
  }
  DeleteCompletedItems(index) {
    this.completedItem.splice(index,1)
  }
}
</script>
<style>
.TodoClass{
  margin: 13px;
}
.addbtn {
      margin-top: 0px;
      height: 48px !important;
}
</style>