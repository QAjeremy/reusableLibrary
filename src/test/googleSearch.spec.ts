import { test, expect, Page } from '@playwright/test';


//any variable can be defined with let or const
//set global variable 
//let page: Page , the same as setting up WebDriver Driver
let page: Page


//create beforeAll function to define only one instance of the page
//where ever the first test ends the second test will pick up from that instance
//use test beforeAll because test 2 is dependant on test 1
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
})


//set up test function which is similar to using @Test annotations in testNG
//search for BMW
test("Search for BMW on Search Field" , async() => {
//navigate to google
await page.goto("https://www.google.com")
//wait a few seconds
await page.waitForTimeout(3000)
//type BMW on your search field
await page.locator("xpath=//*[@name='q']").fill("BMW")
//click on google search button
await page.locator("xpath=//*[@name='btnK']").first().click()


})//end of test 1 (test case based, these test functions are designed like this unlike java, public void static main)


//capture the search result
test("Capture the search number for BMW", async () => {
    //wait few seconds
    await page.waitForTimeout(3000)
    //store the search results text in a variable
    let result = await page.locator("xpath=//*[@id='result-stats']").textContent()
    //capture the search number and print it out
    let arrayResult = result.split(" ")
    console.log("BMW search number is " + arrayResult[1])


})//end of test 2






