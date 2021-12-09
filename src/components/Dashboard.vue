<template>
  <div class="hello">
    <b-button
      style="float: right; margin-right: 10%; background-color: #17c1fb"
      @click="redirectLogin"
      >Logout</b-button
    >
    <h1 style="margin-bottom: 2%; margin-left: 10%">Admin Dashboard</h1>
    <div class="widgets">
      <b-card-group deck>
        <b-card header-tag="header">
          <template #header>
            <h6 class="mb-0">Count Service Member</h6>
          </template>
          <b-card-text
            ><h1 style="color: white">{{ serviceMem }}</h1></b-card-text
          >
        </b-card>

        <b-card header-tag="header">
          <template #header>
            <h6 class="mb-0">Count Command Staff Members</h6>
          </template>
          <b-card-text
            ><h1 style="color: white">{{ commandStaff }}</h1></b-card-text
          >
        </b-card>

        <b-card header-tag="header">
          <template #header>
            <h6 class="mb-0">Count Training Team Members</h6>
          </template>
          <b-card-text
            ><h1 style="color: white">{{ trainingTeam }}</h1></b-card-text
          >
        </b-card>
      </b-card-group>
    </div>
    <b-card style="margin: 1%">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info"
          >Field Filters</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-2"
        visible
        accordion="my-accordion2"
        role="tabpanel"
      >
        <b-card-body>
          <b-alert v-if="alertT" show variant="danger"
            >Select at least 1 Column</b-alert
          >
          <b-form-input
            required
            id="filter-input"
            v-model="searchP"
            type="search"
            placeholder="Search Column Name"
          ></b-form-input>
          <br />
          <b-form-group v-slot="{ ariaDescribedbyCh }">
            <span class="scroll align-content-start">
              <b-form-checkbox-group
                switches
                stacked
                style="column-count: 3"
                id="checkbox-group-1"
                v-model="selected"
                :options="filteredUsers"
                :aria-describedby="ariaDescribedbyCh"
                name="flavour-1"
                class="mx-auto"
              >
              </b-form-checkbox-group>
            </span>
          </b-form-group>

          <b-button
            style="background-color: #17c1fb; color: white; cursor: pointer"
            @click="onSaveDisplay()"
            >Save</b-button
          >
          <!-- <b-button @click="insertAllCols">Select All</b-button>
          <b-button @click="deselectAll">Deselect All</b-button> -->
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card style="margin: 1%">
      <b-form inline style="margin: 1%">
        <label class="mr-sm-2" for="inline-form-input-name">Name = </label>
        <b-form-input
          required
          style="border: 0.5px solid white"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Enter name"
          v-model="searchName"
        ></b-form-input>
        <b-button
          class="bbut"
          style="background-color: #17c1fb"
          variant="primary"
          @click="getServiceMemberInd"
          >Search By Name</b-button
        >
        <!-- <b-button class="bbut" style="background-color: #17C1FB" variant="primary" @click="getServiceMemberInd">Search By Name</b-button> -->
        <!-- <b-button v-if="!con1" class="bbut" variant="success" @click="con1 = !con1">AND</b-button>
            <b-button v-if="con1" class="bbut" variant="info" @click="con1 = !con1">OR</b-button> -->
        <label class="mr-sm-2" for="inline-form-custom-select-pref"
          >Rank =
        </label>
        <b-form-select
          style="color: white"
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="['Service Member', 'Training Team', 'Command Staff']"
          v-model="rankVal"
          :value="null"
        ></b-form-select>
        <!-- <v-select v-model="rankVal" :options="['Service Member', 'Training Team', 'Command Staff']"></v-select> -->
        <!-- <b-button class="bbut" style="background-color: #17C1FB" variant="primary" @click="getRank">Search By Rank</b-button> -->
        <b-button
          v-if="!con2"
          class="bbut"
          variant="success"
          @click="con2 = !con2"
          >AND</b-button
        >
        <b-button v-if="con2" class="bbut" variant="info" @click="con2 = !con2"
          >OR</b-button
        >
        <label class="mr-sm-2" for="inline-form-custom-select-pref"
          >Skill =
        </label>
        <!-- <v-select label="label" :value="skillChosen.label" :options="dropSelect" v-model="skillChosen.label"></v-select> -->
        <b-form-select
          style="color: white"
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="dropSelect"
          v-model="skillChosen"
          :value="null"
        ></b-form-select>
        =
        <!-- <v-select v-model="skillChosen" :options="['loe__c', 'tac__c', 'it__c']"></v-select> = -->
        <b-form-select
          v-if="skillChosen.includes(`Certifications`)"
          style="color: white"
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="['NA', 'Completed', 'InProgress', 'Planned']"
          v-model="skillVal"
          :value="null"
        ></b-form-select>
        <b-form-select
          v-else
          style="color: white"
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="['None', 'Novice', 'Proficient', 'Expert']"
          v-model="skillVal"
          :value="null"
        ></b-form-select>
        <!-- <v-select v-model="skillVal" :options="['None', 'Novice', 'Proficient', 'Expert']"></v-select> -->
        <b-button
          class="bbut"
          style="background-color: #17c1fb"
          variant="primary"
          @click="getDataFiltered"
          >Search</b-button
        >
        <b-button class="bbut" variant="danger" @click="getUserData"
          >Clear</b-button
        >
      </b-form>
    </b-card>
    <b-card
      class="mt-3"
      style="color: white; font-weight: 80"
      header="Form Data Result"
    >
      <!-- <pre v-if="usersPresent" class="m-0">Name: {{ user.Name }} Age:{{ user.Age__c }} Rank: {{ user.GradeRank__c }} Duty: {{ user.Current_Duty_Assignment__c }} TAC: {{ user.TAC__c }} LOE:{{ user.LoE__c }} IT:{{ user.IT__c }}</pre>
        <pre v-else class="m-0">Service Member Does not Exist</pre> -->
      <!-- <div style="width: 35%; height: 50%; display: inline-block; float: left;background: #19365D">
          <piechart :fir = "fir" :key="check"></piechart>
        </div>
        <div style="width: 35%; height: 50%;display: inline-block; background: #19365D">
          <donut :fir = "fir" :key="check"></donut>
        </div> -->

      <span>
        <download-csv
          style="margin: 1%; float: right; margin: 1%; cursor: pointer"
          :data="users"
        >
          <!-- <img src="../assets/csv.png"> -->
          <b-button style="color: white; background: green"
            >Export as CSV</b-button
          >
        </download-csv>
        <b-col lg="6" class="my-1">
          <b-form-group
            label="Search"
            label-for="filter-input"
            label-cols-sm="1"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                required
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''"
                  >Clear</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <span class="tableScroll">
          <b-table
            :filter="filter"
            stickyColumn
            style="color: white"
            :items="users"
            :fields="fields"
          >
            <template v-slot:cell()="data">
              <span v-b-tooltip.hover :title=data.value>{{ data.value}}</span>
            </template>
          </b-table>
          
        </span>
      </span>
    </b-card>
  </div>
</template>

<script>
import mainApi from "../apis/mainApi";
import qs from "qs";
import axios from "axios";
// import piechart from '../components/piechart.vue'
// import donut from '../components/donut.vue'
// import authApi from '../apis/auth'
export default {
  components: {
    // piechart,
    // donut
  },
  data() {
    return {
      dropSelect: [],
      selected: ["FirstName__c", "LastName__c", "GradeRank__c"],
      alertT: false,
      searchP: "",
      filter: "",
      fir: [
        {
          country: "",
          litres: "",
        },
        {
          country: "",
          litres: "",
        },
        {
          country: "",
          litres: "",
        },
      ],
      ser: {
        country: "",
        litres: "",
      },
      com: {
        country: "",
        litres: "",
      },
      tra: {
        country: "",
        litres: "",
      },
      isActive: true,
      check: 0,
      editable: true,
      usersPresent: false,
      users: [],
      reren: 0,
      serviceMem: "",
      con1: true,
      condition1: "",
      condition2: "",
      con2: true,
      commandStaff: "",
      trainingTeam: "",
      user: [],
      searchName: "",
      editable2: true,
      skillChosen: "",
      skillVal: "",
      rankVal: "",
      // obj: {
      //   text: '',
      //   value: ''
      // },
      // fields: ['FirstName__c', 'LastName__c', 'GradeRank__c','Current_Duty_Assignment__c','LoE__c' , 'IT__c', 'TAC__c'],
      fields: [],
      ranks: [
        { text: "Name", value: "Name" },
        { text: "Command Staff", value: "Command Staff" },
        { text: "Training Team", value: "Training Team" },
      ],
      options: [
        { text: "None", value: "None" },
        { text: "Novice", value: "Novice" },
        { text: "Proficient", value: "Proficient" },
        { text: "Expert", value: "Expert" },
      ],
      columnNames: [],
      form: {
        age: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        name: "",
        rank: "",
        duty: "",
        tac: "",
        loe: "",
        it: "",
      },
      show: true,
    };
  },
  created() {
    this.autho();
    this.getUserData();
    this.countsGet();
  },
  mounted() {
    this.getColumns();
    this.onSaveDisplay();
    mainApi.getCountsService().then((response) => {
      this.fir[0].country = "Service Member";
      this.fir[0].litres = response.data.totalSize;
      this.serviceMem = response.data.totalSize;
    });
    mainApi.getCountsCommand().then((response) => {
      this.fir[1].country = "Command Staff";
      this.fir[1].litres = response.data.totalSize;
      this.commandStaff = response.data.totalSize;
    });
    mainApi.getCountsTraining().then((response) => {
      this.fir[2].country = "Training Team";
      this.fir[2].litres = response.data.totalSize;
      this.trainingTeam = response.data.totalSize;
    });
  },
  computed: {
    filteredUsers() {
      return this.columnNames.filter((us) => {
        // console.log(us.text);
        return us.text.toLowerCase().match(this.searchP.toLowerCase());
      });
    },
  },
  methods: {
    insertAllCols() {
      for(var i = 0; i < this.columnNames.length; i++) {
        this.selected.push(this.columnNames[i].name)
      }
      console.log(this.selected)
    },
    deselectAll () {
      this.selected = ["FirstName__c", "LastName__c", "GradeRank__c"]
    },
    getColumns() {
      mainApi.getColumnNames().then((response) => {
        console.log(response.data.fields)
        for (var i = 12; i < response.data.fields.length; i++) {
          if (response.data.fields[i].name != "Password__c" && response.data.fields[i].name != "Age__c" && response.data.fields[i].name != "IT__c" && response.data.fields[i].name != "LoE__c" && response.data.fields[i].name != "TAC__c") {
            var obj = {};
            obj.text = response.data.fields[i].inlineHelpText != null ? response.data.fields[i].inlineHelpText : response.data.fields[i].label
              .replaceAll("_", " ")
              // .slice(0, -2);
            obj.value = response.data.fields[i].name;
            obj.label = response.data.fields[i].label;
            this.columnNames.push(obj);
            if(response.data.fields[i].name != "FirstName__c" && response.data.fields[i].name != "LastName__c" && response.data.fields[i].name != "MemberId__c" && response.data.fields[i].name != "GradeRank__c" && response.data.fields[i].name != "isAdmin__c") {
              var obj1 = {};
              obj1.text = response.data.fields[i].inlineHelpText != null ? response.data.fields[i].inlineHelpText : response.data.fields[i].label
                .replaceAll("_", " ")
                // .slice(0, -2);
              obj1.value = response.data.fields[i].name;
              obj1.label = response.data.fields[i].label;
              this.dropSelect.push(obj1)
            }
          }
        }
      });
    },
    onSaveDisplay() {
      if (this.selected.length == 0) {
        this.alertT = true;
      } else {
        this.fields = this.selected;
        mainApi.getServiceMembers(this.selected).then((response) => {
          this.users = response.data.records;
        });
      }
    },
    forceRerender() {
      this.check += 1;
    },
    redirectLogin() {
      this.$router.push("/");
    },
    getDataFiltered() {
      console.log(this.skillChosen);
      // if (this.con1 == true) {
      //   this.condition1 = 'OR'
      // } else {
      //   this.condition1 = 'AND'
      // }
      if (this.con2 == true) {
        this.condition2 = "OR";
      } else {
        this.condition2 = "AND";
      }
      mainApi
        .getFilteredData(
          this.skillChosen,
          this.skillVal,
          this.rankVal,
          this.condition2
        )
        .then((response) => {
          this.users = response.data.records;
        });
    },
    autho() {
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
        method: "post",
        url: "https://csg-cyber.my.salesforce.com/services/oauth2/token",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: qs.stringify({
          grant_type: "password",
          client_id:
            "3MVG9Nk1FpUrSQHeLkBUh5k6Rv1yBzQBJrAMx9me7xnT4Zm2tBojknR8ob.sWc8HS18HiLuKaz67J8b7_x2SD",
          client_secret:
            "F8C3B6B6BF714D4F264D5F7545BDF9746F909843D894CF6DFB87A0E783CB491E",
          username: "csgprotect@gmail.com",
          password: "21SC4sansMnR88Ttx8knYJ4j2h02Hc3Eg",
        }),
      }).then((response) => {
        localStorage.setItem("user-token", response.data.access_token);
        console.log(localStorage.getItem("user-token"));
      });
    },
    countsGet() {
      mainApi.getCountsService().then((response) => {
        this.fir[0].country = "Service Member";
        this.fir[0].litres = response.data.totalSize;
        this.serviceMem = response.data.totalSize;
      });
      mainApi.getCountsCommand().then((response) => {
        this.fir[1].country = "Command Staff";
        this.fir[1].litres = response.data.totalSize;
        this.commandStaff = response.data.totalSize;
      });
      mainApi.getCountsTraining().then((response) => {
        this.fir[2].country = "Training Team";
        this.fir[2].litres = response.data.totalSize;
        this.trainingTeam = response.data.totalSize;
      });
      this.rerender();
    },
    getServiceMemberInd() {
      mainApi.getServiceMemberByName(this.searchName).then((response) => {
        this.usersPresent = true;
        this.users = response.data.records;
      });
    },
    getRank() {
      mainApi.getRankList(this.rankVal).then((response) => {
        this.usersPresent = true;
        this.users = response.data.records;
      });
    },
    getSkill() {
      mainApi
        .getSkillsList(this.skillChosen, this.skillVal)
        .then((response) => {
          this.usersPresent = true;
          this.users = response.data.records;
        });
    },
    getUserData() {
      // this.fields = ['FirstName__c', 'LastName__c','GradeRank__c']
      // this.selected = this.fields
      mainApi.getServiceMembers(this.selected).then((response) => {
        this.usersPresent = true;
        this.users = response.data.records;
        this.searchName = "";
        this.rankVal = "";
        this.skillChosen = "";
        this.skillVal = "";
      });
    },
    postUserData() {
      const data = {
        // age__c: this.form.age,
        name: this.form.name,
        GradeRank__c: this.form.rank,
        Current_Duty_Assignment__c: this.form.duty,
        tac__c: this.form.tac,
        loe__c: this.form.loe,
        it__c: this.form.it,
      };
      mainApi.postServiceMember(data).then((response) => {
        console.log(response);
      });
    },
    showN() {
      console.log(this.name);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.age = "";
      this.form.name = "";
      this.form.duty = "";
      this.form.rank = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bbut {
  margin: 0.5%;
}
header.card-header {
  background-color: #19365d;
  border: 1px solid #17c1fb;
}
.custom-control-label::before,
.custom-file-label,
.custom-select {
  max-width: 12%;
  background-color: #2c3e50;
  width: 12% !important;
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tableScroll {
  overflow: auto;
  width: 100%;
  float: left;
  white-space: nowrap;
}
.card {
  border: none;
}

div.card-body {
  background-color: #19365d;
}

.card-header:first-child {
  background-color: #19365d;
  border: 1px solid #17c1fb;
}
.scroll {
  height: 440px;
  width: 100%;
  overflow: auto;
  float: left;
  margin-left: 2%;
  text-align: left;
}
.hello {
  margin: 3% 10% 10% 10%;
  background-color: #072952;
  padding: 30px;
  border: 1px solid #17c1fb;
  border-radius: 10px;
}
.button:hover {
  cursor: pointer;
}
.inputBox {
  width: 70%;
}
.align-left {
  text-align: left;
  margin: 0 10% 0 10%;
}
.hello {
  margin: 3% 10% 10% 10%;
}
tbody {
  color: white;
}
.line {
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
tr {
  color: white;
}
tr:hover {
  color: white;
}
#inline-form-input-name {
  background-color: #26405e;
  border: none;
  color: white;
}
div.v-select.vs--single.vs--searchable {
  background: #27405e;
  width: 130px;
  color: white;
}
div.v-select.vs--single.vs--searchable.vs__selected-options {
  background: #27405e;
  width: 110px;
  color: white;
}
svg.vs__open-indicator {
  fill: white;
}
.vs__single .vs__selected {
  color: white;
}
path {
  color: white;
}
.vs__actions {
  fill: white;
}
.vs__selected {
  color: white;
}
.custom-control-label[data-v-aae30ed8]::before,
.custom-file-label[data-v-aae30ed8],
.custom-select[data-v-aae30ed8] {
  color: white !important;
  border: none;
  background-color: #26405e;
  width: 105px;
}
.custom-control-label[data-v-fc753a6a]:before,
.custom-file-label[data-v-fc753a6a],
.custom-select[data-v-fc753a6a] {
  color: white;
  border: none;
}
</style>

