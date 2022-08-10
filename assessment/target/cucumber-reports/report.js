$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/functionalTests/End2End_Test.feature");
formatter.feature({
  "name": "End to End Test for Student Management REST api",
  "description": "Description: The purpose of these tests are to cover End 2 End Happy flows for student data.\n\nStudent Management REST api Swagger URL : http://localhost:9080/swagger-ui.html#/",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User is able to add student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The student data id as \u003cid\u003e, firstName as \u003cfirstName\u003e, lastName as \u003clastName\u003e, studentClass as \u003cstudentClass\u003e and nationality as \u003cnationality\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I add a student",
  "keyword": "When "
});
formatter.step({
  "name": "The student is added",
  "keyword": "Then "
});
formatter.step({
  "name": "I add a student again",
  "keyword": "When "
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "studentClass",
        "nationality",
        "id"
      ]
    },
    {
      "cells": [
        "\"Sam\"",
        "\"John\"",
        "\"Elementary\"",
        "\"Canada\"",
        "1"
      ]
    },
    {
      "cells": [
        "\"Ann\"",
        "\"John\"",
        "\"Junior High\"",
        "\"Germany\"",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to add student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The student data id as 1, firstName as \"Sam\", lastName as \"John\", studentClass as \"Elementary\" and nationality as \"Canada\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_firstName_as_lastName_as_studentClass_as_and_nationality_as(int,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a student",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_add_a_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student is added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a student again",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_add_a_student_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.error_code_is_returned(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to add student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The student data id as 2, firstName as \"Ann\", lastName as \"John\", studentClass as \"Junior High\" and nationality as \"Germany\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_firstName_as_lastName_as_studentClass_as_and_nationality_as(int,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a student",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_add_a_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student is added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a student again",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_add_a_student_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.error_code_is_returned(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Fetch Students",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A list of students are available",
  "keyword": "Given "
});
formatter.step({
  "name": "I fetch the student all students",
  "keyword": "When "
});
formatter.step({
  "name": "The student data id is \u003cid\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I fetch the student by \u003cid\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "The first name of the student is \u003cfirstName\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I fetch the student by \u003cstudentClass\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "The student data id is \u003cid\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I fetch the student by \u003cid\u003e and \u003cstudentClass\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "The first name of the student is \u003cfirstName\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "studentClass",
        "nationality",
        "id"
      ]
    },
    {
      "cells": [
        "\"Sam\"",
        "\"John\"",
        "\"Elementary\"",
        "\"Canada\"",
        "1"
      ]
    },
    {
      "cells": [
        "\"Ann\"",
        "\"John\"",
        "\"Junior High\"",
        "\"Germany\"",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fetch Students",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A list of students are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.a_list_of_students_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student all students",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_all_students()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student data id is 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_id_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student by 1",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_by(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The first name of the student is \"Sam\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_first_name_of_the_student_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student by \"Elementary\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_by_studentClass(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student data id is 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_id_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student by 1 and \"Elementary\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_by_and_studentClasse(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The first name of the student is \"Sam\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_first_name_of_the_student_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fetch Students",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A list of students are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.a_list_of_students_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student all students",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_all_students()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student data id is 2",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_id_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student by 2",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_by(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The first name of the student is \"Ann\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_first_name_of_the_student_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student by \"Junior High\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_by_studentClass(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student data id is 2",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_id_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fetch the student by 2 and \"Junior High\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_fetch_the_student_by_and_studentClasse(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The first name of the student is \"Ann\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_first_name_of_the_student_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User is able to update an existing student data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A particular student with id \u003cid\u003e is present",
  "keyword": "Given "
});
formatter.step({
  "name": "I update the student data with id as \u003cid\u003e with class as \u003cnewClass\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The student data for id \u003cid\u003e is updated with class as \u003cnewClass\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "newClass"
      ]
    },
    {
      "cells": [
        "1",
        "\"Junior High\""
      ]
    },
    {
      "cells": [
        "2",
        "\"High\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to update an existing student data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A particular student with id 1 is present",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.a_particular_student_with_id_is_present(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update the student data with id as 1 with class as \"Junior High\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_update_the_student_data(int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student data for id 1 is updated with class as \"Junior High\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_is_updated(int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to update an existing student data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A particular student with id 2 is present",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.a_particular_student_with_id_is_present(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update the student data with id as 2 with class as \"High\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_update_the_student_data(int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student data for id 2 is updated with class as \"High\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_data_is_updated(int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User is able to update an non-existing student data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I update the student data with id as \u003cid\u003e with class as \u003cnewClass\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "newClass"
      ]
    },
    {
      "cells": [
        "3",
        "\"Junior High\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to update an non-existing student data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I update the student data with id as 3 with class as \"Junior High\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_update_the_student_data(int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.error_code_is_returned(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User is able to delete a student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I delete a student with id as \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The student is deleted",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete a student with id as \u003cid\u003e again",
  "keyword": "When "
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to delete a student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I delete a student with id as 1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_delete_a_student(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_is_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete a student with id as 1 again",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_delete_a_student_with_id_as_again(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.error_code_is_returned(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to delete a student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I delete a student with id as 2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_delete_a_student(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The student is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.the_student_is_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete a student with id as 2 again",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_delete_a_student_with_id_as_again(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error code 500 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.error_code_is_returned(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/functionalTests/UI_Test.feature");
formatter.feature({
  "name": "WEBUI Test",
  "description": "Description: The purpose of these tests are to cover WEBUI Test of herokuapp.com.\n\nURL : http://the-internet.herokuapp.com/",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigate to http://the-internet.herokuapp.com, click on �Form Authentication� and test the login feature available in that website using Cucumbertest scripts, BDD approach. Generate a suitable reporting system to present the results/identify issues in the application/tests.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The portal \"http://the-internet.herokuapp.com/\" is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.the_portal_is_accessible(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the web-site \"http://the-internet.herokuapp.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_open_the_web_site(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"Form Authentication\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.navigate_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Login Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_should_see_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user name as \"tomsmith\" and password as \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_enter_the_user_name_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_click_on_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Secure Area\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_should_see_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the text \"Welcome to the Secure Area. When you are done click logout below.\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_should_see_the_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Logout\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UITest_steps.i_should_see_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});