<template>
  <div class="bodyV">
    <div id="login">
      <!-- <h3 class="text-center text-white pt-5">Login form</h3> -->
      <b-alert v-if="alertT" show variant="danger"
        >Passwords dont match</b-alert
      >
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action="" method="post">
                <p class="colorText">Reset Password</p>
                <hr />
                <div class="form-group">
                  <!-- <input type="text" name="username" id="username" class="form-control"> -->
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input
                      required
                      class="form-control"
                      id="inline-form-input-username"
                      placeholder="Email"
                      v-model="name"
                    ></b-form-input>
                  </b-input-group>
                </div>
                <div class="form-group" v-if="available">
                  <!-- <input type="text" name="password" id="password" class="form-control"> -->
                  <b-form-input
                    required
                    class="form-control"
                    v-model="password"
                    type="password"
                    id="text-password"
                    placeholder="Password"
                    aria-describedby="password-help-block"
                  ></b-form-input>
                  <br>
                  <b-form-input
                    required
                    class="form-control"
                    v-model="confirmpassword"
                    type="password"
                    id="text-password"
                    placeholder="Confirm Password"
                    aria-describedby="password-help-block"
                  ></b-form-input>
                </div>
                <b-button v-if="!available" variant="primary" class="colorBut" @click="findUser"
                  >Find</b-button
                >
                <b-button v-if="available" variant="primary" class="colorBut" @click="resetPass"
                  >Reset</b-button
                >
                <!-- <p style="cursor: pointer; color: blue" @click="formPage">New User? Click here to fill the Service Member Form</p> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainApi from "../apis/mainApi";
import qs from "qs";
import axios from "axios";
// import store from '../store'
// import authApi from '../apis/auth'
export default {
  data() {
    return {
      editable: true,
      user: [],
      name: "",
      password: "",
      confirmpassword: "",
      available: false,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      alertT: false,
    };
  },
  mounted() {
    this.autho();
  },
  created() {
    this.autho();
    // window.location.reload()
    // this.onloadfunc()
    // this.getUserData()
  },
  methods: {
    onloadfunc() {
      if (window.localStorage) {
        //check if reloaded once already
        if (!localStorage.getItem("firstLoad")) {
          //if not reloaded once, then set firstload to true
          localStorage.setItem("firstLoad", true);
          //reload the webpage using reload() method
          window.location.reload();
        } else localStorage.removeItem("firstLoad");
      }
    },
    autho() {
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
    login() {
      mainApi.checkLogin(this.name, this.password).then((response) => {
        this.$store.commit("STORE_EMAIL", this.name);
        this.$store.commit("STORE_PASS", this.password);
        console.log(response.data);
        if (response.data.totalSize >= 1) {
          if (response.data.records[0].isAdmin__c == true) {
            this.$router.push("Dashboard");
          } else {
            this.$router.push("ProfilePage");
          }
        } else {
          this.alertT = true;
        }
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    formPage() {
      this.$router.push("/form");
    },
    findUser() {
      mainApi.getSMEmail(this.name).then((response) => {
          this.user = response.data.records
          console.log(this.user)
          this.available = true
      })
    },
    resetPass () {
      if (this.password == this.confirmpassword) {
        console.log(this.user[0].Staff_Designation__c)
      if (this.user[0].Staff_Designation__c == "Service Member") {
        const data = {
          //once you have create a new column inside salesforce add its column name here and set value of the question variable from top to it, refer to eg: newcolumn__c : this.form.q120
          Staff_Designation__c: this.user[0].Staff_Designation__c,
          Current_Duty_Assignment__c: this.user[0].Current_Duty_Assignment__c,
          K_of_TTPs_used_by_attackers__c: this.user[0].K_of_TTPs_used_by_attackers__c,
          A_to_do_actions_related_to_approved_LoE__c:
            this.user[0].A_to_do_actions_related_to_approved_LoE__c,
          A_to_develop_perform_QA_deliver_LoE__c:
            this.user[0].A_to_develop_perform_QA_deliver_LoE__c,
          K_of_Network_Operating_Systems__c:
            this.user[0].K_of_Network_Operating_Systems__c,
          K_o_CA_info_tech_roles_reqs_and_org__c:
            this.user[0].K_o_CA_info_tech_roles_reqs_and_org__c,
          K_of_server_based_applications__c:
            this.user[0].K_of_server_based_applications__c,
          K_of_computer_networking_protocols__c:
            this.user[0].K_of_computer_networking_protocols__c,
          K_of_network_security_related_concepts__c:
            this.user[0].K_of_network_security_related_concepts__c,
          A_to_effectively_communicate__c:
            this.user[0].A_to_effectively_communicate__c,
          A_to_provide_briefings_with_CMD_staff__c:
            this.user[0].A_to_provide_briefings_with_CMD_staff__c,
          A_to_deploy_troubleshoot_analyse_CND_too__c:
            this.user[0].A_to_deploy_troubleshoot_analyse_CND_too__c,
          E_w_system_admin_or_hardening_techniques__c:
            this.user[0].E_w_system_admin_or_hardening_techniques__c,
          K_of_common_network_tools__c: this.user[0].K_of_common_network_tools__c,
          E_using_CND_vuln_tools__c: this.user[0].E_using_CND_vuln_tools__c,
          S_in_vulnerability_scans__c: this.user[0].S_in_vulnerability_scans__c,
          S_in_collecting_system_policy_artifacts__c:
            this.user[0].S_in_collecting_system_policy_artifacts__c,
          K_of_CND_policies_procedures_and_regs__c:
            this.user[0].K_of_CND_policies_procedures_and_regs__c,
          E_in_TTPs_pen_test_and_Red_Team__c:
            this.user[0].E_in_TTPs_pen_test_and_Red_Team__c,
          A_to_direct_mentor_guide__c: this.user[0].A_to_direct_mentor_guide__c,
          E_in_Defense_In_Depth__c: this.user[0].E_in_Defense_In_Depth__c,
          K_of_network_protocols__c: this.user[0].K_of_network_protocols__c,
          K_of_access_control_and_application__c:
            this.user[0].K_of_access_control_and_application__c,
          K_of_network_traffic_flows_TCP_IP_OSI__c:
            this.user[0].K_of_network_traffic_flows_TCP_IP_OSI__c,
          E_in_use_of_network_vuln_tools__c:
            this.user[0].E_in_use_of_network_vuln_tools__c,
          E_in_using_protocol_analyzers__c:
            this.user[0].E_in_using_protocol_analyzers__c,
          E_in_equip_inventory_readiness_data_san__c:
            this.user[0].E_in_equip_inventory_readiness_data_san__c,
          A_to_assess_Defense_in_Depth__c:
            this.user[0].A_to_assess_Defense_in_Depth__c,
          A_to_review_network_topologies__c:
            this.user[0].A_to_review_network_topologies__c,
          A_to_perform_network_mapping__c:
            this.user[0].A_to_perform_network_mapping__c,
          E_in_providing_Tier_II_analysis__c:
            this.user[0].E_in_providing_Tier_II_analysis__c,
          A_to_review_detected_malicious_activity__c:
            this.user[0].A_to_review_detected_malicious_activity__c,
          Knowledge_of_VPN_security__c: this.user[0].Knowledge_of_VPN_security__c,
          K_of_information_security_standards__c: this.user[0].K_of_information_security_standards__c,
          K_of_operational_cybersecurity__c: this.user[0].K_of_operational_cybersecurity__c,
          E_in_management_of_IT_security_and_risk__c:
            this.user[0].E_in_management_of_IT_security_and_risk__c,
          E_in_internal_and_external_audits_exams__c:
            this.user[0].E_in_internal_and_external_audits_exams__c,
          E_in_policies_procedures_and_standards__c:
            this.user[0].E_in_policies_procedures_and_standards__c,
          K0004__c: this.user[0].K0004__c,
          K0003__c: this.user[0].K0003__c,
          K0006__c: this.user[0].K0006__c,
          K0015__c: this.user[0].K0015__c,
          K0018__c: this.user[0].K0018__c,
          K0019__c: this.user[0].K0019__c,
          K0026__c: this.user[0].K0026__c,
          K0040__c: this.user[0].K0040__c,
          K0041__c: this.user[0].K0041__c,
          K0042__c: this.user[0].K0042__c,
          K0044__c: this.user[0].K0044__c,
          K0046__c: this.user[0].K0046__c,
          K0049__c: this.user[0].K0049__c,
          K0059__c: this.user[0].K0059__c,
          K0070__c: this.user[0].K0070__c,
          K0093__c: this.user[0].K0093__c,
          K0107__c: this.user[0].K0107__c,
          K0116__c: this.user[0].K0116__c,
          K0142__c: this.user[0].K0142__c,
          K0157__c: this.user[0].K0157__c,
          K0160__c: this.user[0].K0160__c,
          K0161__c: this.user[0].K0161__c,
          K0162__c: this.user[0].K0162__c,
          K0177__c: this.user[0].K0177__c,
          K0180__c: this.user[0].K0180__c,
          K0190__c: this.user[0].K0190__c,
          K0191__c: this.user[0].K0191__c,
          K0192__c: this.user[0].K0192__c,
          K0203__c: this.user[0].K0203__c,
          K0259__c: this.user[0].K0259__c,
          K0287__c: this.user[0].K0287__c,
          K0322__c: this.user[0].K0322__c,
          K0624__c: this.user[0].K0624__c,
          S0020__c: this.user[0].S0020__c,
          S0169__c: this.user[0].S0169__c,
          S0365__c: this.user[0].S0365__c,
          A0066__c: this.user[0].A0066__c,
          A0121__c: this.user[0].A0121__c,
          A0123__c: this.user[0].A0123__c,
          // age__c: this.user[0].age,
          Scripting_and_Programming_Tools_Bash__c: this.user[0].Scripting_and_Programming_Tools_Bash__c,
          Scripting_and_Programming_Tools_C__c: this.user[0].Scripting_and_Programming_Tools_C__c,
          Scripting_and_Programming_Tools_C_1__c: this.user[0].Scripting_and_Programming_Tools_C_1__c,
          Scripting_and_Programming_Tools_Java__c: this.user[0].Scripting_and_Programming_Tools_Java__c,
          Scripting_Programming_Tools_Javascript__c: this.user[0].Scripting_Programming_Tools_Javascript__c,
          Scripting_and_Programming_Tools_php__c: this.user[0].Scripting_and_Programming_Tools_php__c,
          Scripting_Programming_Tools_PowerShell__c: this.user[0].Scripting_Programming_Tools_PowerShell__c,
          Scripting_and_Programming_Tools_Python__c: this.user[0].Scripting_and_Programming_Tools_Python__c,
          Endpoint_tools_Cisco__c: this.user[0].Endpoint_tools_Cisco__c,
          Endpoint_tools_CrowdStrike__c: this.user[0].Endpoint_tools_CrowdStrike__c,
          Endpoint_tools_FireEye__c: this.user[0].Endpoint_tools_FireEye__c,
          Endpoint_tools_Juniper__c: this.user[0].Endpoint_tools_Juniper__c,
          Endpoint_tools_Symantec_Norton__c: this.user[0].Endpoint_tools_Symantec_Norton__c,
          Endpoint_tools_Sophos__c: this.user[0].Endpoint_tools_Sophos__c,
          Cybersecurity_Tools_Aircrack_ng__c: this.user[0].Cybersecurity_Tools_Aircrack_ng__c,
          Cybersecurity_Tools_Autopsy__c: this.user[0].Cybersecurity_Tools_Autopsy__c,
          Cybersecurity_Tools_Cisco__c: this.user[0].Cybersecurity_Tools_Cisco__c,
          Cybersecurity_Tools_Darktrace__c: this.user[0].Cybersecurity_Tools_Darktrace__c,
          Cybersecurity_Tools_Elasticsearch__c: this.user[0].Cybersecurity_Tools_Elasticsearch__c,
          Cybersecurity_Tools_EnCase__c: this.user[0].Cybersecurity_Tools_EnCase__c,
          Cybersecurity_Tools_Eyewitness__c: this.user[0].Cybersecurity_Tools_Eyewitness__c,
          Cybersecurity_Tools_Forensic_Tool_Kit__c: this.user[0].Cybersecurity_Tools_Forensic_Tool_Kit__c,
          Cybersecurity_Tools_Kali_Linux__c: this.user[0].Cybersecurity_Tools_Kali_Linux__c,
          Cybersecurity_Tools_Kibana__c: this.user[0].Cybersecurity_Tools_Kibana__c,
          Cybersecurity_Tools_Logstash__c: this.user[0].Cybersecurity_Tools_Logstash__c,
          Cybersecurity_Tools_Logzilla__c: this.user[0].Cybersecurity_Tools_Logzilla__c,
          Cybersecurity_Tools_Metasploit__c: this.user[0].Cybersecurity_Tools_Metasploit__c,
          Cybersecurity_Tools_Nessus__c: this.user[0].Cybersecurity_Tools_Nessus__c,
          Cybersecurity_Tools_NetSim__c: this.user[0].Cybersecurity_Tools_NetSim__c,
          Cybersecurity_Tools_Nmap__c: this.user[0].Cybersecurity_Tools_Nmap__c,
          Cybersecurity_Tools_Octopussy__c: this.user[0].Cybersecurity_Tools_Octopussy__c,
          Cybersecurity_Tools_Packet_Tracer__c: this.user[0].Cybersecurity_Tools_Packet_Tracer__c,
          Cybersecurity_Tools_Palo_Alto__c: this.user[0].Cybersecurity_Tools_Palo_Alto__c,
          Cybersecurity_Tools_Security_Onion__c: this.user[0].SecCybersecurity_Tools_Security_Onion__curity_Onion,
          Cybersecurity_Tools_Shodan__c: this.user[0].Cybersecurity_Tools_Shodan__c,
          Cybersecurity_Tools_SIFT__c: this.user[0].Cybersecurity_Tools_SIFT__c,
          Cybersecurity_Tools_Snort__c: this.user[0].Cybersecurity_Tools_Snort__c,
          Cybersecurity_Tools_Sophos__c: this.user[0].Cybersecurity_Tools_Sophos__c,
          Cybersecurity_Tools_Splunk__c: this.user[0].Cybersecurity_Tools_Splunk__c,
          Cybersecurity_Tools_Sumologic__c: this.user[0].Cybersecurity_Tools_Sumologic__c,
          Cybersecurity_Tools_Suricata__c: this.user[0].Cybersecurity_Tools_Suricata__c,
          Cybersecurity_Tools_Wireshark__c: this.user[0].Cybersecurity_Tools_Wireshark__c,
          Malware_Detection_Prof_PC_Windows__c:
            this.user[0].Malware_Detection_Prof_PC_Windows__c,
          Malware_Detection_Proficiency_PC_Mac__c:
            this.user[0].Malware_Detection_Proficiency_PC_Mac__c,
          Malware_Detection_Proficiency_PC_Linux__c:
            this.user[0].Malware_Detection_Proficiency_PC_Linux__c,
          Malware_Detection_Prof_Mobile_Android__c:
            this.user[0].Malware_Detection_Prof_Mobile_Android__c,
          Malware_Detection_Prof_Mobile_IOS__c:
            this.user[0].Malware_Detection_Prof_Mobile_IOS__c,
          Proficiency_in_setting_up_VPNs__c: this.user[0].Proficiency_in_setting_up_VPNs__c,
          Prof_in_setting_up_secure_wired_LAN__c:
            this.user[0].Prof_in_setting_up_secure_wired_LAN__c,
          Prof_in_setting_up_secure_wireless_LAN__c:
            this.user[0].Prof_in_setting_up_secure_wireless_LAN__c,
          Prof_in_configuring_hardening_networks__c:
            this.user[0].Prof_in_configuring_hardening_networks__c,
          Certifications_Aplus__c: this.user[0].Certifications_Aplus__c,
          Certifications_CCN__c: this.user[0].Certifications_CCN__c,
          Certifications_CCSA__c: this.user[0].Certifications_CCSA__c,
          Certifications_CEH__c: this.user[0].Certifications_CEH__c,
          Certifications_CISA__c: this.user[0].Certifications_CISA__c,
          Certifications_CISM__c: this.user[0].Certifications_CISM__c,
          Certifications_CISSP__c: this.user[0].Certifications_CISSP__c,
          Certifications_CPP__c: this.user[0].Certifications_CPP__c,
          Certifications_CSSLP__c: this.user[0].Certifications_CSSLP__c,
          Certifications_CSX__c: this.user[0].Certifications_CSX__c,
          Certifications_CTT__c: this.user[0].Certifications_CTT__c,
          Certifications_GCPM__c: this.user[0].Certifications_GCPM__c,
          Certifications_GIAC__c: this.user[0].Certifications_GIAC__c,
          Certifications_GPEN__c: this.user[0].Certifications_GPEN__c,
          Certifications_GSLC__c: this.user[0].Certifications_GSLC__c,
          Certifications_GXPN__c: this.user[0].Certifications_GXPN__c,
          Certifications_MCP__c: this.user[0].Certifications_MCP__c,
          Certifications_MTA__c: this.user[0].Certifications_MTA__c,
          Certifications_Network__c: this.user[0].Certifications_Network__c,
          Certifications_SANS__c: this.user[0].Certifications_SANS__c,
          Certifications_Security__c: this.user[0].Certifications_Security__c,
          Certifications_Six_Sigma__c: this.user[0].Certifications_Six_Sigma__c,
          firstName__c: this.user[0].FirstName__c,
          lastName__c: this.user[0].LastName__c,
          Name: this.user[0].Name,
          password__c: this.password,
          GradeRank__c: this.user[0].GradeRank__c,
          isActive__c : true
        };
        mainApi.postServiceMember(data).then((response) => {
          console.log(response);
          this.submitted = true;
          this.$router.push('/')
        });
      } else {
        const data = {
          //once you have create a new column inside salesforce add its column name here and set value of the question variable from top to it, refer to eg: newcolumn__c : this.user[0].q120
          Staff_Designation__c: this.user[0].Staff_Designation__c,
          Current_Duty_Assignment__c: this.user[0].Current_Duty_Assignment__c,
          K_of_TTPs_used_by_attackers__c: this.user[0].K_of_TTPs_used_by_attackers__c,
          A_to_do_actions_related_to_approved_LoE__c:
            this.user[0].A_to_do_actions_related_to_approved_LoE__c,
          A_to_develop_perform_QA_deliver_LoE__c:
            this.user[0].A_to_develop_perform_QA_deliver_LoE__c,
          K_of_Network_Operating_Systems__c:
            this.user[0].K_of_Network_Operating_Systems__c,
          K_o_CA_info_tech_roles_reqs_and_org__c:
            this.user[0].K_o_CA_info_tech_roles_reqs_and_org__c,
          K_of_server_based_applications__c:
            this.user[0].K_of_server_based_applications__c,
          K_of_computer_networking_protocols__c:
            this.user[0].K_of_computer_networking_protocols__c,
          K_of_network_security_related_concepts__c:
            this.user[0].K_of_network_security_related_concepts__c,
          A_to_effectively_communicate__c:
            this.user[0].A_to_effectively_communicate__c,
          A_to_provide_briefings_with_CMD_staff__c:
            this.user[0].A_to_provide_briefings_with_CMD_staff__c,
          A_to_deploy_troubleshoot_analyse_CND_too__c:
            this.user[0].A_to_deploy_troubleshoot_analyse_CND_too__c,
          E_w_system_admin_or_hardening_techniques__c:
            this.user[0].E_w_system_admin_or_hardening_techniques__c,
          K_of_common_network_tools__c: this.user[0].K_of_common_network_tools__c,
          E_using_CND_vuln_tools__c: this.user[0].E_using_CND_vuln_tools__c,
          S_in_vulnerability_scans__c: this.user[0].S_in_vulnerability_scans__c,
          S_in_collecting_system_policy_artifacts__c:
            this.user[0].S_in_collecting_system_policy_artifacts__c,
          K_of_CND_policies_procedures_and_regs__c:
            this.user[0].K_of_CND_policies_procedures_and_regs__c,
          E_in_TTPs_pen_test_and_Red_Team__c:
            this.user[0].E_in_TTPs_pen_test_and_Red_Team__c,
          A_to_direct_mentor_guide__c: this.user[0].A_to_direct_mentor_guide__c,
          E_in_Defense_In_Depth__c: this.user[0].E_in_Defense_In_Depth__c,
          K_of_network_protocols__c: this.user[0].K_of_network_protocols__c,
          K_of_access_control_and_application__c:
            this.user[0].K_of_access_control_and_application__c,
          K_of_network_traffic_flows_TCP_IP_OSI__c:
            this.user[0].K_of_network_traffic_flows_TCP_IP_OSI__c,
          E_in_use_of_network_vuln_tools__c:
            this.user[0].E_in_use_of_network_vuln_tools__c,
          E_in_using_protocol_analyzers__c:
            this.user[0].E_in_using_protocol_analyzers__c,
          E_in_equip_inventory_readiness_data_san__c:
            this.user[0].E_in_equip_inventory_readiness_data_san__c,
          A_to_assess_Defense_in_Depth__c:
            this.user[0].A_to_assess_Defense_in_Depth__c,
          A_to_review_network_topologies__c:
            this.user[0].A_to_review_network_topologies__c,
          A_to_perform_network_mapping__c:
            this.user[0].A_to_perform_network_mapping__c,
          E_in_providing_Tier_II_analysis__c:
            this.user[0].E_in_providing_Tier_II_analysis__c,
          A_to_review_detected_malicious_activity__c:
            this.user[0].A_to_review_detected_malicious_activity__c,
          Knowledge_of_VPN_security__c: this.user[0].Knowledge_of_VPN_security__c,
          K_of_information_security_standards__c: this.user[0].K_of_information_security_standards__c,
          K_of_operational_cybersecurity__c: this.user[0].K_of_operational_cybersecurity__c,
          E_in_management_of_IT_security_and_risk__c:
            this.user[0].E_in_management_of_IT_security_and_risk__c,
          E_in_internal_and_external_audits_exams__c:
            this.user[0].E_in_internal_and_external_audits_exams__c,
          E_in_policies_procedures_and_standards__c:
            this.user[0].E_in_policies_procedures_and_standards__c,
          K0004__c: this.user[0].K0004__c,
          K0003__c: this.user[0].K0003__c,
          K0006__c: this.user[0].K0006__c,
          K0015__c: this.user[0].K0015__c,
          K0018__c: this.user[0].K0018__c,
          K0019__c: this.user[0].K0019__c,
          K0026__c: this.user[0].K0026__c,
          K0040__c: this.user[0].K0040__c,
          K0041__c: this.user[0].K0041__c,
          K0042__c: this.user[0].K0042__c,
          K0044__c: this.user[0].K0044__c,
          K0046__c: this.user[0].K0046__c,
          K0049__c: this.user[0].K0049__c,
          K0059__c: this.user[0].K0059__c,
          K0070__c: this.user[0].K0070__c,
          K0093__c: this.user[0].K0093__c,
          K0107__c: this.user[0].K0107__c,
          K0116__c: this.user[0].K0116__c,
          K0142__c: this.user[0].K0142__c,
          K0157__c: this.user[0].K0157__c,
          K0160__c: this.user[0].K0160__c,
          K0161__c: this.user[0].K0161__c,
          K0162__c: this.user[0].K0162__c,
          K0177__c: this.user[0].K0177__c,
          K0180__c: this.user[0].K0180__c,
          K0190__c: this.user[0].K0190__c,
          K0191__c: this.user[0].K0191__c,
          K0192__c: this.user[0].K0192__c,
          K0203__c: this.user[0].K0203__c,
          K0259__c: this.user[0].K0259__c,
          K0287__c: this.user[0].K0287__c,
          K0322__c: this.user[0].K0322__c,
          K0624__c: this.user[0].K0624__c,
          S0020__c: this.user[0].S0020__c,
          S0169__c: this.user[0].S0169__c,
          S0365__c: this.user[0].S0365__c,
          A0066__c: this.user[0].A0066__c,
          A0121__c: this.user[0].A0121__c,
          A0123__c: this.user[0].A0123__c,
          // age__c: this.user[0].age,
          Scripting_and_Programming_Tools_Bash__c: this.user[0].Scripting_and_Programming_Tools_Bash__c,
          Scripting_and_Programming_Tools_C__c: this.user[0].Scripting_and_Programming_Tools_C__c,
          Scripting_and_Programming_Tools_C_1__c: this.user[0].Scripting_and_Programming_Tools_C_1__c,
          Scripting_and_Programming_Tools_Java__c: this.user[0].Scripting_and_Programming_Tools_Java__c,
          Scripting_Programming_Tools_Javascript__c: this.user[0].Scripting_Programming_Tools_Javascript__c,
          Scripting_and_Programming_Tools_php__c: this.user[0].Scripting_and_Programming_Tools_php__c,
          Scripting_Programming_Tools_PowerShell__c: this.user[0].Scripting_Programming_Tools_PowerShell__c,
          Scripting_and_Programming_Tools_Python__c: this.user[0].Scripting_and_Programming_Tools_Python__c,
          Endpoint_tools_Cisco__c: this.user[0].Endpoint_tools_Cisco__c,
          Endpoint_tools_CrowdStrike__c: this.user[0].Endpoint_tools_CrowdStrike__c,
          Endpoint_tools_FireEye__c: this.user[0].Endpoint_tools_FireEye__c,
          Endpoint_tools_Juniper__c: this.user[0].Endpoint_tools_Juniper__c,
          Endpoint_tools_Symantec_Norton__c: this.user[0].Endpoint_tools_Symantec_Norton__c,
          Endpoint_tools_Sophos__c: this.user[0].Endpoint_tools_Sophos__c,
          Cybersecurity_Tools_Aircrack_ng__c: this.user[0].Cybersecurity_Tools_Aircrack_ng__c,
          Cybersecurity_Tools_Autopsy__c: this.user[0].Cybersecurity_Tools_Autopsy__c,
          Cybersecurity_Tools_Cisco__c: this.user[0].Cybersecurity_Tools_Cisco__c,
          Cybersecurity_Tools_Darktrace__c: this.user[0].Cybersecurity_Tools_Darktrace__c,
          Cybersecurity_Tools_Elasticsearch__c: this.user[0].Cybersecurity_Tools_Elasticsearch__c,
          Cybersecurity_Tools_EnCase__c: this.user[0].Cybersecurity_Tools_EnCase__c,
          Cybersecurity_Tools_Eyewitness__c: this.user[0].Cybersecurity_Tools_Eyewitness__c,
          Cybersecurity_Tools_Forensic_Tool_Kit__c: this.user[0].Cybersecurity_Tools_Forensic_Tool_Kit__c,
          Cybersecurity_Tools_Kali_Linux__c: this.user[0].Cybersecurity_Tools_Kali_Linux__c,
          Cybersecurity_Tools_Kibana__c: this.user[0].Cybersecurity_Tools_Kibana__c,
          Cybersecurity_Tools_Logstash__c: this.user[0].Cybersecurity_Tools_Logstash__c,
          Cybersecurity_Tools_Logzilla__c: this.user[0].Cybersecurity_Tools_Logzilla__c,
          Cybersecurity_Tools_Metasploit__c: this.user[0].Cybersecurity_Tools_Metasploit__c,
          Cybersecurity_Tools_Nessus__c: this.user[0].Cybersecurity_Tools_Nessus__c,
          Cybersecurity_Tools_NetSim__c: this.user[0].Cybersecurity_Tools_NetSim__c,
          Cybersecurity_Tools_Nmap__c: this.user[0].Cybersecurity_Tools_Nmap__c,
          Cybersecurity_Tools_Octopussy__c: this.user[0].Cybersecurity_Tools_Octopussy__c,
          Cybersecurity_Tools_Packet_Tracer__c: this.user[0].Cybersecurity_Tools_Packet_Tracer__c,
          Cybersecurity_Tools_Palo_Alto__c: this.user[0].Cybersecurity_Tools_Palo_Alto__c,
          Cybersecurity_Tools_Security_Onion__c: this.user[0].SecCybersecurity_Tools_Security_Onion__curity_Onion,
          Cybersecurity_Tools_Shodan__c: this.user[0].Cybersecurity_Tools_Shodan__c,
          Cybersecurity_Tools_SIFT__c: this.user[0].Cybersecurity_Tools_SIFT__c,
          Cybersecurity_Tools_Snort__c: this.user[0].Cybersecurity_Tools_Snort__c,
          Cybersecurity_Tools_Sophos__c: this.user[0].Cybersecurity_Tools_Sophos__c,
          Cybersecurity_Tools_Splunk__c: this.user[0].Cybersecurity_Tools_Splunk__c,
          Cybersecurity_Tools_Sumologic__c: this.user[0].Cybersecurity_Tools_Sumologic__c,
          Cybersecurity_Tools_Suricata__c: this.user[0].Cybersecurity_Tools_Suricata__c,
          Cybersecurity_Tools_Wireshark__c: this.user[0].Cybersecurity_Tools_Wireshark__c,
          Malware_Detection_Prof_PC_Windows__c:
            this.user[0].Malware_Detection_Prof_PC_Windows__c,
          Malware_Detection_Proficiency_PC_Mac__c:
            this.user[0].Malware_Detection_Proficiency_PC_Mac__c,
          Malware_Detection_Proficiency_PC_Linux__c:
            this.user[0].Malware_Detection_Proficiency_PC_Linux__c,
          Malware_Detection_Prof_Mobile_Android__c:
            this.user[0].Malware_Detection_Prof_Mobile_Android__c,
          Malware_Detection_Prof_Mobile_IOS__c:
            this.user[0].Malware_Detection_Prof_Mobile_IOS__c,
          Proficiency_in_setting_up_VPNs__c: this.user[0].Proficiency_in_setting_up_VPNs__c,
          Prof_in_setting_up_secure_wired_LAN__c:
            this.user[0].Prof_in_setting_up_secure_wired_LAN__c,
          Prof_in_setting_up_secure_wireless_LAN__c:
            this.user[0].Prof_in_setting_up_secure_wireless_LAN__c,
          Prof_in_configuring_hardening_networks__c:
            this.user[0].Prof_in_configuring_hardening_networks__c,
          Certifications_Aplus__c: this.user[0].Certifications_Aplus__c,
          Certifications_CCN__c: this.user[0].Certifications_CCN__c,
          Certifications_CCSA__c: this.user[0].Certifications_CCSA__c,
          Certifications_CEH__c: this.user[0].Certifications_CEH__c,
          Certifications_CISA__c: this.user[0].Certifications_CISA__c,
          Certifications_CISM__c: this.user[0].Certifications_CISM__c,
          Certifications_CISSP__c: this.user[0].Certifications_CISSP__c,
          Certifications_CPP__c: this.user[0].Certifications_CPP__c,
          Certifications_CSSLP__c: this.user[0].Certifications_CSSLP__c,
          Certifications_CSX__c: this.user[0].Certifications_CSX__c,
          Certifications_CTT__c: this.user[0].Certifications_CTT__c,
          Certifications_GCPM__c: this.user[0].Certifications_GCPM__c,
          Certifications_GIAC__c: this.user[0].Certifications_GIAC__c,
          Certifications_GPEN__c: this.user[0].Certifications_GPEN__c,
          Certifications_GSLC__c: this.user[0].Certifications_GSLC__c,
          Certifications_GXPN__c: this.user[0].Certifications_GXPN__c,
          Certifications_MCP__c: this.user[0].Certifications_MCP__c,
          Certifications_MTA__c: this.user[0].Certifications_MTA__c,
          Certifications_Network__c: this.user[0].Certifications_Network__c,
          Certifications_SANS__c: this.user[0].Certifications_SANS__c,
          Certifications_Security__c: this.user[0].Certifications_Security__c,
          Certifications_Six_Sigma__c: this.user[0].Certifications_Six_Sigma__c,
          firstName__c: this.user[0].FirstName__c,
          lastName__c: this.user[0].LastName__c,
          Name: this.user[0].Name,
          password__c: this.password,
          GradeRank__c: this.user[0].GradeRank__c,
          isAdmin__c: true,
          isActive__c : true
        };
        mainApi.postServiceMember(data).then((response) => {
          console.log(response);
          this.submitted = true;
          this.$router.push('/')
        });
      }
      } else {
        this.alertT = true
      }
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
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
.button:hover {
  cursor: pointer;
}
.bodyV {
  margin: 0;
  padding: 0;
  background-color: #18365d;
  height: 100vh;
}
.align-left {
  text-align: left;
  margin: 0 10% 0 10%;
}
.hello {
  margin: 3% 40% 10% 40%;
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
  border: 1px solid #17c1fb;
  background-color: #072952;
  border-radius: 10px;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
.colorText {
  color: #17c1fb;
  font-weight: 40;
  font-size: 20px;
}
.colorBut {
  background-color: #17c1fb;
  width: 80%;
  border-radius: 5px;
}
hr {
  color: #17c1fb;
}
</style>
