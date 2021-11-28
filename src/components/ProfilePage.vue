<template>
  <div>
    <b-button
      style="float: right; margin-right: 10%; background-color: #17c1fb"
      @click="redirectLogin"
      >Logout</b-button
    >
    <div class="title">
      <h1 style="margin-left: 13%">Member Profile</h1>
      <hr class="line" />
    </div>
    <br />
    <!-- <p v-if="submitted == false" class="align-left">Please review your Information before submitting</p> -->
    <!-- <p>Thank you for submitting your response</p> -->
    <div class="hello">
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Personal Information</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion1"
          role="tabpanel"
        >
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
              <b-form-input
                required
                v-if="editable"
                v-model="form.first_name"
                id="nested-street-1"
              ></b-form-input>
              <p v-else>{{ form.first_name }}</p>
            </b-form-group>
            <b-form-group
              label="Last Name:"
              label-for="nested-street-2"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                required
                v-if="editable"
                v-model="form.last_name"
                id="nested-street-2"
              ></b-form-input>
              <p v-else>{{ form.last_name }}</p>
            </b-form-group>
            <b-form-group
              label="Email:"
              label-for="nested-street"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                required
                v-if="editable"
                v-model="form.name"
                id="nested-street"
              ></b-form-input>
              <p v-else>{{ form.name }}</p>
            </b-form-group>

            <b-form-group
              label="Rank:"
              label-for="nested-city"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-select
                v-if="editable"
                v-model="form.rank"
                :options="ranks"
                id="nested-city"
              ></b-form-select>
              <!-- <b-form-input :required=true  v-model="form.rank" id="nested-city"></b-form-input> -->
              <p v-else>{{ form.rank }}</p>
            </b-form-group>

            <!-- <b-form-group
                label="Age:"
                label-for="nested-state"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input :required=true v-if="editable" v-model="form.age" id="nested-state"></b-form-input>
                <p v-else>{{ form.age }}</p>
              </b-form-group> -->

            <b-form-group
              label="Current Duty Assignment:"
              label-for="nested-country"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-select
                v-if="editable"
                :options="duties"
                v-model="form.Current_Duty_Assignment"
                id="nested-country"
              ></b-form-select>
              <p v-else>{{ form.Current_Duty_Assignment }}</p>
            </b-form-group>
            <!-- <b-form-group
                label="Current Duty Assignment:"
                label-for="nested-street-98"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input :required=true v-if="editable" type="password" v-model="form.Current_Duty_Assignment" id="nested-street-98"></b-form-input>
                <p v-else>{{ form.Current_Duty_Assignment }}</p>
              </b-form-group> -->
            <!-- </b-form-group> -->
          </b-card-body>
        </b-collapse>
      </b-card>
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            ><span style="float: left; font-weight: 800">Section 2 of 7</span
            >Cyber Analyst I - Skill Ratings</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-3"
          visible
          accordion="my-accordion3"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Rate your knowledge of Tactics, Techniques, and Procedures (TTPs) used by attackers and the ability to apply them appropriately to customer systems/networks in a controlled and effective way:"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ ariaDescribedby12 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="radio-group-14"
                v-model="form.K_of_TTPs_used_by_attackers"
                :options="options1"
                :aria-describedby="ariaDescribedby12"
                name="radio-options-28"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_TTPs_used_by_attackers }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your ability to perform coordination actions related to approved Lines of Effort (LoE) during pre-execution, execution, and post-execute phases of cyber defense support activities: "
              label-for="nested-city"
              v-slot="{ ariaDescribedby23 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="radio-group-24"
                v-model="form.A_to_do_actions_related_to_approved_LoE"
                :options="options1"
                :aria-describedby="ariaDescribedby23"
                name="radio-options-22"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_do_actions_related_to_approved_LoE }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your ability to develop, perform quality assurance, and deliver products related to approved LoE:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby35 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="radio-group-34"
                v-model="form.A_to_develop_perform_QA_deliver_LoE"
                :options="options1"
                :aria-describedby="ariaDescribedby35"
                name="radio-group-34"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_develop_perform_QA_deliver_LoE }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your knowledge of Network Operating Systems (Microsoft Active Directory) support, management, and troubleshooting requirements:"
              label-for="nested-state"
              v-slot="{ wer1 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer1w"
                v-model="form.K_of_Network_Operating_Systems_"
                :options="options1"
                :aria-describedby="wer1"
                name="wer1w"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_Network_Operating_Systems_ }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your working knowledge of State of California information technology roles, requirements, and organization structures:"
              label-for="nested-state"
              v-slot="{ wer2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer2w"
                v-model="form.K_o_CA_info_tech_roles_reqs_and_org"
                :options="options1"
                :aria-describedby="wer2"
                name="wer2w"
              ></b-form-radio-group>
              <p v-else>{{ form.K_o_CA_info_tech_roles_reqs_and_org }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your working knowledge of server based applications for email, databases, system backup and restoration, file sharing, printing, and security configuration:"
              label-for="nested-state"
              v-slot="{ wer3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer3w"
                v-model="form.K_of_server_based_applications_"
                :options="options1"
                :aria-describedby="wer3"
                name="wer3w"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_server_based_applications_ }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your understanding of computer networking with functional knowledge of commonly used protocols (TCP/IP, UDP, ICMP, MPLS, etc):"
              label-for="nested-state"
              v-slot="{ wer4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer4w"
                v-model="form.K_of_computer_networking_protocols_"
                :options="options1"
                :aria-describedby="wer4"
                name="wer4w"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_computer_networking_protocols_ }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your working knowledge of network security and related concepts:"
              label-for="nested-state"
              v-slot="{ wer5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer5w"
                v-model="form.K_of_network_security__related_concepts"
                :options="options1"
                :aria-describedby="wer5"
                name="wer5w"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_network_security__related_concepts }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your ability to effectively communicate with team members, external partner agencies, and supervisors:"
              label-for="nested-state"
              v-slot="{ wer6 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer6w"
                v-model="form.A_to_effectively_communicate_"
                :options="options1"
                :aria-describedby="wer6"
                name="wer6w"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_effectively_communicate_ }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your ability to effectively provide briefings and other educational interactions with CMD staff and other partner activities:"
              label-for="nested-state"
              v-slot="{ wer7 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer7w"
                v-model="form.A_to__provide_briefings_with_CMD_staff_"
                :options="options1"
                :aria-describedby="wer7"
                name="wer7w"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to__provide_briefings_with_CMD_staff_ }}</p>
            </b-form-group>

            <b-form-group
              label="Rate your ability to deploy, troubleshoot, and perform analysis of outputs from Cyber Network Defense tools to detect potential configuration and security risks:"
              label-for="nested-state"
              v-slot="{ wer8 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="wer8w"
                v-model="form.A_to_deploy_troubleshoot_analyse_CND_tools"
                :options="options1"
                :aria-describedby="wer8"
                name="wer8w"
              ></b-form-radio-group>
              <p v-else>
                {{ form.A_to_deploy_troubleshoot_analyse_CND_tools }}
              </p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-16 variant="info"
            ><span style="float: left; font-weight: 800">Section 3 of 7</span
            >Cyber Analyst II Skills Rating</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-16"
          visible
          accordion="my-accordion16"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Rate your knowledge of industry leading information security standards including (NIST, ISO27001, CJIS, SOC2):"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ cb1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbb1"
                v-model="form.K_of__information_security_standards"
                :options="options1"
                :aria-describedby="cb1"
                name="cbb1"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of__information_security_standards }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of operational cybersecurity, networking, systems administration, database administration, architecture or other relevant technical domains:"
              label-for="nested-city"
              v-slot="{ cb2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbb2"
                v-model="form.K_of_operational_cybersecurity"
                :options="options1"
                :aria-describedby="cb2"
                name="cbb2"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_operational_cybersecurity }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience in management of IT security and IT risk (e.g., data systems, network and/or web) across the enterprise:"
              label-for="nested-state"
              v-slot="{ cb3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbb3"
                v-model="form.E_in_management_of_IT_security_and_risk"
                :options="options1"
                :aria-describedby="cb3"
                name="cbb3"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_management_of_IT_security_and_risk }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience in conducting internal and external audits and examinations:"
              label-for="nested-state"
              v-slot="{ cb4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbb4"
                v-model="form.E_in_internal_and_external_audits_exams"
                :options="options1"
                :aria-describedby="cb4"
                name="cbb4"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_internal_and_external_audits_exams }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience in implementing policies, procedures and standards that meet existing and newly developed policy and regulatory requirements including SOX, PCI, HIPPA, PII, NIST, DoD, SAM 5300 and/or FFIEC guidance:"
              label-for="nested-state"
              v-slot="{ cb5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbb5"
                v-model="form.E_in__policies_procedures_and_standards"
                :options="options1"
                :aria-describedby="cb5"
                name="cbb5"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in__policies_procedures_and_standards }}</p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-19 variant="info"
            ><span style="float: left; font-weight: 800">Section 4 of 7</span
            >Cyber Analyst III Skills Rating</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-19"
          visible
          accordion="my-accordion19"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Rate your experience with system administration, network, or operating system hardening techniques:"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ III1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk1"
                v-model="form.E_w_system_admin_or_hardening_techniques"
                :options="options1"
                :aria-describedby="III1"
                name="cbsk1"
              ></b-form-radio-group>
              <p v-else>{{ form.E_w_system_admin_or_hardening_techniques }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of common network tools (e.g., ping, traceroute, nslookup, Whois, Netstat, etc):"
              label-for="nested-city"
              v-slot="{ III2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk2"
                v-model="form.K_of_common_network_tools"
                :options="options1"
                :aria-describedby="III2"
                name="cbsk2"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_common_network_tools }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your prior experience using Computer Network Defense and vulnerability assessment tools, including open source tools, and their capabilities:"
              label-for="nested-state"
              v-slot="{ III3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk3"
                v-model="form.E_using_CND_vuln_tools_"
                :options="options1"
                :aria-describedby="III3"
                name="cbsk3"
              ></b-form-radio-group>
              <p v-else>{{ form.E_using_CND_vuln_tools_ }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your skill in conducting and troubleshooting vulnerability scans:"
              label-for="nested-state"
              v-slot="{ III4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk4"
                v-model="form.S_in_vulnerability_scans"
                :options="options1"
                :aria-describedby="III4"
                name="cbsk4"
              ></b-form-radio-group>
              <p v-else>{{ form.S_in_vulnerability_scans }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your skill in collecting various system and policy artifacts in support of Computer Network Defense activities:"
              label-for="nested-state"
              v-slot="{ III5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk5"
                v-model="form.S_in_collecting_system__policy_artifacts"
                :options="options1"
                :aria-describedby="III5"
                name="cbsk5"
              ></b-form-radio-group>
              <p v-else>{{ form.S_in_collecting_system__policy_artifacts }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of Cyber Network Defense policies, procedures, and regulations (State and Federal):"
              label-for="nested-state"
              v-slot="{ III6 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk6"
                v-model="form.K_of_CND__policies_procedures_and_regs"
                :options="options1"
                :aria-describedby="III6"
                name="cbsk6"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_CND__policies_procedures_and_regs }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience and use of current tactics, techniques, and procedures to penetration test and perform Red Team activities when authorized on customer networks:"
              label-for="nested-state"
              v-slot="{ III7 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk7"
                v-model="form.E_in_TTPs_pen_test_and_Red_Team"
                :options="options1"
                :aria-describedby="III7"
                name="cbsk7"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_TTPs_pen_test_and_Red_Team }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your ability to provide direction, mentorship, guidance, and team leader supervision to subordinate CND Analyst I and other assigned augmentation personnel:"
              label-for="nested-state"
              v-slot="{ III8 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk9"
                v-model="form.A_to_direct_mentor_guide"
                :options="options1"
                :aria-describedby="III8"
                name="cbsk9"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_direct_mentor_guide }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience in the implementation of Defense-In-Depth principles and network security architectures:"
              label-for="nested-state"
              v-slot="{ III9 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk10"
                v-model="form.E_in_Defense_In_Depth_"
                :options="options1"
                :aria-describedby="III9"
                name="cbsk10"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_Defense_In_Depth_ }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of network protocols such as TCP/IP, Dynamic Host Configuration, Domain Name System (DNS), and directory services:"
              label-for="nested-city"
              v-slot="{ IV12 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk11"
                v-model="form.K_of_network_protocols_"
                :options="options1"
                :aria-describedby="IV12"
                name="cbsk11"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_network_protocols_ }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of access control methods and application (e.g., access control list, separation of roles, etc):"
              label-for="nested-state"
              v-slot="{ IV13 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk12"
                v-model="form.K_of_access_control__and_application"
                :options="options1"
                :aria-describedby="IV13"
                name="cbsk12"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_access_control__and_application }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of network traffic flows (e.g., Transmission Control Protocol (TCP), Internet Protocol (IP), and the Open System Interconnection Model (OSI)):"
              label-for="nested-state"
              v-slot="{ IV14 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk13"
                v-model="form.K_of_network_traffic_flows__TCP_IP_OSI"
                :options="options1"
                :aria-describedby="IV14"
                name="cbsk13"
              ></b-form-radio-group>
              <p v-else>{{ form.K_of_network_traffic_flows__TCP_IP_OSI }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your skill and experience in using network analysis tools to identify vulnerabilities:"
              label-for="nested-state"
              v-slot="{ IV15 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk14"
                v-model="form.E_in_use_of_network_vuln_tools"
                :options="options1"
                :aria-describedby="IV15"
                name="cbsk14"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_use_of_network_vuln_tools }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your skill and experience in using protocol analyzers:"
              label-for="nested-state"
              v-slot="{ IV16 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk15"
                v-model="form.E_in_using_protocol_analyzers"
                :options="options1"
                :aria-describedby="IV16"
                name="cbsk16"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_using_protocol_analyzers }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience in performing equipment inventory, validating readiness, and ensuring sensitive data sanitization prior to deployment for LoE support:"
              label-for="nested-state"
              v-slot="{ IV17 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk17"
                v-model="form.E_in_equip_inventory_readiness_data_san"
                :options="options1"
                :aria-describedby="IV17"
                name="cbsk17"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_equip_inventory_readiness_data_san }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your ability to assess deployed Defense-in-Depth principles and practices:"
              label-for="nested-state"
              v-slot="{ IV18 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk18"
                v-model="form.A_to_assess__Defense_in_Depth_"
                :options="options1"
                :aria-describedby="IV18"
                name="cbsk18"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_assess__Defense_in_Depth_ }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your ability to review highly technical network topologies related to Defense-in-Depth considerations:"
              label-for="nested-state"
              v-slot="{ IV19 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk19"
                v-model="form.A_to_review__network_topologies_"
                :options="options1"
                :aria-describedby="IV19"
                name="cbsk19"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_review__network_topologies_ }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your ability to perform and troubleshoot network mapping and operating system (OS) fingerprinting activities:"
              label-for="nested-state"
              v-slot="{ IV20 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk20"
                v-model="form.A_to_perform__network_mapping"
                :options="options1"
                :aria-describedby="IV20"
                name="cbsk20"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_perform__network_mapping }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your experience in providing Tier-II analysis, characterization, and technical research related to anomalous activity and potential threats to network resources:"
              label-for="nested-state"
              v-slot="{ IV21 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk21"
                v-model="form.E_in_providing_Tier_II_analysis"
                :options="options1"
                :aria-describedby="IV21"
                name="cbsk21"
              ></b-form-radio-group>
              <p v-else>{{ form.E_in_providing_Tier_II_analysis }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your ability to review detected malicious activity to correlate exploitation methods and effects on Confidentiality, Integrity, and Availability:"
              label-for="nested-state"
              v-slot="{ IV22 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk22"
                v-model="form.A_to_review_detected_malicious_activity_"
                :options="options1"
                :aria-describedby="IV22"
                name="cbsk22"
              ></b-form-radio-group>
              <p v-else>{{ form.A_to_review_detected_malicious_activity_ }}</p>
            </b-form-group>
            <b-form-group
              label="Rate your knowledge of and experience in VPN security:"
              label-for="nested-state"
              v-slot="{ IV23 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cbsk23"
                v-model="form.Knowledge_of_VPN_security"
                :options="options1"
                :aria-describedby="IV23"
                name="cbsk23"
              ></b-form-radio-group>
              <p v-else>{{ form.Knowledge_of_VPN_security }}</p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-13 variant="info"
            ><span style="float: left; font-weight: 800">Section 5 of 7</span
            >Cyber Defense Analyst and Incident Responder (KSAs)</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-13"
          visible
          accordion="my-accordion13"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Knowledge of laws, regulations, policies, and ethics as they relate to cybersecurity and privacy:"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ ir1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt1"
                v-model="form.K0004"
                :options="options1"
                :aria-describedby="ir1"
                name="zt1"
              ></b-form-radio-group>
              <p v-else>{{ form.K0004 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of cybersecurity and privacy principles:"
              label-for="nested-city"
              v-slot="{ ir2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt2"
                v-model="form.K0003"
                :options="options1"
                :aria-describedby="ir2"
                name="zt2"
              ></b-form-radio-group>
              <p v-else>{{ form.K0003 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of specific operational impacts of cybersecurity lapses:"
              label-for="nested-state"
              v-slot="{ ir3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt3"
                v-model="form.K0006"
                :options="options1"
                :aria-describedby="ir3"
                name="zt3"
              ></b-form-radio-group>
              <p v-else>{{ form.K0006 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of computer algorithms:"
              label-for="nested-state"
              v-slot="{ ir4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt4"
                v-model="form.K0015"
                :options="options1"
                :aria-describedby="ir4"
                name="zt4"
              ></b-form-radio-group>
              <p v-else>{{ form.K0015 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of encryption algorithms:"
              label-for="nested-state"
              v-slot="{ ir5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt5"
                v-model="form.K0018"
                :options="options1"
                :aria-describedby="ir5"
                name="zt5"
              ></b-form-radio-group>
              <p v-else>{{ form.K0018 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of cryptography and cryptographic key management concept:"
              label-for="nested-state"
              v-slot="{ ir6 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt6"
                v-model="form.K0019"
                :options="options1"
                :aria-describedby="ir6"
                name="zt6"
              ></b-form-radio-group>
              <p v-else>{{ form.K0019 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of business continuity and disaster recovery continuity of operations plans:"
              label-for="nested-state"
              v-slot="{ ir7 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt7"
                v-model="form.K0026"
                :options="options1"
                :aria-describedby="ir7"
                name="zt7"
              ></b-form-radio-group>
              <p v-else>{{ form.K0026 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of vulnerability information dissemination sources (e.g., alerts, advisories, errata, and bulletins):"
              label-for="nested-state"
              v-slot="{ ir8 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt9"
                v-model="form.K0040"
                :options="options1"
                :aria-describedby="ir8"
                name="zt9"
              ></b-form-radio-group>
              <p v-else>{{ form.K0040 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of incident categories, incident responses, and timelines for responses:"
              label-for="nested-state"
              v-slot="{ ir9 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt10"
                v-model="form.K0041"
                :options="options1"
                :aria-describedby="ir9"
                name="zt10"
              ></b-form-radio-group>
              <p v-else>{{ form.K0041 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of incident response and handling methodologies:"
              label-for="nested-city"
              v-slot="{ ir10 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt11"
                v-model="form.K0042"
                :options="options1"
                :aria-describedby="ir10"
                name="zt11"
              ></b-form-radio-group>
              <p v-else>{{ form.K0042 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of cybersecurity and privacy principles and organizational requirements (relevant to confidentiality, integrity, availability, authentication, non-repudiation):"
              label-for="nested-state"
              v-slot="{ ir11 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt12"
                v-model="form.K0044"
                :options="options1"
                :aria-describedby="ir11"
                name="zt12"
              ></b-form-radio-group>
              <p v-else>{{ form.K0044 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of intrusion detection methodologies and techniques for detecting host and network-based intrusions:"
              label-for="nested-state"
              v-slot="{ ir12 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt13"
                v-model="form.K0046"
                :options="options1"
                :aria-describedby="ir12"
                name="zt13"
              ></b-form-radio-group>
              <p v-else>{{ form.K0046 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of information technology (IT) security principles and methods (e.g., firewalls, demilitarized zones, encryption).:"
              label-for="nested-state"
              v-slot="{ ir13 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt14"
                v-model="form.K0049"
                :options="options1"
                :aria-describedby="ir13"
                name="zt14"
              ></b-form-radio-group>
              <p v-else>{{ form.K0049 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of new and emerging information technology (IT) and cybersecurity technologies:"
              label-for="nested-state"
              v-slot="{ ir14 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt15"
                v-model="form.K0059"
                :options="options1"
                :aria-describedby="ir14"
                name="zt16"
              ></b-form-radio-group>
              <p v-else>{{ form.K0059 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of system and application security threats and vulnerabilities (e.g., buffer overflow, mobile code, cross-site scripting, Procedural Language/Structured Query Language [PL/SQL] and injections, race conditions, covert channel, replay, return-oriented attacks, malicious code):"
              label-for="nested-state"
              v-slot="{ ir15 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt17"
                v-model="form.K0070"
                :options="options1"
                :aria-describedby="ir15"
                name="zt17"
              ></b-form-radio-group>
              <p v-else>{{ form.K0070 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of telecommunications concepts (e.g., Communications channel, Systems Link Budgeting, Spectral efficiency, Multiplexing):"
              label-for="nested-state"
              v-slot="{ ir16 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt18"
                v-model="form.K0093"
                :options="options1"
                :aria-describedby="ir16"
                name="zt18"
              ></b-form-radio-group>
              <p v-else>{{ form.K0093 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of Insider Threat investigations, reporting, investigative tools and laws/regulations:"
              label-for="nested-state"
              v-slot="{ ir17 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt19"
                v-model="form.K0107"
                :options="options1"
                :aria-describedby="ir17"
                name="zt19"
              ></b-form-radio-group>
              <p v-else>{{ form.K0107 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of file extensions (e.g., .dll, .bat, .zip, .pcap, .gzip):"
              label-for="nested-state"
              v-slot="{ ir18 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt20"
                v-model="form.K0116"
                :options="options1"
                :aria-describedby="ir18"
                name="zt20"
              ></b-form-radio-group>
              <p v-else>{{ form.K0116 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of collection management processes, capabilities, and limitations:"
              label-for="nested-state"
              v-slot="{ ir19 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt21"
                v-model="form.K0142"
                :options="options1"
                :aria-describedby="ir19"
                name="zt21"
              ></b-form-radio-group>
              <p v-else>{{ form.K0142 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of cyber defense and information security policies, procedures, and regulations:"
              label-for="nested-state"
              v-slot="{ ir20 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt22"
                v-model="form.K0157"
                :options="options1"
                :aria-describedby="ir20"
                name="zt22"
              ></b-form-radio-group>
              <p v-else>{{ form.K0157 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of the common attack vectors on the network layer:"
              label-for="nested-state"
              v-slot="{ ir21 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt23"
                v-model="form.K0160"
                :options="options1"
                :aria-describedby="ir21"
                name="zt23"
              ></b-form-radio-group>
              <p v-else>{{ form.K0160 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of different classes of attacks (e.g., passive, active, insider, close-in, distribution attacks):"
              label-for="nested-state"
              v-slot="{ ir22 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt24"
                v-model="form.K0161"
                :options="options1"
                :aria-describedby="ir22"
                name="zt24"
              ></b-form-radio-group>
              <p v-else>{{ form.K0161 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of cyber attackers (e.g., script kiddies, insider threat, non-nation state sponsored, and nation sponsored):"
              label-for="nested-state"
              v-slot="{ ir23 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt25"
                v-model="form.K0162"
                :options="options1"
                :aria-describedby="ir23"
                name="zt25"
              ></b-form-radio-group>
              <p v-else>{{ form.K0162 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of cyber attack stages (e.g., reconnaissance, scanning, enumeration, gaining access, escalation of privileges, maintaining access, network exploitation, covering tracks):"
              label-for="nested-state"
              v-slot="{ ir24 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt26"
                v-model="form.K0177"
                :options="options1"
                :aria-describedby="ir24"
                name="zt26"
              ></b-form-radio-group>
              <p v-else>{{ form.K0177 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of network systems management principles, models, methods (e.g., end-to-end systems performance monitoring), and tools.:"
              label-for="nested-state"
              v-slot="{ ir25 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt27"
                v-model="form.K0180"
                :options="options1"
                :aria-describedby="ir25"
                name="zt27"
              ></b-form-radio-group>
              <p v-else>{{ form.K0180 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of encryption methodologies:"
              label-for="nested-state"
              v-slot="{ ir26 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt28"
                v-model="form.K0190"
                :options="options1"
                :aria-describedby="ir26"
                name="zt28"
              ></b-form-radio-group>
              <p v-else>{{ form.K0190 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of signature implementation impact for viruses, malware, and attacks:"
              label-for="nested-state"
              v-slot="{ ir27 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt29"
                v-model="form.K0191"
                :options="options1"
                :aria-describedby="ir27"
                name="zt29"
              ></b-form-radio-group>
              <p v-else>{{ form.K0191 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of Windows/Unix ports and services:"
              label-for="nested-state"
              v-slot="{ ir28 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt30"
                v-model="form.K0192"
                :options="options1"
                :aria-describedby="ir28"
                name="zt30"
              ></b-form-radio-group>
              <p v-else>{{ form.K0192 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of security models (e.g., Bell-LaPadula model, Biba integrity model, Clark-Wilson integrity model):"
              label-for="nested-state"
              v-slot="{ ir29 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt31"
                v-model="form.K0203"
                :options="options1"
                :aria-describedby="ir29"
                name="zt31"
              ></b-form-radio-group>
              <p v-else>{{ form.K0203 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of malware analysis concepts and methodologies:"
              label-for="nested-state"
              v-slot="{ ir30 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt32"
                v-model="form.K0259"
                :options="options1"
                :aria-describedby="ir30"
                name="zt32"
              ></b-form-radio-group>
              <p v-else>{{ form.K0259 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of an organization's information classification program and procedures for information compromise:"
              label-for="nested-state"
              v-slot="{ ir31 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt33"
                v-model="form.K0287"
                :options="options1"
                :aria-describedby="ir31"
                name="zt33"
              ></b-form-radio-group>
              <p v-else>{{ form.K0287 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of embedded systems:"
              label-for="nested-state"
              v-slot="{ ir32 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt34"
                v-model="form.K0322"
                :options="options1"
                :aria-describedby="ir32"
                name="zt34"
              ></b-form-radio-group>
              <p v-else>{{ form.K0322 }}</p>
            </b-form-group>
            <b-form-group
              label="Knowledge of Application Security Risks (e.g. Open Web Application Security Project Top 10 list):"
              label-for="nested-state"
              v-slot="{ ir33 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt35"
                v-model="form.K0624"
                :options="options1"
                :aria-describedby="ir33"
                name="zt35"
              ></b-form-radio-group>
              <p v-else>{{ form.K0624 }}</p>
            </b-form-group>
            <b-form-group
              label="Skill in developing and deploying signatures:"
              label-for="nested-state"
              v-slot="{ ir34 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt36"
                v-model="form.S0020"
                :options="options1"
                :aria-describedby="ir34"
                name="zt36"
              ></b-form-radio-group>
              <p v-else>{{ form.S0020 }}</p>
            </b-form-group>
            <b-form-group
              label="Skill in conducting trend analysis:"
              label-for="nested-state"
              v-slot="{ ir35 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt37"
                v-model="form.S0169"
                :options="options1"
                :aria-describedby="ir35"
                name="zt37"
              ></b-form-radio-group>
              <p v-else>{{ form.S0169 }}</p>
            </b-form-group>
            <b-form-group
              label="Skill to design incident response for cloud service models:"
              label-for="nested-state"
              v-slot="{ ir36 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt38"
                v-model="form.S0365"
                :options="options1"
                :aria-describedby="ir36"
                name="zt38"
              ></b-form-radio-group>
              <p v-else>{{ form.S0365 }}</p>
            </b-form-group>
            <b-form-group
              label="Ability to accurately and completely source all data used in intelligence, assessment and/or planning products:"
              label-for="nested-state"
              v-slot="{ ir37 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt39"
                v-model="form.A0066"
                :options="options1"
                :aria-describedby="ir37"
                name="zt39"
              ></b-form-radio-group>
              <p v-else>{{ form.A0066 }}</p>
            </b-form-group>
            <b-form-group
              label="Ability to design incident response for cloud service models:"
              label-for="nested-state"
              v-slot="{ ir38 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt40"
                v-model="form.A0121"
                :options="options1"
                :aria-describedby="ir38"
                name="zt40"
              ></b-form-radio-group>
              <p v-else>{{ form.A0121 }}</p>
            </b-form-group>
            <b-form-group
              label="Ability to apply cybersecurity and privacy principles to organizational requirements (relevant to confidentiality, integrity, availability, authentication, non-repudiation):"
              label-for="nested-state"
              v-slot="{ ir39 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="zt41"
                v-model="form.A0123"
                :options="options1"
                :aria-describedby="ir39"
                name="zt41"
              ></b-form-radio-group>
              <p v-else>{{ form.A0123 }}</p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-10 variant="info"
            ><span style="float: left; font-weight: 800">Section 6 of 7</span
            >Cyber Tools Rating</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-10"
          visible
          accordion="my-accordion10"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Malware Detection Proficiency PC (Windows):"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ ad1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct1"
                v-model="form.Malware_Detection_PC_Windows"
                :options="options1"
                :aria-describedby="ad1"
                name="ct1"
              ></b-form-radio-group>
              <p v-else>{{ form.Malware_Detection_PC_Windows }}</p>
            </b-form-group>
            <b-form-group
              label="Malware Detection Proficiency PC (Mac):"
              label-for="nested-city"
              v-slot="{ ad2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct2"
                v-model="form.Malware_Detection_PC_Mac"
                :options="options1"
                :aria-describedby="ad2"
                name="ct2"
              ></b-form-radio-group>
              <p v-else>{{ form.Malware_Detection_PC_Mac }}</p>
            </b-form-group>
            <b-form-group
              label="Malware Detection Proficiency PC (Linux):"
              label-for="nested-state"
              v-slot="{ ad3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct3"
                v-model="form.Malware_Detection_PC_Linux"
                :options="options1"
                :aria-describedby="ad3"
                name="ct3"
              ></b-form-radio-group>
              <p v-else>{{ form.Malware_Detection_PC_Linux }}</p>
            </b-form-group>
            <b-form-group
              label="Malware Detection Proficiency Mobile Device (Android):"
              label-for="nested-state"
              v-slot="{ ad4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct4"
                v-model="form.Malware_Detection_Mobile_Android"
                :options="options1"
                :aria-describedby="ad4"
                name="ct4"
              ></b-form-radio-group>
              <p v-else>{{ form.Malware_Detection_Mobile_Android }}</p>
            </b-form-group>
            <b-form-group
              label="Malware Detection Proficiency Mobile Device (IOS):"
              label-for="nested-state"
              v-slot="{ ad5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct5"
                v-model="form.Malware_Detection_Mobile_IOS"
                :options="options1"
                :aria-describedby="ad5"
                name="ct5"
              ></b-form-radio-group>
              <p v-else>{{ form.Malware_Detection_Mobile_IOS }}</p>
            </b-form-group>
            <b-form-group
              label="Proficiency in setting up VPNs:"
              label-for="nested-state"
              v-slot="{ ad6 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct6"
                v-model="form.Setting_up_VPNs"
                :options="options1"
                :aria-describedby="ad6"
                name="ct6"
              ></b-form-radio-group>
              <p v-else>{{ form.Setting_up_VPNs }}</p>
            </b-form-group>
            <b-form-group
              label="Proficiency in setting up secure wired LAN:"
              label-for="nested-state"
              v-slot="{ ad7 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct7"
                v-model="form.Setting_up_secure_wired_LAN"
                :options="options1"
                :aria-describedby="ad7"
                name="ct7"
              ></b-form-radio-group>
              <p v-else>{{ form.Setting_up_secure_wired_LAN }}</p>
            </b-form-group>
            <b-form-group
              label="Proficiency in setting up secure wireless LAN:"
              label-for="nested-state"
              v-slot="{ ad8 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct9"
                v-model="form.Setting_up_secure_wireless_LAN"
                :options="options1"
                :aria-describedby="ad8"
                name="ct9"
              ></b-form-radio-group>
              <p v-else>{{ form.Setting_up_secure_wireless_LAN }}</p>
            </b-form-group>
            <b-form-group
              label="Proficiency in configuring and hardening networks:"
              label-for="nested-state"
              v-slot="{ ad9 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct10"
                v-model="form.Configure_and_harden_networks"
                :options="options1"
                :aria-describedby="ad9"
                name="ct10"
              ></b-form-radio-group>
              <p v-else>{{ form.Configure_and_harden_networks }}</p>
            </b-form-group>
            <!-- <b-form-group
            label="Aircrack ng:"
            label-for="nested-city"
            v-slot="{ ariaDescribedby2 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct11"
              v-model="form.Aircrack_ng"
              :options="options1"
              :aria-describedby="ariaDescribedby2"
              name="ct11"
            ></b-form-radio-group>
            <p v-else>{{ form.Aircrack_ng }}</p>
          </b-form-group>
          <b-form-group
            label="Autopsy:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct12"
              v-model="form.Autopsy"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct12"
            ></b-form-radio-group>
            <p v-else>{{ form.Autopsy }}</p>
          </b-form-group>
          <b-form-group
            label="Cisco:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct13"
              v-model="form.Cisco"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct13"
            ></b-form-radio-group>
            <p v-else>{{ form.Cisco }}</p>
          </b-form-group>
          <b-form-group
            label="Darktrace:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct14"
              v-model="form.Darktrace"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct14"
            ></b-form-radio-group>
            <p v-else>{{ form.Darktrace }}</p>
          </b-form-group>
          <b-form-group
            label="Elasticsearch:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct15"
              v-model="form.Elasticsearch"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct16"
            ></b-form-radio-group>
            <p v-else>{{ form.Elasticsearch }}</p>
          </b-form-group>
          <b-form-group
            label="EnCase:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct17"
              v-model="form.EnCase"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct17"
            ></b-form-radio-group>
            <p v-else>{{ form.EnCase }}</p>
          </b-form-group>
          <b-form-group
            label="Eyewitness:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct18"
              v-model="form.Eyewitness"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct18"
            ></b-form-radio-group>
            <p v-else>{{ form.Eyewitness }}</p>
          </b-form-group>
          <b-form-group
            label="Forensic Tool Kit:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct19"
              v-model="form.Forensic_Tool_Kit"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct19"
            ></b-form-radio-group>
            <p v-else>{{ form.Forensic_Tool_Kit }}</p>
          </b-form-group>
          <b-form-group
            label="Kali Linux:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct20"
              v-model="form.Kali_Linux"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct20"
            ></b-form-radio-group>
            <p v-else>{{ form.Kali_Linux }}</p>
          </b-form-group>
          <b-form-group
            label="Kibana:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct21"
              v-model="form.Kibana"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct21"
            ></b-form-radio-group>
            <p v-else>{{ form.Kibana }}</p>
          </b-form-group>
          <b-form-group
            label="Logstash:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct22"
              v-model="form.Logstash"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct22"
            ></b-form-radio-group>
            <p v-else>{{ form.Logstash }}</p>
          </b-form-group>
          <b-form-group
            label="Logzilla:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct23"
              v-model="form.Logzilla"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct23"
            ></b-form-radio-group>
            <p v-else>{{ form.Logzilla }}</p>
          </b-form-group>
          <b-form-group
            label="Metasploit:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct24"
              v-model="form.Metasploit"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct24"
            ></b-form-radio-group>
            <p v-else>{{ form.Metasploit }}</p>
          </b-form-group>
          <b-form-group
            label="Nessus:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct25"
              v-model="form.Nessus"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct25"
            ></b-form-radio-group>
            <p v-else>{{ form.Nessus }}</p>
          </b-form-group>
          <b-form-group
            label="NetSim:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct26"
              v-model="form.NetSim"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct26"
            ></b-form-radio-group>
            <p v-else>{{ form.NetSim }}</p>
          </b-form-group>
          <b-form-group
            label="Nmap:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct27"
              v-model="form.Nmap"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct27"
            ></b-form-radio-group>
            <p v-else>{{ form.Nmap }}</p>
          </b-form-group>
          <b-form-group
            label="Octopussy:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct28"
              v-model="form.Octopussy"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct28"
            ></b-form-radio-group>
            <p v-else>{{ form.Octopussy }}</p>
          </b-form-group>
          <b-form-group
            label="Packet Tracer:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct29"
              v-model="form.Packet_Tracer"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct29"
            ></b-form-radio-group>
            <p v-else>{{ form.Packet_Tracer }}</p>
          </b-form-group>
          <b-form-group
            label="Palo Alto:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct30"
              v-model="form.Palo_Alto"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct30"
            ></b-form-radio-group>
            <p v-else>{{ form.Palo_Alto }}</p>
          </b-form-group>
          <b-form-group
            label="Security Onion:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct31"
              v-model="form.Security_Onion"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct31"
            ></b-form-radio-group>
            <p v-else>{{ form.Security_Onion }}</p>
          </b-form-group>
          <b-form-group
            label="Shodan:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct32"
              v-model="form.Shodan"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct32"
            ></b-form-radio-group>
            <p v-else>{{ form.Shodan }}</p>
          </b-form-group>
          <b-form-group
            label="SIFT:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct33"
              v-model="form.SIFT"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct33"
            ></b-form-radio-group>
            <p v-else>{{ form.SIFT }}</p>
          </b-form-group>
          <b-form-group
            label="Snort:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct34"
              v-model="form.Snort"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct34"
            ></b-form-radio-group>
            <p v-else>{{ form.Snort }}</p>
          </b-form-group>
          <b-form-group
            label="Sophos:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct35"
              v-model="form.Sophos"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct35"
            ></b-form-radio-group>
            <p v-else>{{ form.Sophos }}</p>
          </b-form-group>
          <b-form-group
            label="Splunk:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct36"
              v-model="form.Splunk"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct36"
            ></b-form-radio-group>
            <p v-else>{{ form.Splunk }}</p>
          </b-form-group>
          <b-form-group
            label="Sumologic:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct37"
              v-model="form.Sumologic"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct37"
            ></b-form-radio-group>
            <p v-else>{{ form.Sumologic }}</p>
          </b-form-group>
          <b-form-group
            label="Suricata:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct38"
              v-model="form.Suricata"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct38"
            ></b-form-radio-group>
            <p v-else>{{ form.Suricata }}</p>
          </b-form-group>
          <b-form-group
            label="Wireshark:"
            label-for="nested-state"
            v-slot="{ ariaDescribedby3 }"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-radio-group :required= true
              v-if="editable2"
              id="ct39"
              v-model="form.Wireshark"
              :options="options1"
              :aria-describedby="ariaDescribedby3"
              name="ct39"
            ></b-form-radio-group>
            <p v-else>{{ form.Wireshark }}</p>
          </b-form-group> -->
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-191 variant="info"
            ><span style="float: left; font-weight: 800">Section 6.1 of 7</span>
            Cybersecurity Tools Rating</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-191"
          visible
          accordion="my-accordion191"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Aircrack ng:"
              label-for="nested-city"
              v-slot="{ ariaDescribedby2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct11"
                v-model="form.Aircrack_ng"
                :options="options1"
                :aria-describedby="ariaDescribedby2"
                name="ct11"
              ></b-form-radio-group>
              <p v-else>{{ form.Aircrack_ng }}</p>
            </b-form-group>
            <b-form-group
              label="Autopsy:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct12"
                v-model="form.Autopsy"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct12"
              ></b-form-radio-group>
              <p v-else>{{ form.Autopsy }}</p>
            </b-form-group>
            <b-form-group
              label="Cisco:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct13"
                v-model="form.Cisco"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct13"
              ></b-form-radio-group>
              <p v-else>{{ form.Cisco }}</p>
            </b-form-group>
            <b-form-group
              label="Darktrace:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct14"
                v-model="form.Darktrace"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct14"
              ></b-form-radio-group>
              <p v-else>{{ form.Darktrace }}</p>
            </b-form-group>
            <b-form-group
              label="Elasticsearch:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct15"
                v-model="form.Elasticsearch"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct16"
              ></b-form-radio-group>
              <p v-else>{{ form.Elasticsearch }}</p>
            </b-form-group>
            <b-form-group
              label="EnCase:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct17"
                v-model="form.EnCase"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct17"
              ></b-form-radio-group>
              <p v-else>{{ form.EnCase }}</p>
            </b-form-group>
            <b-form-group
              label="Eyewitness:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct18"
                v-model="form.Eyewitness"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct18"
              ></b-form-radio-group>
              <p v-else>{{ form.Eyewitness }}</p>
            </b-form-group>
            <b-form-group
              label="Forensic Tool Kit:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct19"
                v-model="form.Forensic_Tool_Kit"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct19"
              ></b-form-radio-group>
              <p v-else>{{ form.Forensic_Tool_Kit }}</p>
            </b-form-group>
            <b-form-group
              label="Kali Linux:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct20"
                v-model="form.Kali_Linux"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct20"
              ></b-form-radio-group>
              <p v-else>{{ form.Kali_Linux }}</p>
            </b-form-group>
            <b-form-group
              label="Kibana:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct21"
                v-model="form.Kibana"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct21"
              ></b-form-radio-group>
              <p v-else>{{ form.Kibana }}</p>
            </b-form-group>
            <b-form-group
              label="Logstash:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct22"
                v-model="form.Logstash"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct22"
              ></b-form-radio-group>
              <p v-else>{{ form.Logstash }}</p>
            </b-form-group>
            <b-form-group
              label="Logzilla:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct23"
                v-model="form.Logzilla"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct23"
              ></b-form-radio-group>
              <p v-else>{{ form.Logzilla }}</p>
            </b-form-group>
            <b-form-group
              label="Metasploit:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct24"
                v-model="form.Metasploit"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct24"
              ></b-form-radio-group>
              <p v-else>{{ form.Metasploit }}</p>
            </b-form-group>
            <b-form-group
              label="Nessus:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct25"
                v-model="form.Nessus"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct25"
              ></b-form-radio-group>
              <p v-else>{{ form.Nessus }}</p>
            </b-form-group>
            <b-form-group
              label="NetSim:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct26"
                v-model="form.NetSim"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct26"
              ></b-form-radio-group>
              <p v-else>{{ form.NetSim }}</p>
            </b-form-group>
            <b-form-group
              label="Nmap:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct27"
                v-model="form.Nmap"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct27"
              ></b-form-radio-group>
              <p v-else>{{ form.Nmap }}</p>
            </b-form-group>
            <b-form-group
              label="Octopussy:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct28"
                v-model="form.Octopussy"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct28"
              ></b-form-radio-group>
              <p v-else>{{ form.Octopussy }}</p>
            </b-form-group>
            <b-form-group
              label="Packet Tracer:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct29"
                v-model="form.Packet_Tracer"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct29"
              ></b-form-radio-group>
              <p v-else>{{ form.Packet_Tracer }}</p>
            </b-form-group>
            <b-form-group
              label="Palo Alto:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct30"
                v-model="form.Palo_Alto"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct30"
              ></b-form-radio-group>
              <p v-else>{{ form.Palo_Alto }}</p>
            </b-form-group>
            <b-form-group
              label="Security Onion:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct31"
                v-model="form.Security_Onion"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct31"
              ></b-form-radio-group>
              <p v-else>{{ form.Security_Onion }}</p>
            </b-form-group>
            <b-form-group
              label="Shodan:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct32"
                v-model="form.Shodan"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct32"
              ></b-form-radio-group>
              <p v-else>{{ form.Shodan }}</p>
            </b-form-group>
            <b-form-group
              label="SIFT:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct33"
                v-model="form.SIFT"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct33"
              ></b-form-radio-group>
              <p v-else>{{ form.SIFT }}</p>
            </b-form-group>
            <b-form-group
              label="Snort:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct34"
                v-model="form.Snort"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct34"
              ></b-form-radio-group>
              <p v-else>{{ form.Snort }}</p>
            </b-form-group>
            <b-form-group
              label="Sophos:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct35"
                v-model="form.Sophos"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct35"
              ></b-form-radio-group>
              <p v-else>{{ form.Sophos }}</p>
            </b-form-group>
            <b-form-group
              label="Splunk:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct36"
                v-model="form.Splunk"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct36"
              ></b-form-radio-group>
              <p v-else>{{ form.Splunk }}</p>
            </b-form-group>
            <b-form-group
              label="Sumologic:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct37"
                v-model="form.Sumologic"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct37"
              ></b-form-radio-group>
              <p v-else>{{ form.Sumologic }}</p>
            </b-form-group>
            <b-form-group
              label="Suricata:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct38"
                v-model="form.Suricata"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct38"
              ></b-form-radio-group>
              <p v-else>{{ form.Suricata }}</p>
            </b-form-group>
            <b-form-group
              label="Wireshark:"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="ct39"
                v-model="form.Wireshark"
                :options="options1"
                :aria-describedby="ariaDescribedby3"
                name="ct39"
              ></b-form-radio-group>
              <p v-else>{{ form.Wireshark }}</p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-11 variant="info"
            ><span style="float: left; font-weight: 800">Section 6.2 of 7</span
            >Endpoint Tools</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-11"
          visible
          accordion="my-accordion11"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Cisco:"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ ed1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="et1"
                v-model="form.Ciscoone"
                :options="options1"
                :aria-describedby="ed1"
                name="et1"
              ></b-form-radio-group>
              <p v-else>{{ form.Ciscoone }}</p>
            </b-form-group>
            <b-form-group
              label="Crowdstrike:"
              label-for="nested-city"
              v-slot="{ ed2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="et2"
                v-model="form.CrowdStrike"
                :options="options1"
                :aria-describedby="ed2"
                name="et2"
              ></b-form-radio-group>
              <p v-else>{{ form.CrowdStrike }}</p>
            </b-form-group>
            <b-form-group
              label="FireEye:"
              label-for="nested-state"
              v-slot="{ ed3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="et3"
                v-model="form.FireEye"
                :options="options1"
                :aria-describedby="ed3"
                name="et3"
              ></b-form-radio-group>
              <p v-else>{{ form.FireEye }}</p>
            </b-form-group>
            <b-form-group
              label="Juniper:"
              label-for="nested-state"
              v-slot="{ ed4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="et4"
                v-model="form.Juniper"
                :options="options1"
                :aria-describedby="ed4"
                name="et4"
              ></b-form-radio-group>
              <p v-else>{{ form.Juniper }}</p>
            </b-form-group>
            <b-form-group
              label="Sophos:"
              label-for="nested-state"
              v-slot="{ ed5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="et5"
                v-model="form.Sophosone"
                :options="options1"
                :aria-describedby="ed5"
                name="et5"
              ></b-form-radio-group>
              <p v-else>{{ form.Sophosone }}</p>
            </b-form-group>
            <b-form-group
              label="Symantec:"
              label-for="nested-state"
              v-slot="{ ed6 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="et6"
                v-model="form.Symantec"
                :options="options1"
                :aria-describedby="ed6"
                name="et6"
              ></b-form-radio-group>
              <p v-else>{{ form.Symantec }}</p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-12 variant="info"
            ><span style="float: left; font-weight: 800">Section 6.3 of 7</span
            >Scripting and Programming Tools</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-12"
          visible
          accordion="my-accordion12"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="Bash:"
              label-for="nested-state"
              v-slot="{ sp8 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc8"
                v-model="form.Bash"
                :options="options1"
                :aria-describedby="sp8"
                name="stc8"
              ></b-form-radio-group>
              <p v-else>{{ form.Bash }}</p>
            </b-form-group>
            <b-form-group
              label="C:"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ sp1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc1"
                v-model="form.C"
                :options="options1"
                :aria-describedby="sp1"
                name="stc1"
              ></b-form-radio-group>
              <p v-else>{{ form.C }}</p>
            </b-form-group>
            <b-form-group
              label="C++:"
              label-for="nested-city"
              v-slot="{ sp2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc2"
                v-model="form.Cplusplus"
                :options="options1"
                :aria-describedby="sp2"
                name="stc2"
              ></b-form-radio-group>
              <p v-else>{{ form.Cplusplus }}</p>
            </b-form-group>
            <b-form-group
              label="Java:"
              label-for="nested-state"
              v-slot="{ sp3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc3"
                v-model="form.Java"
                :options="options1"
                :aria-describedby="sp3"
                name="stc3"
              ></b-form-radio-group>
              <p v-else>{{ form.Java }}</p>
            </b-form-group>
            <b-form-group
              label="Javascript:"
              label-for="nested-state"
              v-slot="{ sp4 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc4"
                v-model="form.Javascript"
                :options="options1"
                :aria-describedby="sp4"
                name="stc4"
              ></b-form-radio-group>
              <p v-else>{{ form.Javascript }}</p>
            </b-form-group>
            <b-form-group
              label="PHP:"
              label-for="nested-state"
              v-slot="{ sp5 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc5"
                v-model="form.php"
                :options="options1"
                :aria-describedby="sp5"
                name="stc5"
              ></b-form-radio-group>
              <p v-else>{{ form.php }}</p>
            </b-form-group>
            <b-form-group
              label="PowerShell:"
              label-for="nested-state"
              v-slot="{ sp6 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc6"
                v-model="form.PowerShell"
                :options="options1"
                :aria-describedby="sp6"
                name="stc6"
              ></b-form-radio-group>
              <p v-else>{{ form.PowerShell }}</p>
            </b-form-group>
            <b-form-group
              label="Python:"
              label-for="nested-state"
              v-slot="{ sp7 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="stc7"
                v-model="form.Python"
                :options="options1"
                :aria-describedby="sp7"
                name="stc7"
              ></b-form-radio-group>
              <p v-else>{{ form.Python }}</p>
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
      <br />
      <b-card bg-variant="light">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            ><span style="float: left; font-weight: 800">Section 7 of 7</span
            >Certifications and Credentials</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion2"
          role="tabpanel"
        >
          <b-card-body>
            <!-- <b-icon v-if="!editable2" style="float:right; margin: 9%" class="button" icon="pencil-square" @click="editable2 = true"></b-icon>
        <b-icon v-if="editable2" style="float:right; margin: 9%" class="button" icon="check2" @click="editable2 = false"></b-icon> -->
            <b-form-group
              label="A+:"
              label-for="nested-street"
              label-cols-sm="3"
              v-slot="{ ariaDescribedby1 }"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="CC1"
                v-model="form.Aplus"
                :options="options"
                :aria-describedby="ariaDescribedby1"
                name="CC1"
              ></b-form-radio-group>
              <p v-else>{{ form.Aplus }}</p>
            </b-form-group>
            <b-form-group
              label="CCN"
              label-for="nested-city"
              v-slot="{ ariaDescribedby2 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc2"
                v-model="form.CCN"
                :options="options"
                :aria-describedby="ariaDescribedby2"
                name="cc2"
              ></b-form-radio-group>
              <p v-else>{{ form.CCN }}</p>
            </b-form-group>
            <b-form-group
              label="CCSA"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc3"
                v-model="form.CCSA"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc3"
              ></b-form-radio-group>
              <p v-else>{{ form.CCSA }}</p>
            </b-form-group>
            <b-form-group
              label="CEH"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc4"
                v-model="form.CEH"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc4"
              ></b-form-radio-group>
              <p v-else>{{ form.CEH }}</p>
            </b-form-group>
            <b-form-group
              label="CISA"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc5"
                v-model="form.CISA"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc5"
              ></b-form-radio-group>
              <p v-else>{{ form.CISA }}</p>
            </b-form-group>
            <b-form-group
              label="CISM"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc6"
                v-model="form.CISM"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc6"
              ></b-form-radio-group>
              <p v-else>{{ form.CISM }}</p>
            </b-form-group>
            <b-form-group
              label="CISSP"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc7"
                v-model="form.CISSP"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc7"
              ></b-form-radio-group>
              <p v-else>{{ form.CISSP }}</p>
            </b-form-group>
            <b-form-group
              label="CPP"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc8"
                v-model="form.CPP"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc8"
              ></b-form-radio-group>
              <p v-else>{{ form.CPP }}</p>
            </b-form-group>
            <b-form-group
              label="CSSLP"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc9"
                v-model="form.CSSLP"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc9"
              ></b-form-radio-group>
              <p v-else>{{ form.CSSLP }}</p>
            </b-form-group>
            <b-form-group
              label="CSX"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc10"
                v-model="form.CSX"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc10"
              ></b-form-radio-group>
              <p v-else>{{ form.CSX }}</p>
            </b-form-group>
            <b-form-group
              label="CTTplus"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc11"
                v-model="form.CTTplus"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc11"
              ></b-form-radio-group>
              <p v-else>{{ form.CTTplus }}</p>
            </b-form-group>
            <b-form-group
              label="GCPM"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc12"
                v-model="form.GCPM"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc12"
              ></b-form-radio-group>
              <p v-else>{{ form.GCPM }}</p>
            </b-form-group>
            <b-form-group
              label="GIAC"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc13"
                v-model="form.GIAC"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc13"
              ></b-form-radio-group>
              <p v-else>{{ form.GIAC }}</p>
            </b-form-group>
            <b-form-group
              label="GPEN"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc14"
                v-model="form.GPEN"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc14"
              ></b-form-radio-group>
              <p v-else>{{ form.GPEN }}</p>
            </b-form-group>
            <b-form-group
              label="GSLC"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc15"
                v-model="form.GSLC"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc15"
              ></b-form-radio-group>
              <p v-else>{{ form.GSLC }}</p>
            </b-form-group>
            <b-form-group
              label="GXPN"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc16"
                v-model="form.GXPN"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc16"
              ></b-form-radio-group>
              <p v-else>{{ form.GXPN }}</p>
            </b-form-group>
            <b-form-group
              label="MCP"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc17"
                v-model="form.MCP"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc17"
              ></b-form-radio-group>
              <p v-else>{{ form.MCP }}</p>
            </b-form-group>
            <b-form-group
              label="MTA"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc18"
                v-model="form.MTA"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc18"
              ></b-form-radio-group>
              <p v-else>{{ form.MTA }}</p>
            </b-form-group>
            <b-form-group
              label="Networkplus"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc19"
                v-model="form.Networkplus"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc19"
              ></b-form-radio-group>
              <p v-else>{{ form.Networkplus }}</p>
            </b-form-group>
            <b-form-group
              label="SANS"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc20"
                v-model="form.SANS"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc20"
              ></b-form-radio-group>
              <p v-else>{{ form.SANS }}</p>
            </b-form-group>
            <b-form-group
              label="Securityplus"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc21"
                v-model="form.Securityplus"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc21"
              ></b-form-radio-group>
              <p v-else>{{ form.Securityplus }}</p>
            </b-form-group>
            <b-form-group
              label="Six_Sigma"
              label-for="nested-state"
              v-slot="{ ariaDescribedby3 }"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-radio-group
                required
                v-if="editable2"
                id="cc22"
                v-model="form.Six_Sigma"
                :options="options"
                :aria-describedby="ariaDescribedby3"
                name="cc22"
              ></b-form-radio-group>
              <p v-else>{{ form.Six_Sigma }}</p>
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
      <br />
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
import mainApi from "../apis/mainApi";
import qs from "qs";
import axios from "axios";
// import authApi from '../apis/auth'
export default {
  data() {
    return {
      editable: false,
      submitted: false,
      usersPresent: false,
      users: [],
      editable2: false,
      ranks: [
        { text: "Service Member", value: "Service Member" },
        { text: "Command Staff", value: "Command Staff" },
        { text: "Training Team", value: "Training Team" },
      ],
      duties: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      options: [
        { text: "NA", value: "NA" },
        { text: "Completed", value: "Completed" },
        { text: "InProgress", value: "InProgress" },
        { text: "Planned", value: "Planned" },
      ],
      options1: [
        { text: "None", value: "None" },
        { text: "Novice", value: "Novice" },
        { text: "Proficient", value: "Proficient" },
        { text: "Expert", value: "Expert" },
      ],
      options3: [
        { text: "None", value: "1" },
        { text: "Novice", value: "2" },
        { text: "Proficient", value: "3" },
        { text: "Expert", value: "4" },
      ],
      form: {
        Current_Duty_Assignment: "",
        K_of_TTPs_used_by_attackers: "",
        A_to_do_actions_related_to_approved_LoE: "",
        A_to_develop_perform_QA_deliver_LoE: "",
        K_of_Network_Operating_Systems_: "",
        K_o_CA_info_tech_roles_reqs_and_org: "",
        K_of_server_based_applications_: "",
        K_of_computer_networking_protocols_: "",
        K_of_network_security__related_concepts: "",
        A_to_effectively_communicate_: "",
        A_to__provide_briefings_with_CMD_staff_: "",
        A_to_deploy_troubleshoot_analyse_CND_tools: "",
        E_w_system_admin_or_hardening_techniques: "",
        K_of_common_network_tools: "",
        E_using_CND_vuln_tools_: "",
        S_in_vulnerability_scans: "",
        S_in_collecting_system__policy_artifacts: "",
        K_of_CND__policies_procedures_and_regs: "",
        E_in_TTPs_pen_test_and_Red_Team: "",
        A_to_direct_mentor_guide: "",
        E_in_Defense_In_Depth_: "",
        K_of_network_protocols_: "",
        K_of_access_control__and_application: "",
        K_of_network_traffic_flows__TCP_IP_OSI: "",
        E_in_use_of_network_vuln_tools: "",
        E_in_using_protocol_analyzers: "",
        E_in_equip_inventory_readiness_data_san: "",
        A_to_assess__Defense_in_Depth_: "",
        A_to_review__network_topologies_: "",
        A_to_perform__network_mapping: "",
        E_in_providing_Tier_II_analysis: "",
        A_to_review_detected_malicious_activity_: "",
        Knowledge_of_VPN_security: "",
        K_of__information_security_standards: "",
        K_of_operational_cybersecurity: "",
        E_in_management_of_IT_security_and_risk: "",
        E_in_internal_and_external_audits_exams: "",
        E_in__policies_procedures_and_standards: "",
        age: "",
        K0004: "",
        K0003: "",
        K0006: "",
        K0015: "",
        K0018: "",
        K0019: "",
        K0026: "",
        K0040: "",
        K0041: "",
        K0042: "",
        K0044: "",
        K0046: "",
        K0049: "",
        K0059: "",
        K0070: "",
        K0093: "",
        K0107: "",
        K0116: "",
        K0142: "",
        K0157: "",
        K0160: "",
        K0161: "",
        K0162: "",
        K0177: "",
        K0180: "",
        K0190: "",
        K0191: "",
        K0192: "",
        K0203: "",
        K0259: "",
        K0287: "",
        K0322: "",
        K0624: "",
        S0020: "",
        S0169: "",
        S0365: "",
        A0066: "",
        A0121: "",
        A0123: "",
        Bash: "",
        C: "",
        Cisco: "",
        Cplusplus: "",
        Java: "",
        Javascript: "",
        php: "",
        PowerShell: "",
        Python: "",
        Ciscoone: "",
        CrowdStrike: "",
        FireEye: "",
        Juniper: "",
        Symantec: "",
        Sophosone: "",
        Aircrack_ng: "",
        Autopsy: "",
        Darktrace: "",
        Elasticsearch: "",
        EnCase: "",
        Eyewitness: "",
        Forensic_Tool_Kit: "",
        Kali_Linux: "",
        Kibana: "",
        Logstash: "",
        Logzilla: "",
        Metasploit: "",
        Nessus: "",
        NetSim: "",
        Nmap: "",
        Octopussy: "",
        Packet_Tracer: "",
        Palo_Alto: "",
        Security_Onion: "",
        Shodan: "",
        SIFT: "",
        Snort: "",
        Sophos: "",
        Splunk: "",
        Sumologic: "",
        Suricata: "",
        Wireshark: "",
        Malware_Detection_PC_Windows: "",
        Malware_Detection_PC_Mac: "",
        Malware_Detection_PC_Linux: "",
        Malware_Detection_Mobile_Android: "",
        Malware_Detection_Mobile_IOS: "",
        Setting_up_VPNs: "",
        Setting_up_secure_wired_LAN: "",
        Setting_up_secure_wireless_LAN: "",
        Configure_and_harden_networks: "",
        Aplus: "",
        CCN: "",
        CCSA: "",
        CEH: "",
        CISA: "",
        CISM: "",
        CISSP: "",
        CPP: "",
        CSSLP: "",
        CSX: "",
        CTTplus: "",
        GCPM: "",
        GIAC: "",
        GPEN: "",
        GSLC: "",
        GXPN: "",
        MCP: "",
        MTA: "",
        Networkplus: "",
        SANS: "",
        Securityplus: "",
        Six_Sigma: "",
        first_name: "",
        last_name: "",
        name: "",
        password: "",
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
    // this.getUserData()
    this.getUserDataInd();
  },
  mounted() {},
  methods: {
    redirectLogin() {
      this.$router.push("/");
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
    getUserDataInd() {
      this.uname = this.$store.state.email;
      this.upass = this.$store.state.password;
      mainApi.getServiceMemberInd(this.uname, this.upass).then((response) => {
        // (this.form.age = response.data.records[0].Age__c),
        // console.log(response)
        this.form.staff = response.data.records[0].Staff_Designation__c,
        (this.form.Current_Duty_Assignment =
          response.data.records[0].Current_Duty_Assignment__c),
          (this.form.K_of_TTPs_used_by_attackers =
            response.data.records[0].K_of_TTPs_used_by_attackers__c),
          (this.form.A_to_do_actions_related_to_approved_LoE =
            response.data.records[0].A_to_do_actions_related_to_approved_LoE__c),
          (this.form.A_to_develop_perform_QA_deliver_LoE =
            response.data.records[0].A_to_develop_perform_QA_deliver_LoE__c),
          (this.form.K_of_Network_Operating_Systems_ =
            response.data.records[0].K_of_Network_Operating_Systems__c),
          (this.form.K_o_CA_info_tech_roles_reqs_and_org =
            response.data.records[0].K_o_CA_info_tech_roles_reqs_and_org__c),
          (this.form.K_of_server_based_applications_ =
            response.data.records[0].K_of_server_based_applications__c),
          (this.form.K_of_computer_networking_protocols_ =
            response.data.records[0].K_of_computer_networking_protocols__c),
          (this.form.K_of_network_security__related_concepts =
            response.data.records[0].K_of_network_security_related_concepts__c),
          (this.form.A_to_effectively_communicate_ =
            response.data.records[0].A_to_effectively_communicate__c),
          (this.form.A_to__provide_briefings_with_CMD_staff_ =
            response.data.records[0].A_to_provide_briefings_with_CMD_staff__c),
          (this.form.A_to_deploy_troubleshoot_analyse_CND_tools =
            response.data.records[0].A_to_deploy_troubleshoot_analyse_CND_too__c),
          (this.form.E_w_system_admin_or_hardening_techniques =
            response.data.records[0].E_w_system_admin_or_hardening_techniques__c),
          (this.form.K_of_common_network_tools =
            response.data.records[0].K_of_common_network_tools__c),
          (this.form.E_using_CND_vuln_tools_ =
            response.data.records[0].E_using_CND_vuln_tools__c),
          (this.form.S_in_vulnerability_scans =
            response.data.records[0].S_in_vulnerability_scans__c),
          (this.form.S_in_collecting_system__policy_artifacts =
            response.data.records[0].S_in_collecting_system_policy_artifacts__c),
          (this.form.K_of_CND__policies_procedures_and_regs =
            response.data.records[0].K_of_CND_policies_procedures_and_regs__c),
          (this.form.E_in_TTPs_pen_test_and_Red_Team =
            response.data.records[0].E_in_TTPs_pen_test_and_Red_Team__c),
          (this.form.A_to_direct_mentor_guide =
            response.data.records[0].A_to_direct_mentor_guide__c),
          (this.form.E_in_Defense_In_Depth_ =
            response.data.records[0].E_in_Defense_In_Depth__c),
          (this.form.K_of_network_protocols_ =
            response.data.records[0].K_of_network_protocols__c),
          (this.form.K_of_access_control__and_application =
            response.data.records[0].K_of_access_control_and_application__c),
          (this.form.K_of_network_traffic_flows__TCP_IP_OSI =
            response.data.records[0].K_of_network_traffic_flows_TCP_IP_OSI__c),
          (this.form.E_in_use_of_network_vuln_tools =
            response.data.records[0].E_in_use_of_network_vuln_tools__c),
          (this.form.E_in_using_protocol_analyzers =
            response.data.records[0].E_in_using_protocol_analyzers__c),
          (this.form.E_in_equip_inventory_readiness_data_san =
            response.data.records[0].E_in_equip_inventory_readiness_data_san__c),
          (this.form.A_to_assess__Defense_in_Depth_ =
            response.data.records[0].A_to_assess_Defense_in_Depth__c),
          (this.form.A_to_review__network_topologies_ =
            response.data.records[0].A_to_review_network_topologies__c),
          (this.form.A_to_perform__network_mapping =
            response.data.records[0].A_to_perform_network_mapping__c),
          (this.form.E_in_providing_Tier_II_analysis =
            response.data.records[0].E_in_providing_Tier_II_analysis__c),
          (this.form.A_to_review_detected_malicious_activity_ =
            response.data.records[0].A_to_review_detected_malicious_activity__c),
          (this.form.Knowledge_of_VPN_security =
            response.data.records[0].Knowledge_of_VPN_security__c),
          (this.form.K_of__information_security_standards =
            response.data.records[0].K_of_information_security_standards__c),
          (this.form.K_of_operational_cybersecurity =
            response.data.records[0].K_of_operational_cybersecurity__c),
          (this.form.E_in_management_of_IT_security_and_risk =
            response.data.records[0].E_in_management_of_IT_security_and_risk__c),
          (this.form.E_in_internal_and_external_audits_exams =
            response.data.records[0].E_in_internal_and_external_audits_exams__c),
          (this.form.E_in__policies_procedures_and_standards =
            response.data.records[0].E_in_policies_procedures_and_standards__c),
          (this.form.K0004 = response.data.records[0].K0004__c),
          (this.form.K0003 = response.data.records[0].K0003__c),
          (this.form.K0006 = response.data.records[0].K0006__c),
          (this.form.K0015 = response.data.records[0].K0015__c),
          (this.form.K0018 = response.data.records[0].K0018__c),
          (this.form.K0019 = response.data.records[0].K0019__c),
          (this.form.K0026 = response.data.records[0].K0026__c),
          (this.form.K0040 = response.data.records[0].K0040__c),
          (this.form.K0041 = response.data.records[0].K0041__c),
          (this.form.K0042 = response.data.records[0].K0042__c),
          (this.form.K0044 = response.data.records[0].K0044__c),
          (this.form.K0046 = response.data.records[0].K0046__c),
          (this.form.K0049 = response.data.records[0].K0049__c),
          (this.form.K0059 = response.data.records[0].K0059__c),
          (this.form.K0070 = response.data.records[0].K0070__c),
          (this.form.K0093 = response.data.records[0].K0093__c),
          (this.form.K0107 = response.data.records[0].K0107__c),
          (this.form.K0116 = response.data.records[0].K0116__c),
          (this.form.K0142 = response.data.records[0].K0142__c),
          (this.form.K0157 = response.data.records[0].K0157__c),
          (this.form.K0160 = response.data.records[0].K0160__c),
          (this.form.K0161 = response.data.records[0].K0161__c),
          (this.form.K0162 = response.data.records[0].K0162__c),
          (this.form.K0177 = response.data.records[0].K0177__c),
          (this.form.K0180 = response.data.records[0].K0180__c),
          (this.form.K0190 = response.data.records[0].K0190__c),
          (this.form.K0191 = response.data.records[0].K0191__c),
          (this.form.K0192 = response.data.records[0].K0192__c),
          (this.form.K0203 = response.data.records[0].K0203__c),
          (this.form.K0259 = response.data.records[0].K0259__c),
          (this.form.K0287 = response.data.records[0].K0287__c),
          (this.form.K0322 = response.data.records[0].K0322__c),
          (this.form.K0624 = response.data.records[0].K0624__c),
          (this.form.S0020 = response.data.records[0].S0020__c),
          (this.form.S0169 = response.data.records[0].S0169__c),
          (this.form.S0365 = response.data.records[0].S0365__c),
          (this.form.A0066 = response.data.records[0].A0066__c),
          (this.form.A0121 = response.data.records[0].A0121__c),
          (this.form.A0123 = response.data.records[0].A0123__c),
          // age__c: this.form.age,
          (this.form.Bash =
            response.data.records[0].Scripting_and_Programming_Tools_Bash__c),
          (this.form.C =
            response.data.records[0].Scripting_and_Programming_Tools_C__c),
          (this.form.Cplusplus =
            response.data.records[0].Scripting_and_Programming_Tools_C_1__c),
          (this.form.Java =
            response.data.records[0].Scripting_and_Programming_Tools_Java__c),
          (this.form.Javascript =
            response.data.records[0].Scripting_Programming_Tools_Javascript__c),
          (this.form.php =
            response.data.records[0].Scripting_and_Programming_Tools_php__c),
          (this.form.PowerShell =
            response.data.records[0].Scripting_Programming_Tools_PowerShell__c),
          (this.form.Python =
            response.data.records[0].Scripting_and_Programming_Tools_Python__c),
          (this.form.Ciscoone =
            response.data.records[0].Endpoint_tools_Cisco__c),
          (this.form.CrowdStrike =
            response.data.records[0].Endpoint_tools_CrowdStrike__c),
          (this.form.FireEye =
            response.data.records[0].Endpoint_tools_FireEye__c),
          (this.form.Juniper =
            response.data.records[0].Endpoint_tools_Juniper__c),
          (this.form.Symantec =
            response.data.records[0].Endpoint_tools_Symantec_Norton__c),
          (this.form.Sophosone =
            response.data.records[0].Endpoint_tools_Sophos__c),
          (this.form.Aircrack_ng =
            response.data.records[0].Cybersecurity_Tools_Aircrack_ng__c),
          (this.form.Autopsy =
            response.data.records[0].Cybersecurity_Tools_Autopsy__c),
          (this.form.Cisco =
            response.data.records[0].Cybersecurity_Tools_Cisco__c),
          (this.form.Darktrace =
            response.data.records[0].Cybersecurity_Tools_Darktrace__c),
          (this.form.Elasticsearch =
            response.data.records[0].Cybersecurity_Tools_Elasticsearch__c),
          (this.form.EnCase =
            response.data.records[0].Cybersecurity_Tools_EnCase__c),
          (this.form.Eyewitness =
            response.data.records[0].Cybersecurity_Tools_Eyewitness__c),
          (this.form.Forensic_Tool_Kit =
            response.data.records[0].Cybersecurity_Tools_Forensic_Tool_Kit__c),
          (this.form.Kali_Linux =
            response.data.records[0].Cybersecurity_Tools_Kali_Linux__c),
          (this.form.Kibana =
            response.data.records[0].Cybersecurity_Tools_Kibana__c),
          (this.form.Logstash =
            response.data.records[0].Cybersecurity_Tools_Logstash__c),
          (this.form.Logzilla =
            response.data.records[0].Cybersecurity_Tools_Logzilla__c),
          (this.form.Metasploit =
            response.data.records[0].Cybersecurity_Tools_Metasploit__c),
          (this.form.Nessus =
            response.data.records[0].Cybersecurity_Tools_Nessus__c),
          (this.form.NetSim =
            response.data.records[0].Cybersecurity_Tools_NetSim__c),
          (this.form.Nmap =
            response.data.records[0].Cybersecurity_Tools_Nmap__c),
          (this.form.Octopussy =
            response.data.records[0].Cybersecurity_Tools_Octopussy__c),
          (this.form.Packet_Tracer =
            response.data.records[0].Cybersecurity_Tools_Packet_Tracer__c),
          (this.form.Palo_Alto =
            response.data.records[0].Cybersecurity_Tools_Palo_Alto__c),
          (this.form.Security_Onion =
            response.data.records[0].Cybersecurity_Tools_Security_Onion__c),
          (this.form.Shodan =
            response.data.records[0].Cybersecurity_Tools_Shodan__c),
          (this.form.SIFT =
            response.data.records[0].Cybersecurity_Tools_SIFT__c),
          (this.form.Snort =
            response.data.records[0].Cybersecurity_Tools_Snort__c),
          (this.form.Sophos =
            response.data.records[0].Cybersecurity_Tools_Sophos__c),
          (this.form.Splunk =
            response.data.records[0].Cybersecurity_Tools_Splunk__c),
          (this.form.Sumologic =
            response.data.records[0].Cybersecurity_Tools_Sumologic__c),
          (this.form.Suricata =
            response.data.records[0].Cybersecurity_Tools_Suricata__c),
          (this.form.Wireshark =
            response.data.records[0].Cybersecurity_Tools_Wireshark__c),
          (this.form.Malware_Detection_PC_Windows =
            response.data.records[0].Malware_Detection_Prof_PC_Windows__c),
          (this.form.Malware_Detection_PC_Mac =
            response.data.records[0].Malware_Detection_Proficiency_PC_Mac__c),
          (this.form.Malware_Detection_PC_Linux =
            response.data.records[0].Malware_Detection_Proficiency_PC_Linux__c),
          (this.form.Malware_Detection_Mobile_Android =
            response.data.records[0].Malware_Detection_Prof_Mobile_Android__c),
          (this.form.Malware_Detection_Mobile_IOS =
            response.data.records[0].Malware_Detection_Prof_Mobile_IOS__c),
          (this.form.Setting_up_VPNs =
            response.data.records[0].Proficiency_in_setting_up_VPNs__c),
          (this.form.Setting_up_secure_wired_LAN =
            response.data.records[0].Prof_in_setting_up_secure_wired_LAN__c),
          (this.form.Setting_up_secure_wireless_LAN =
            response.data.records[0].Prof_in_setting_up_secure_wireless_LAN__c),
          (this.form.Configure_and_harden_networks =
            response.data.records[0].Prof_in_configuring_hardening_networks__c),
          (this.form.Aplus = response.data.records[0].Certifications_Aplus__c),
          (this.form.CCN = response.data.records[0].Certifications_CCN__c),
          (this.form.CCSA = response.data.records[0].Certifications_CCSA__c),
          (this.form.CEH = response.data.records[0].Certifications_CEH__c),
          (this.form.CISA = response.data.records[0].Certifications_CISA__c),
          (this.form.CISM = response.data.records[0].Certifications_CISM__c),
          (this.form.CISSP = response.data.records[0].Certifications_CISSP__c),
          (this.form.CPP = response.data.records[0].Certifications_CPP__c),
          (this.form.CSSLP = response.data.records[0].Certifications_CSSLP__c),
          (this.form.CSX = response.data.records[0].Certifications_CSX__c),
          (this.form.CTTplus = response.data.records[0].Certifications_CTT__c),
          (this.form.GCPM = response.data.records[0].Certifications_GCPM__c),
          (this.form.GIAC = response.data.records[0].Certifications_GIAC__c),
          (this.form.GPEN = response.data.records[0].Certifications_GPEN__c),
          (this.form.GSLC = response.data.records[0].Certifications_GSLC__c),
          (this.form.GXPN = response.data.records[0].Certifications_GXPN__c),
          (this.form.MCP = response.data.records[0].Certifications_MCP__c),
          (this.form.MTA = response.data.records[0].Certifications_MTA__c),
          (this.form.Networkplus =
            response.data.records[0].Certifications_Network__c),
          (this.form.SANS = response.data.records[0].Certifications_SANS__c),
          (this.form.Securityplus =
            response.data.records[0].Certifications_Security__c),
          (this.form.Six_Sigma =
            response.data.records[0].Certifications_Six_Sigma__c),
          (this.form.first_name = response.data.records[0].FirstName__c),
          (this.form.last_name = response.data.records[0].LastName__c),
          (this.form.name = response.data.records[0].Name),
          (this.form.password = response.data.records[0].password__c),
          (this.form.rank = response.data.records[0].GradeRank__c),
          // Current_Duty_Assignment__c: this.form.duty,
          (this.form.tac = response.data.records[0].tac__c),
          (this.form.loe = response.data.records[0].loe__c),
          (this.form.it = response.data.records[0].it__c);
      });
    },
    postUserData() {
      const data = {
        // age__c: this.form.age,
        firstName__c: this.form.first_name,
        lastName__c: this.form.last_name,
        name: this.form.name,
        password__c: this.form.password,
        GradeRank__c: this.form.rank,
        Current_Duty_Assignment__c: this.form.duty,
        tac__c: this.form.tac,
        loe__c: this.form.loe,
        it__c: this.form.it,
      };
      mainApi.postServiceMember(data).then((response) => {
        console.log(response);
        this.submitted = true;
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
.align-left {
  text-align: left;
  margin: 0 10% 0 10%;
}
.hello {
  margin: 3% 10% 10% 10%;
}
.card-body {
  background-color: #072952;
  border: #17c1fb;
}
label {
  color: white;
}
.line {
  margin: 0 10% 0 10%;
  color: #17c1fb;
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
  background-color: #18365d;
}
.bg-light {
  border: #17c1fb;
}
p {
  color: #17c1fb;
}
.form-control {
  background-color: #25405e;
  color: white;
  border: none;
}
.form-control:focus {
  background-color: #25405e;
  color: white;
  border: none;
}
.btn-info {
  background-color: #17c1fb;
  color: white;
}
.btn-info:hover {
  background-color: #17c1fb;
  color: white;
}
.btn-info:focus {
  background-color: #17c1fb;
  color: white;
}
</style>
