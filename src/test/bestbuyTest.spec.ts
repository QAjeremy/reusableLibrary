import { test, expect, Page } from '@playwright/test'


//set ArrayList for products
let products = Array<string>()
products.push("xbox")
products.push("ps4")

test('search for blackfriday products in bestbuy search ', async ({ page }) => {


    //set time limit for explicit wait
    //use let when storing value in a variable
    let timeLimit = 900000


    for (let i = 0; i < products.length; i++) {


        //navigate to bestbuy
        //use await before performing any user actions or interacting with browser
        //goto is equivilant to driver.navigate
        await page.goto("https://www.bestbuy.com")
        //search products from the arraylist
        await page.locator("xpath=//*[@id='gh-search-input']").fill(products[i], { timeout: timeLimit })
        //click on search button
        await page.locator("xpath=//*[@class='header-search-button']").click({ timeout: timeLimit })


        //capture the search result
        let result = await page.locator("xpath=//*[@class='item-count']").textContent({ timeout: timeLimit })
        //split the result to only print the number of items avaiable
        let arrayResult = result?.split(" ")
        console.log("The product" + products[i] + "the number of avaiable items are " + arrayResult[0])


    }//end of for loop


})//end of test 1
