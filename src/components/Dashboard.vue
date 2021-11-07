<template>
  <div class="hello">
      <b-button style="float: right; margin-right: 10%; background-color: #17C1FB" @click="redirectLogin">Logout</b-button>
      <h1 style="margin-bottom: 2%; margin-left: 10%">Admin Dashboard</h1>
      <div class="widgets">
          <b-card-group deck>
            <b-card header-tag="header">
            <template #header>
                <h6 class="mb-0">Count Service Member</h6>
            </template>
            <b-card-text><h1 style="color: white">{{ serviceMem }}</h1></b-card-text>
            </b-card>

            <b-card header-tag="header">
            <template #header>
                <h6 class="mb-0">Count Command Staff Members</h6>
            </template>
            <b-card-text><h1 style="color: white">{{ commandStaff }}</h1></b-card-text>
            </b-card>

            <b-card header-tag="header">
            <template #header>
                <h6 class="mb-0">Count Training Team Members</h6>
            </template>
            <b-card-text><h1 style="color: white">{{ trainingTeam }}</h1></b-card-text>
            </b-card>
            
        </b-card-group>
      </div>
      <b-card style="margin: 1%">
        <b-form inline>
            <label class="mr-sm-2" for="inline-form-input-name">Name = </label>
            <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Enter name"
            v-model="searchName"
            ></b-form-input>
            <b-button class="bbut" style="background-color: #17C1FB" variant="primary" @click="getServiceMemberInd">Search By Name</b-button>
            <!-- <b-button v-if="!con1" class="bbut" variant="success" @click="con1 = !con1">AND</b-button>
            <b-button v-if="con1" class="bbut" variant="info" @click="con1 = !con1">OR</b-button> -->
            <label class="mr-sm-2" for="inline-form-custom-select-pref">Rank = </label>
            <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['Service Member', 'Training Team', 'Command Staff']"
            v-model="rankVal"
            :value="null"
            ></b-form-select>
            <!-- <v-select v-model="rankVal" :options="['Service Member', 'Training Team', 'Command Staff']"></v-select> -->
            <b-button class="bbut" style="background-color: #17C1FB" variant="primary" @click="getRank">Search By Rank</b-button>
            <!-- <b-button v-if="!con2" class="bbut" variant="success" @click="con2 = !con2">AND</b-button>
            <b-button v-if="con2" class="bbut" variant="info" @click="con2 = !con2">OR</b-button> -->
            <label class="mr-sm-2" for="inline-form-custom-select-pref">Skill = </label>
            <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['loe__c', 'tac__c', 'it__c']"
            v-model="skillChosen"
            :value="null"
            ></b-form-select> = 
            <!-- <v-select v-model="skillChosen" :options="['loe__c', 'tac__c', 'it__c']"></v-select> = -->
            <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="['None', 'Novice', 'Proficient', 'Expert']"
            v-model="skillVal"
            :value="null"
            ></b-form-select>
            <!-- <v-select v-model="skillVal" :options="['None', 'Novice', 'Proficient', 'Expert']"></v-select> -->
            <b-button class="bbut" style="background-color: #17C1FB" variant="primary" @click="getSkill">Search By Skill</b-button>
            <b-button class="bbut" variant="danger" @click="getUserData">Reset</b-button>
        </b-form>
      </b-card>
      
      <b-card class="mt-3" style="color: white; font-weight: 80" header="Form Data Result">
        <!-- <pre v-if="usersPresent" class="m-0">Name: {{ user.Name }} Age:{{ user.Age__c }} Rank: {{ user.Rank__c }} Duty: {{ user.Duty__c }} TAC: {{ user.TAC__c }} LOE:{{ user.LoE__c }} IT:{{ user.IT__c }}</pre>
        <pre v-else class="m-0">Service Member Does not Exist</pre> -->
        <download-csv
            style="float:right; margin: 1%; cursor: pointer"
            :data = "users">
            <!-- <img src="../assets/csv.png"> -->
            <b-button style="color: white; background: green">Export as CSV</b-button>
        </download-csv>
        <b-table style="color: white" :items="users" :fields="fields"></b-table>
      </b-card>
  </div>
</template>

<script>
import mainApi from '../apis/mainApi'
import qs from 'qs'
import axios from 'axios'
// import authApi from '../apis/auth'
export default {
  data() {
      return {
        editable: true,
        usersPresent: false,
        users: [],
        serviceMem: '',
        con1: true,
        condition1: '',
        condition2: '',
        con2: true,
        commandStaff: '',
        trainingTeam: '',
        user: [],
        searchName: '',
        editable2: true,
        skillChosen: '',
        skillVal: '',
        rankVal: '',
        fields: ['FirstName__c', 'LastName__c','Age__c', 'Rank__c','Duty__c','LoE__c' , 'IT__c', 'TAC__c'],
        ranks: [
          { text: 'Name', value: 'Name' },
          { text: 'Command Staff', value: 'Command Staff' },
          { text: 'Training Team', value: 'Training Team'}
        ],
        options: [
          { text: 'None', value: 'None' },
          { text: 'Novice', value: 'Novice' },
          { text: 'Proficient', value: 'Proficient'},
          { text: 'Expert', value: 'Expert' }
        ],
        form: {
          age: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          name: '',
          rank: '',
          duty: '',
          tac: '',
          loe: '',
          it: ''
        },
        show: true
      }
    },
    created() {
      this.autho()
      this.getUserData()
      this.countsGet()
    },
    methods: {
      redirectLogin () {
        this.$router.push('/Login')
      },
      getDataFiltered () {
        if (this.con1 == true) {
          this.condition1 = 'OR'
        } else {
          this.condition1 = 'AND'
        }
        if (this.con2 == true) {
          this.condition2 = 'OR'
        } else {
          this.condition2 = 'AND'
        }
        mainApi.getFilteredData(this.skillChosen, this.skillVal, this.rankVal,this.searchName, this.condition1, this.condition2).then((response) => {
          console.log(response)
        })
      },
      autho () {
        // const data = {
        //   grant_type: 'password',
        //   client_id: '3MVG9Nk1FpUrSQHeLkBUh5k6Rv1yBzQBJrAMx9me7xnT4Zm2tBojknR8ob.sWc8HS18HiLuKaz67J8b7_x2SD',
        //   client_secret: 'F8C3B6B6BF714D4F264D5F7545BDF9746F909843D894CF6DFB87A0E783CB491E',
        //   username: 'csgprotect@gmail.com',
        //   password: '21SC4sansrUWOMqRjbF2JQ4TR7kWGxHv3I'
        // }
        // authApi.getAuth(data.password, data.grant_type, data.client_id, data.client_secret, data.username).then((response) => {
        //   localStorage.setItem('user-token', response.access_token)
        //   console.log(localStorage.getItem('user-token'))
        // })
        axios({
          method: 'post',
          url: 'https://csg-cyber.my.salesforce.com/services/oauth2/token',
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          data: qs.stringify({
            grant_type: 'password',
            client_id: '3MVG9Nk1FpUrSQHeLkBUh5k6Rv1yBzQBJrAMx9me7xnT4Zm2tBojknR8ob.sWc8HS18HiLuKaz67J8b7_x2SD',
            client_secret: 'F8C3B6B6BF714D4F264D5F7545BDF9746F909843D894CF6DFB87A0E783CB491E',
            username: 'csgprotect@gmail.com',
            password: '21SC4sansrUWOMqRjbF2JQ4TR7kWGxHv3I'
          })
        })
        .then((response) => {
          localStorage.setItem('user-token', response.data.access_token)
          console.log(localStorage.getItem('user-token'))
        });
      },
      countsGet() {
        mainApi.getCountsService().then((response) => {
            this.serviceMem = response.data.totalSize
        })
        mainApi.getCountsCommand().then((response) => {
            this.commandStaff = response.data.totalSize
        })
        mainApi.getCountsTraining().then((response) => {
            this.trainingTeam = response.data.totalSize
        })
      },
      getServiceMemberInd() {
        mainApi.getServiceMemberByName(this.searchName).then((response) => {
          this.usersPresent = true
          this.users = response.data.records
        })
      },
      getRank () {
        mainApi.getRankList(this.rankVal).then((response) => {
            this.usersPresent = true
            this.users = response.data.records
        })
      },
      getSkill () {
        mainApi.getSkillsList(this.skillChosen, this.skillVal).then((response) => {
            this.usersPresent = true
            this.users = response.data.records
        })
      },
      getUserData () {
        mainApi.getServiceMembers().then((response) => {
          this.usersPresent = true
          this.users = response.data.records
        })
      },
      postUserData() {
        const data = {
          age__c: this.form.age,
          name: this.form.name,
          rank__c: this.form.rank,
          duty__c: this.form.duty,
          tac__c: this.form.tac,
          loe__c: this.form.loe,
          it__c: this.form.it
        }
        mainApi.postServiceMember(data).then((response) => {
          console.log(response)
        })
      },
      showN () {
        console.log(this.name)
      },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.age = ''
        this.form.name = ''
        this.form.duty = ''
        this.form.rank = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bbut {
    margin: 1%;
}
header.card-header{
  background-color: #19365D;
  border:1px solid #17C1FB;
}
.custom-control-label::before, .custom-file-label, .custom-select {
  background-color: #2c3e50;
}
.card {
  border: none;
}

div.card-body{
  background-color: #19365D;
}

.card-header:first-child {
  background-color: #19365D;
  border: 1px solid #17C1FB;
}

.hello {
  margin: 3% 10% 10% 10%;
  background-color: #072952;
  padding: 30px;
  border: 1px solid #17C1FB;
  border-radius: 10px;
}
.button:hover {
  cursor: pointer;
}
.inputBox {
    width: 70%;
}
.align-left{
  text-align: left;
  margin: 0 10% 0 10%;
}
.hello {
  margin: 3% 10% 10% 10%;
}
tbody{
  color: white;
}
.line{
  margin: 0 10% 0 10%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
tr{
  color: white;
}
tr:hover {
  color: white;
}
#inline-form-input-name {
  background-color: #26405E;
  border: none;
  color: white;
}
div.v-select.vs--single.vs--searchable{
  background: #27405E;
  width: 130px;
  color: white;
}
div.v-select.vs--single.vs--searchable.vs__selected-options{
  background: #27405E;
  width: 110px;
  color: white;
}
svg.vs__open-indicator {
  fill: white;
}
.vs__single .vs__selected{
  color: white;
}
path{
  color: white;
}
.vs__actions{
  fill: white;
}
.vs__selected {
  color: white;
}
.custom-control-label[data-v-aae30ed8]::before, .custom-file-label[data-v-aae30ed8], .custom-select[data-v-aae30ed8] {
  color: white;
  border: none;
  background-color: #26405E;
  width: 105px;
}
</style>

