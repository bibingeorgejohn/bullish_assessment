package stepDefinitions;

import org.hamcrest.MatcherAssert;
import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utils.utils;

public class steps {
	private static final String BASE_URL = "http://localhost:9080";

	private static Response response;
	private static String jsonString;
	private static int student_id = 1;
	private static String first_Name = "John";
	private static String last_Name = "Bravo";
	private static String student_class = "Elementary";
	private static String student_nationality = "USA";
	private static utils utils = new utils();

	@Given("The student data id as {int}, firstName as {string}, lastName as {string}, studentClass as {string} and nationality as {string}")
	public void the_student_data_firstName_as_lastName_as_studentClass_as_and_nationality_as(int id, String firstName,
			String lastName, String studentClass, String nationality) {
		first_Name = firstName;
		last_Name = lastName;
		student_class = studentClass;
		student_nationality = nationality;
		student_id = id;
		Assert.assertFalse("first name is null", firstName.equals(""));
		Assert.assertFalse("last name is null", lastName.equals(""));
		Assert.assertFalse("student class is null", studentClass.equals(""));
		Assert.assertFalse("nationality is null", nationality.equals(""));
	}

	@When("I add a student")
	public void i_add_a_student() {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request
				.body(utils.create_message(first_Name, last_Name, student_class, student_nationality, student_id))
				.post("/studentmgmt/addStudent");

	}

	// I add a student again
	@When("I add a student again")
	public void i_add_a_student_again() {
		i_add_a_student();
	}

	@Then("The student is added")
	public void the_student_is_added() {
		Assert.assertEquals(200, response.getStatusCode());

	}

	@Given("A particular student with id {int} is present")
	public void a_particular_student_with_id_is_present(int id) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents?id=" + id);
		JsonPath jsonPath = JsonPath.from(response.asString());
		Assert.assertTrue(jsonPath.getList("id").contains(id));
		student_id = (Integer) jsonPath.getList("id").get(0);
		first_Name = jsonPath.getList("firstName").get(0).toString();
		last_Name = jsonPath.getList("lastName").get(0).toString();
		student_class = jsonPath.getList("studentClass").get(0).toString();
		student_nationality = jsonPath.getList("nationality").get(0).toString();
	}

	@When("I update the student data with id as {int} with class as {string}")
	public void i_update_the_student_data(int id, String newClass) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		System.out.println(utils.create_message(first_Name, last_Name, newClass, student_nationality, student_id));
		response = request.body(utils.create_message(first_Name, last_Name, newClass, student_nationality, student_id))
				.put("/studentmgmt/updateStudent");
		Assert.assertTrue("Status code", response.statusCode() == 200);
	}

	@Then("The student data for id {int} is updated with class as {string}")
	public void the_student_data_is_updated(int id, String newClass) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents?id=" + id);

	}

	@Given("A list of students are available")
	public void a_list_of_students_are_available() {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents");

		jsonString = response.asString();
		Assert.assertTrue(!jsonString.isEmpty());

	}

	@When("I delete a student with id as {int}")
	public void i_delete_a_student(int id) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = request.body("{\r\n" + "  \"id\": " + id + "\r\n" + "}").delete("/studentmgmt/deleteStudent");
	}

	@Then("The student is deleted")
	public void the_student_is_deleted() {
		Assert.assertEquals(200, response.getStatusCode());
	}

	@When("I fetch the student all students")
	public void i_fetch_the_student_all_students() {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents");
	}

	@Then("The student data id is {int}")
	public void the_student_data_id_is(Integer id) {
		JsonPath jsonPath = JsonPath.from(response.asString());
		MatcherAssert.assertThat("Hello", jsonPath.getList("id").contains(id));
	}

	@Then("I fetch the student by {int}")
	public void i_fetch_the_student_by(Integer id) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents?id=" + id);
	}

	@Then("The first name of the student is {string}")
	public void the_first_name_of_the_student_is(String firstname) {
		JsonPath jsonPath = JsonPath.from(response.asString());
		MatcherAssert.assertThat("Hello", jsonPath.getList("firstName").contains(firstname));

	}

	@Then("I fetch the student by {string}")
	public void i_fetch_the_student_by_studentClass(String studentClass) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents?studentclass=" + studentClass);
	}

	@When("I fetch the student by {int} and {string}")
	public void i_fetch_the_student_by_and_studentClasse(Integer id, String studentClass) {
		RestAssured.baseURI = BASE_URL;
		RequestSpecification request = RestAssured.given();
		response = request.get("/studentmgmt/fetchStudents?studentclass=" + studentClass + "&id= " + id);
	}

	@When("I delete a student with id as {int} again")
	public void i_delete_a_student_with_id_as_again(Integer id) {
		i_delete_a_student(id);
	}

	@Then("Error code {int} is returned")
	public void error_code_is_returned(Integer int1) {
		MatcherAssert.assertThat("Wrong Error Code", response.statusCode() == int1);
	}

}
