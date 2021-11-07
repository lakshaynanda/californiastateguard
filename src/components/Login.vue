<template>
  <div class="bodyV">
    <div id="login">
        <!-- <h3 class="text-center text-white pt-5">Login form</h3> -->
        <b-alert v-if="alertT" show variant="danger">Incorrect Email or Password</b-alert>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <p class="colorText">LOGIN</p>
                            <hr>
                            <div class="form-group">
                                <!-- <input type="text" name="username" id="username" class="form-control"> -->
                                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                                    <b-form-input class="form-control" id="inline-form-input-username" placeholder="Email" v-model="name"></b-form-input>
                                </b-input-group>
                            </div>
                            <div class="form-group">
                                <!-- <input type="text" name="password" id="password" class="form-control"> -->
                                <b-form-input class="form-control" v-model="password" type="password" id="text-password" placeholder="Password" aria-describedby="password-help-block"></b-form-input>
                            </div>
                            <br>
                            <b-button variant="primary" class="colorBut" @click="login">Login</b-button>
                            <!-- <p style="cursor: pointer; color: blue" @click="formPage">New User? Click here to fill the Service Member Form</p> -->
                            <div id="register-link" class="" @click="formPage" style="margin-top: 2%; float: ">
                                <a href="#" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="title">
      <h1>Login</h1> 
      <hr class="line">
      <div class="hello">
        <b-alert v-if="alertT" show variant="danger">Incorrect Email or Password</b-alert>
        <b-form>
            <label class="sr-only" for="inline-form-input-username">Username</label>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input id="inline-form-input-username" placeholder="Email" v-model="name"></b-form-input>
            </b-input-group>
            <br>
            <br>
            <b-form-input v-model="password" type="password" id="text-password" placeholder="Password" aria-describedby="password-help-block"></b-form-input>
            <br>
            <b-button variant="primary" @click="login">Login</b-button>
            <br>
            <br>
            <p style="cursor: pointer; color: blue" @click="formPage">New User? Click here to fill the Service Member Form</p>
        </b-form>
        
        </div>
    </div> -->
  </div>
  
</template>

<script>
import mainApi from '../apis/mainApi'
import qs from 'qs'
import axios from 'axios'
// import store from '../store'
// import authApi from '../apis/auth'
export default {
  data() {
      return {
        editable: true,
        name: '',
        password: '',
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        alertT: false
      }
    },
    created() {
      this.autho()
      // this.getUserData()
    },
    methods: {
        
      login() {
        mainApi.checkLogin(this.name, this.password).then((response) => {
          this.$store.commit('STORE_EMAIL', this.name)
          this.$store.commit('STORE_PASS', this.password)
          console.log(response.data)
            if (response.data.totalSize >= 1) {
              if (response.data.records[0].isAdmin__c == true) {
                this.$router.push('Dashboard')
              } else {
                this.$router.push('ProfilePage')
              }
            } else {
                this.alertT = true
            }
        })
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      formPage () {
        this.$router.push('/')
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
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
.bodyV{
  margin: 0;
  padding: 0;
  background-color: #18365D;
  height: 100vh;
}
.align-left{
  text-align: left;
  margin: 0 10% 0 10%;
}
.hello {
  margin: 3% 40% 10% 40%;
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
#nav {
  background-color: #072952;
}
.form-control {
  background-color: #25405e;
  color: white;
  border: none;
}
#login .container #login-row #login-column #login-box {
  margin-top: 250px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #17C1FB;
  background-color: #072952;
  border-radius: 10px;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
.colorText {
  color: #17C1FB;
  font-weight: 40;
  font-size: 20px;
}
.colorBut{
  background-color: #17C1FB;
  width: 80%;
  border-radius: 5px;
}
hr{
  color: #17C1FB;
}
</style>
