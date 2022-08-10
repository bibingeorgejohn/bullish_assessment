package stepDefinitions;

import org.hamcrest.MatcherAssert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class UITest_steps {

	private static WebDriver driver = WebDriverManager.chromedriver().create();

	@Given("The portal {string} is accessible")
	public void the_portal_is_accessible(String string) {
		driver.get(string);
		driver.manage().window().maximize();
		MatcherAssert.assertThat("The portal is not accessible", driver.getTitle().equalsIgnoreCase("The Internet"));
	}

	@When("I open the web-site {string}")
	public void i_open_the_web_site(String string) {
		MatcherAssert.assertThat("Invalid webpage",
				driver.findElement(By.xpath("//h2[contains(text(),'Available Examples')]")).getText()
						.equalsIgnoreCase("Available Examples"));
	}

	@When("Navigate to {string}")
	public void navigate_to(String string) {
		WebElement element = driver.findElement(By.xpath("//a[contains(text(),'" + string + "')]"));
		Actions actions = new Actions(driver);
		actions.moveToElement(element);
		actions.perform();
		element.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Then("I should see the {string}")
	public void i_should_see_the(String string) {

		MatcherAssert.assertThat("Error", driver.findElement(By.xpath("//h2[contains(text(),'" + string + "')]"))
				.getText().equalsIgnoreCase(string));
	}

	@Then("I enter the user name as {string} and password as {string}")
	public void i_enter_the_user_name_as_and_password_as(String string, String string2) {
		driver.findElement(By.xpath("//*[@id=\"username\"]")).sendKeys(string);
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(string2);
	}

	@Then("I click on the {string} button")
	public void i_click_on_the_button(String string) {
		driver.findElement(By.xpath("//*[@id=\"login\"]/button/i")).click();

	}

	@Then("I should see the {string} page")
	public void i_should_see_the_page(String string) {
		MatcherAssert.assertThat("Error",
				driver.findElement(By.xpath("//*[@id=\"content\"]/div/h2")).getText().equalsIgnoreCase(string));
	}

	@Then("I should see the text {string}")
	public void i_should_see_the_text(String string) {
		MatcherAssert.assertThat("Error",
				driver.findElement(By.xpath("//*[@id=\"content\"]/div/h4")).getText().equalsIgnoreCase(string));
	}

	@Then("I should see the {string} button")
	public void i_should_see_the_button(String string) {
		MatcherAssert.assertThat("Error",
				driver.findElement(By.xpath("//*[@id=\"content\"]/div/a/i")).getText().equalsIgnoreCase(string));
	}

}
