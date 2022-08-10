Feature: End to End Test for Student Management REST api

Description: The purpose of these tests are to cover End 2 End Happy flows for student data.

Student Management REST api Swagger URL : http://localhost:9080/swagger-ui.html#/


Scenario Outline: User is able to add student
  Given The student data id as <id>, firstName as <firstName>, lastName as <lastName>, studentClass as <studentClass> and nationality as <nationality>
   When I add a student
   Then The student is added
   When I add a student again
   Then Error code 500 is returned
  Examples: 
    | firstName | lastName | studentClass  | nationality | id | 
    | "Sam"     | "John"   | "Elementary"  | "Canada"    | 1  | 
    | "Ann"     | "John"   | "Junior High" | "Germany"   | 2  | 

Scenario Outline: Fetch Students
  Given A list of students are available
   When I fetch the student all students
   Then The student data id is <id>
    And I fetch the student by <id>
   Then The first name of the student is <firstName>
    And I fetch the student by <studentClass>
   Then The student data id is <id>
    And I fetch the student by <id> and <studentClass>
   Then The first name of the student is <firstName>
  Examples: 
    | firstName | lastName | studentClass  | nationality | id | 
    | "Sam"     | "John"   | "Elementary"  | "Canada"    | 1  | 
    | "Ann"     | "John"   | "Junior High" | "Germany"   | 2  | 

Scenario Outline: User is able to update an existing student data
  Given A particular student with id <id> is present
   When I update the student data with id as <id> with class as <newClass>
   Then The student data for id <id> is updated with class as <newClass>
  Examples: 
    | id | newClass      | 
    | 1  | "Junior High" | 
    | 2  | "High"        | 

Scenario Outline: User is able to update an non-existing student data
   When I update the student data with id as <id> with class as <newClass>
   Then Error code 500 is returned
  Examples: 
    | id | newClass      | 
    | 3  | "Junior High" | 

Scenario Outline: User is able to delete a student 
   When I delete a student with id as <id>
   Then The student is deleted
   When I delete a student with id as <id> again
   Then Error code 500 is returned
  Examples: 
    | id | 
    | 1  | 
    | 2  | 
   