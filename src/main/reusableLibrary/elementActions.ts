import { Locator, Page } from "@playwright/test";
import {allure} from "allure-playwright"




//create a method for typing data on user value
export async function sendKeys(page:Page, xpath:string, userValue:string, elementName:string) {
    await allure.step("Enter a value '" + userValue + "' on " + elementName, async() => {
        await page.locator(xpath).fill(userValue)
    })
}


//create a method to clear value from text field
export async function clearValueFromField(page: Page, xpath: string, elementName: string, timeLimit: number = 5000) {
    await allure.step("Clear value from " + elementName, async () => {
        await page.locator(xpath).fill("", { timeout: timeLimit });
    });
}


//create a method for clicking with wait
export async function clickElement(page: Page, xpath: string, elementName: string, timeLimit: number = 5000) {
    await allure.step("Click on " + elementName, async () => {
        await page.locator(xpath).click({ timeout: timeLimit });
    });
}


//create a method for clicking
export async function click(page:Page, xpath:string, elementName:string) {
    await allure.step("Click on " + elementName, async() => {
        await page.locator(xpath).click()
    })
}


//create a method for clicking by index
export async function clickByIndex(page:Page, xpath:string, index:number, elementName:string) {
    await allure.step("Click on " + elementName, async() => {
        await page.locator(xpath).nth(index).click({force:true})
    })
}
//create a method for capturing text
export async function captureText(page:Page, xpath:string, elementName:string) {
    let result
    await allure.step("Capture text " + elementName, async() => {
        result = await page.locator(xpath).textContent()
    })
    return result
}


//create a method to navige to an url
export async function navigate(page:Page, url:string) {
    await allure.step("Navigate to " + url, async() => {
        await page.goto(url)
    })
}


//create a method to press enter on a search field
export async function keyboardEnter(page:Page) {
    await allure.step("Pressing Enter on a page", async() => {
        await page.waitForTimeout(1000)
        await page.keyboard.press("Enter")
    })
}


//create a method to hovers the mouse over the specified element
export async function mouseHover(page: Page, xpath: string, elementName: string) {
    await allure.step("Mouse hover over " + elementName, async () => {
        await page.locator(xpath).hover();
    });
}


//create a method to select an option from a dropdown by visible text
export async function selectByText(page: Page, xpath: string, visibleText: string, elementName: string) {
    await allure.step("Select by text '" + visibleText + "' from " + elementName, async () => {
        await page.locator(xpath).selectOption({ label: visibleText });
    });
}


//create a method to select an option from a dropdown by value
export async function selectByValue(page: Page, xpath: string, value: string, elementName: string) {
    await allure.step("Select by value '" + value + "' from " + elementName, async () => {
        await page.locator(xpath).selectOption({ value });
    });
}


//create a method to select an options from dropdown by index number
export async function selectByIndex(page: Page, xpath: string, index: number, elementName: string) {
    await allure.step("Select by index '" + index + "' from " + elementName, async () => {
        await page.locator(xpath).selectOption({ index });
    });
}




//create a method to verify that specific element is displayed on the page
export async function verifyElementPresent(page: Page, xpath: string, elementName: string) {
    await allure.step("Verify " + elementName + " is present", async () => {
        const count = await page.locator(xpath).count();
        if (count <= 0) {
            throw new Error(elementName + " is not present");
        }
    });
}
//create a method to verify that specific element is not displayed on the page
export async function verifyElementNotPresent(page: Page, xpath: string, elementName: string, timeLimit: number = 5000) {
    await allure.step("Verify " + elementName + " is not present", async () => {
        const isVisible = await page.locator(xpath).isVisible({ timeout: timeLimit });
        if (isVisible) {
            throw new Error(elementName + " is present");
        }
    });
}


//create a method to verify a specific text is present
export async function verifyTextPresentOnScreen(page: Page, text: string, elementName: string) {
    await allure.step("Verify text '" + text + "' is present for " + elementName, async () => {
        const count = await page.locator(`xpath=//*[text()='${text}']`).count();
        if (count <= 0) {
            throw new Error("Text '" + text + "' is not present for " + elementName);
        }
    });
}
