import { test, expect, Page } from '@playwright/test'
import { captureText, clickByIndex, navigate, sendKeys } from '../main/reusableLibrary/elementActions'
import {allure} from "allure-playwright"
import { Context } from 'vm';

let page: Page


//Setting the browser context and initializing page
 test.beforeAll(async ( { browser } ) => {
    page = await browser.newPage()
})

//close the browser after all test
test.afterAll(async ({ }, testInfo) => {
    await page.close()    
})

test("Search for BMW on Search Field",async() => {
    //navigate to google
    await navigate(page,"https://www.google.com")
    //type bmw on your search field
    await sendKeys(page,"xpath=//*[@name='q']","BMW","Search Field")
    //click on google search by index
    await clickByIndex(page, "xpath=//*[@name='btnK']",1,"Google Search Button")
    //store the search results text in a variable
    let result = await captureText(page,"xpath=//*[@id='result-stats']","Search Results")
    //capture the search number and print it out
    let arrayResult = result.split(" ")
    console.log("BMW search number is " + arrayResult[1])
    await allure.logStep("BMW search number is " + arrayResult[1])
})//end of test