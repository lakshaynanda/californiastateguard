<template>
  <div>
    <b-button style="float: right; margin-right: 10%; background-color: #17C1FB" @click="redirectLogin">Logout</b-button>
    <div class="title">
      <h1 style="margin-left: 13%">Member Profile</h1> 
      <hr class="line">
    </div>
    <br>
    <!-- <p v-if="submitted == false" class="align-left">Please review your Information before submitting</p> -->
    <!-- <p>Thank you for submitting your response</p> -->
    <div class="hello">
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">Personal Information</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion1" role="tabpanel">
          <b-card-body>
            <!-- <b-form-group
              label-cols-lg="3"
              label="Personal Information"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            > -->
            <!-- <b-icon v-if="!editable" style="float:right; margin: 13%" class="button" icon="pencil-square" @click="editable = true"></b-icon>
            <b-icon v-if="editable" style="float:right; margin: 13%" class="button" icon="check2" @click="editable = false"></b-icon> -->
              <b-form-group
                label="First Name:"
                label-for="nested-street-1"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <!-- <b-form-input v-if="editable" v-model="form.first_name" id="nested-street-1"></b-form-input> -->
                <p>{{ form.first_name }}</p>
              </b-form-group>
              <b-form-group
                label="Last Name:"
                label-for="nested-street-2"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <!-- <b-form-input v-if="editable" v-model="form.last_name" id="nested-street-2"></b-form-input> -->
                <p>{{ form.last_name }}</p>
              </b-form-group>
              <b-form-group
                label="Email:"
                label-for="nested-street"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <!-- <b-form-input v-if="editable" v-model="form.name" id="nested-street"></b-form-input> -->
                <p>{{ form.name }}</p>
              </b-form-group>
              <!-- <b-form-group
                label="Password:"
                label-for="nested-street-4"
                label-cols-sm="3"
                label-align-sm="right"
              > -->
                <!-- <b-form-input v-if="editable" type="password" v-model="form.password" id="nested-street-4"></b-form-input> -->
                <!-- <p>{{ form.password }}</p> -->
              <!-- </b-form-group> -->
              <b-form-group
                label="Rank:"
                label-for="nested-city"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <!-- <b-form-select v-if="editable" v-model="form.rank" :options="ranks" id="nested-city"></b-form-select> -->
                <!-- <b-form-input  v-model="form.rank" id="nested-city"></b-form-input> -->
                <p>{{ form.rank }}</p>
              </b-form-group>

              <b-form-group
                label="Age:"
                label-for="nested-state"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <!-- <b-form-input v-if="editable" v-model="form.age" id="nested-state"></b-form-input> -->
                <p>{{ form.age }}</p>
              </b-form-group>

              <b-form-group
                label="Current Duty:"
                label-for="nested-country"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <!-- <b-form-select v-if="editable" :options="duties" v-model="form.duty" id="nested-country"></b-form-select> -->
                <p>{{ form.duty }}</p>
              </b-form-group>
            <!-- </b-form-group> -->
          </b-card-body>
      </b-collapse>
        
      </b-card>
      <br>
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">Cyber Analyst I - Skill Ratings</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion2" role="tabpanel">
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
          <b-form-group
            label="Tactics, Techniques and Procedures:"
            label-for="nested-street"
            label-cols-sm="3"
            v-slot="{ ariaDescribedby1 }"
            label-align-sm="right"
          >
            <!-- <b-form-radio-group
              v-if="editable2"
              id="radio-group-1"
              v-model="form.tac"
              :options="options"
              :aria-describedby="ariaDescribedby1"
              name="radio-options"
            ></b-form-radio-group> -->
            <p :aria-describedby="ariaDescribedby1">{{ form.tac }}</p>
          </b-form-group>

          <b-form-group
            label="Ability to perform coordinated actions to LoE"
            label-for="nested-city"
            v-slot="{ ariaDescribedby2 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <!-- <b-form-radio-group
              v-if="editable2"
              id="radio-group-2"
              v-model="form.loe"
              :options="options"
              :aria-describedby="ariaDescribedby2"
              name="radio-options2"
            ></b-form-radio-group> -->
            <p :aria-describedby="ariaDescribedby2">{{ form.loe }}</p>
          </b-form-group>

          <b-form-group
            label="Knowledge of California State's IT Roles and Requirements:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <!-- <b-form-radio-group
              v-if="editable2"
              id="radio-group-3"
              v-model="form.it"
              :options="options"
              :aria-describedby="ariaDescribedby3"
              name="radio-options3"
            ></b-form-radio-group> -->
            <p :aria-describedby="ariaDescribedby3">{{ form.it }}</p>
          </b-form-group>
          </b-card-body>
        </b-collapse>
        <!-- <b-form-group
          label-cols-lg="3"
          label="Skills Level"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        > -->
        
        <!-- </b-form-group> -->
      </b-card>
      <br>
      <!-- <b-button variant="outline-primary" @click="postUserData">Submit</b-button> -->
      <!-- <b-button variant="outline-primary" @click="getUserData">Get Details</b-button> -->
      <!-- <b-card v-if="usersPresent" class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ users }}</pre>
      </b-card>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </div>
  
</template>

<script>
import mainApi from '../apis/mainApi'
import qs from 'qs'
import axios from 'axios'
// import authApi from '../apis/auth'
// import store from '../store'
export default {
  data() {
      return {
        editable: true,
        submitted: false,
        usersPresent: false,
        users: [],
        editable2: true,
        ranks: [
          { text: 'Service Member', value: 'Service Member' },
          { text: 'Command Staff', value: 'Command Staff' },
          { text: 'Training Team', value: 'Training Team'}
        ],
        duties: [
          { text: 'Active', value: 'Service Member' },
          { text: 'Inactive', value: 'Command Staff' }
        ],
        options: [
          { text: 'None', value: 'None' },
          { text: 'Novice', value: 'Novice' },
          { text: 'Proficient', value: 'Proficient'},
          { text: 'Expert', value: 'Expert' }
        ],
        uname: '',
        upass: '',
        form: {
          age: '',
          first_name: '',
          last_name: '',
          name: '',
          password: '',
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
      // this.getUserData()
      this.getUserDataInd()
    },
    mounted() {
    },
    methods: {
      redirectLogin () {
        this.$router.push('/Login')
      },
      autho () {
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
      getUserDataInd () {
        this.uname = this.$store.state.email
        this.upass = this.$store.state.password
        mainApi.getServiceMemberInd(this.uname, this.upass).then((response) => {
          this.form.age = response.data.records[0].Age__c,
          this.form.first_name = response.data.records[0].FirstName__c,
          this.form.last_name = response.data.records[0].LastName__c,
          this.form.name = response.data.records[0].Name,
          this.form.rank = response.data.records[0].Rank__c,
          this.form.duty = response.data.records[0].Duty__c,
          this.form.tac = response.data.records[0].TAC__c,
          this.form.loe = response.data.records[0].LoE__c,
          this.form.it = response.data.records[0].IT__c
        })
      },
      postUserData() {
        const data = {
          age__c: this.form.age,
          firstName__c: this.form.first_name,
          lastName__c: this.form.last_name,
          name: this.form.name,
          password__c: this.form.password,
          rank__c: this.form.rank,
          duty__c: this.form.duty,
          tac__c: this.form.tac,
          loe__c: this.form.loe,
          it__c: this.form.it
        }
        mainApi.postServiceMember(data).then((response) => {
          console.log(response)
          this.submitted = true
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
.button:hover {
  cursor: pointer;
}
select#nested-city.custom-select {
  border: none;
  background-color: #25405e;
}
select#nested-country.custom-select {
  border: none;
  background-color: #25405e;
}
.custom-control-input {
  background-color: #25405e;
}
.align-left{
  text-align: left;
  margin: 0 10% 0 10%;
}
.hello {
  margin: 3% 10% 10% 10%;
}
.card-body {
  background-color: #072952;
  border: #17C1FB;
}
label {
  color: white;
}
.line{
  margin: 0 10% 0 10%;
  color: #17C1FB;
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
.bg {
  background-color: #18365D;
}
.bg-light {
  border: #17C1FB;
}
p {
  color:#17C1FB;
}
.form-control {
  background-color: #25405e;
  color: white;
  border: none;
}
.form-control:focus{
  background-color: #25405e;
  color: white;
  border: none;
}
.btn-info {
  background-color: #17C1FB;
  color: white;
}
.btn-info:hover {
  background-color: #17C1FB;
  color: white;
}
.btn-info:focus {
  background-color: #17C1FB;
  color: white;
}
</style>
