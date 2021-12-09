import http from '../utils/http-common'

export default class UserForm {
  static getServiceMembers(columns) {
    var cols = ""
    for (var i = 0; i < columns.length; i++) {
      cols += columns[i] + ","
    }
    cols = cols.slice(0, -1)
    // return http.get('data/v52.0/query?q=SELECT FirstName__c, LastName__c , GradeRank__c, Current_Duty_Assignment__c, TAC__c, LOE__c, IT__c  From ServiceMember__c')
    return http.get('data/v52.0/query?q=SELECT ' + cols + ' From ServiceMember__c WHERE isActive__c = true')
  }
  static getDefaultData() {
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c , GradeRank__c From ServiceMember__c WHERE isActive__c = true")
  }

  static getColumnNames() {
    return http.get('data/v52.0/sobjects/ServiceMember__c/describe')
  }

  static getActive() {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE Current_Duty_Assignment__c = 'Active' AND isActive__c = true")
  }

  static getInactive() {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE Current_Duty_Assignment__c = 'Inactive' AND isActive__c = true")
  }
  static getFilteredData(skill, skillVal, rankVal, con2) {
    var skillEquation = ""
    var rankEquation = ""
    // var nameEquation = ''
    if (skillVal != "") {
      skillEquation = skill + " ='" + skillVal + "'"
    }
    if (rankVal != "" || rankVal != null) {
      rankEquation = "Staff_Designation__c ='" + rankVal + "'"
    } else {
      rankEquation = ""
    }
    console.log("test", (skillVal.length != 0))
    if ((rankVal.length != 0) && (skillVal.length != 0)) {
      rankEquation += " " + con2 + " "
    }
    if ((rankVal.length == 0) && (skillVal.length != 0)) {
      skillEquation = skill + " ='" + skillVal + "'"
      rankEquation = ""
    }
    return http.get("data/v52.0/query?q=SELECT FIELDS(ALL)  From ServiceMember__c WHERE " + rankEquation + skillEquation + " AND isActive__c = true LIMIT 200");
  }

  static getSMEmail(email) {
    return http.get("data/v52.0/query?q=SELECT FIELDS(ALL) From ServiceMember__c WHERE Name ='" + email + "' AND isActive__c = true LIMIT 200");
  }

  static checkLogin(name, password) {
    return http.get("data/v52.0/query?q=SELECT Id, isAdmin__c From ServiceMember__c WHERE Name ='" + name + "' AND Password__c='" + password + "'");
  }

  static getServiceMemberInd(uname, upass) {
    return http.get("data/v52.0/query?q=SELECT FIELDS(ALL) From ServiceMember__c WHERE Name ='" + uname + "' AND Password__c='" + upass + "' AND isActive__c = true LIMIT 200")
  }

  static getCountsService() {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE Staff_Designation__c = 'Service Member' AND isActive__c = true")
  }

  static getCountsCommand() {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE Staff_Designation__c = 'Command Staff' AND isActive__c = true")
  }

  static getCountsTraining() {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE Staff_Designation__c = 'Training Team' AND isActive__c = true")
  }

  static getRankList(rankVal) {
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c , GradeRank__c, Current_Duty_Assignment__c, TAC__c, LOE__c, IT__c  From ServiceMember__c WHERE GradeRank__c ='" + rankVal + "' AND isActive__c = true")
  }

  static getSkillsList(skill, val) {
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c , GradeRank__c, Current_Duty_Assignment__c, TAC__c, LOE__c, IT__c  From ServiceMember__c WHERE " + skill + " ='" + val + "' AND isActive__c = true")
  }

  static getServiceMemberByName(nameSearch) {
    return http.get("data/v52.0/query?q=SELECT FIELDS(ALL) From ServiceMember__c WHERE FirstName__c = '" + nameSearch + "' AND isActive__c = true LIMIT 200")
  }

  static getAuth(data) {
    if (data) {
      return http.post('oauth2/token', data)
    }
  }

  static postServiceMember(data) {
    if (data) {
      return http.post('data/v52.0/sobjects/ServiceMember__C/', data)
    }
  }
}
