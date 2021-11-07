import http from '../utils/http-common'

export default class UserForm {
  static getServiceMembers () {
    return http.get('data/v52.0/query?q=SELECT FirstName__c, LastName__c ,AGE__c, RANK__c, DUTY__c, TAC__c, LOE__c, IT__c  From ServiceMember__c')
  }

  static getFilteredData (skill, skillVal, rankVal,firstname, con1, con2) {
    var skillEquation = ''
    var rankEquation = ''
    var nameEquation = ''
    if(skillVal != '') {
      skillEquation = skill +" ='"+ skillVal +"'" 
    }
    if(rankVal != '' || rankVal != null) {
      rankEquation = "RANK__c ='"+ rankVal +"'"
    } else {
      rankEquation = ''
    }
    if ((rankVal != '' || rankVal != null) && (skillVal != '' || skillVal != null)) {
      rankEquation += " " + con2 + " "
    } else {
      rankEquation = ''
    }
    if (firstname != '' || firstname != null) {
      nameEquation = "FirstName__c ='" + firstname +"'"
    } else {
      nameEquation = ''
    }

    if ((firstname != '' || firstname != null) && (rankVal != '' || rankVal != null)) {
      nameEquation += " " + con1 + " "
    } else {
      nameEquation = ''
    }
    // if(skillVal != null) {
    //   skillEquation = skill +" ='"+ skillVal +"'" 
    // }
    // if(rankVal != null) {
    //   rankEquation = "RANK__c ='"+ rankVal +"'"
    // } else {
    //   rankEquation = ''
    // }
    // if ((rankVal != null) && (skillVal != null)) {
    //   rankEquation += " " + con2 + " "
    // } else {
    //   rankEquation = ''
    // }
    // console.log(firstname + "Hello")
    // if (firstname != '') {
    //   nameEquation = "FirstName__c ='" + firstname +"'"
    // } else {
    //   nameEquation = ''
    // }

    // if ((firstname != '') && (rankVal != null)) {
    //   nameEquation += " " + con1 + " "
    // } else {
    //   nameEquation = ''
    // }
    
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c ,AGE__c, RANK__c, DUTY__c, TAC__c, LOE__c, IT__c  From ServiceMember__c WHERE "+ nameEquation + rankEquation + skillEquation);
  }

  static checkLogin (name, password) {
    return http.get("data/v52.0/query?q=SELECT Id, isAdmin__c From ServiceMember__c WHERE Name ='" + name +"' AND Password__c='"+ password +"'");
  }

  static getServiceMemberInd(uname,upass) {
    return http.get("data/v52.0/query?q=SELECT Id, FirstName__c, LastName__c, Name, AGE__c, RANK__c, DUTY__c, TAC__c, LOE__c, IT__c From ServiceMember__c WHERE Name ='" + uname +"' AND Password__c='"+ upass +"'")
  }

  static getCountsService () {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE RANK__C = 'Service Member'")
  }

  static getCountsCommand () {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE RANK__C = 'Command Staff'")
  }

  static getCountsTraining () {
    return http.get("data/v52.0/query?q=SELECT COUNT() From ServiceMember__c WHERE RANK__C = 'Training Team'")
  }

  static getRankList (rankVal) {
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c ,AGE__c, RANK__c, DUTY__c, TAC__c, LOE__c, IT__c  From ServiceMember__c WHERE RANK__c ='"+ rankVal +"'")
  }

  static getSkillsList (skill, val) {
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c ,AGE__c, RANK__c, DUTY__c, TAC__c, LOE__c, IT__c  From ServiceMember__c WHERE "+ skill +" ='"+ val +"'")
  }

  static getServiceMemberByName (nameSearch) {
    return http.get("data/v52.0/query?q=SELECT FirstName__c, LastName__c ,AGE__c, RANK__c, DUTY__c, TAC__c, LOE__c, IT__c  From ServiceMember__c WHERE FirstName__c = '"+ nameSearch +"'")
  }

  static getAuth (data) {
      if (data) {
        return http.post('oauth2/token', data)
      }
  }

  static postServiceMember (data) {
    if (data) {
      return http.post('data/v52.0/sobjects/ServiceMember__C/', data)
    }
  }
}
