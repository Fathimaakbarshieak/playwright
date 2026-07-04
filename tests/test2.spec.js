// Scenario 1 : AMAZON.IN

// -> Launch amazon.in
// -> Search for rc cars 
// -> In suggestions click on rc cars drift
// -> click on 5th product
// -> click on quantity drop down
// -> change the quantity into 5
// ->click on ADD TO CART
// -> click on go to cart
// ->now click on (-) to delete one product 
// ->Print Final price



// Scenario 2: QSPIDERSDEMOAPP

// -> open : https://demoapps.qspiders.com/ui?scenario=1
// -> Click on Popups
// -> Click on Browser windows
// -> Click on view more of Laptops
// -> Click  on Add to Cart for 3 times
// -> Check whether the cart count was increased to 3 or not
// -> Click on Cart icon
// -> Print the length of cart and validate whether it is equal to 3 or not


// Scenario 3
//  -> Launch : https://demoqa.com/login
// -> Click on new user button
// -> fill first name, and copy the first name
// ->paste firstname in username
// ->Fill password (Note: In password use capital , small, special symbols also give atleat 10 letters)
// -> Click on login
// ->Now click on back to login
// -> validate whethrt the Books:  page opened or not
// -> validate whther the username accepted is same as you given or not
// ->Click on goto book store
// ->Click on Learning Java Script Design patterns books
// ->Print subtitle and total pages of it
// ->Click on logout 
// ->check whether the Welocome page displayed or not





//scenario-1
// import {test,expect} from '@playwright/test'
// test("amazon",async({page})=>{
//     await page.goto('https://www.amazon.in/')
//     await page.locator('[id="twotabsearchtextbox"]').fill("rc cars drift")
//     await page.locator('(//div[text()="rc cars drift"])[1]').click()
//     await page.waitForTimeout(1000)
//     let [page1]=await Promise.all([page.waitForEvent('popup'),page.click('(//img[@class="s-image"])[5]')])
//     await page1.locator('(//span[@class="a-button-text a-declarative"])[1]').click()
//     await page.waitForTimeout(2000)
//     await page1.locator('[id="quantity_4"]').click()
//     await page1.locator('[title="Add to Shopping Cart"]').click()
//     await page1.waitForTimeout(2000)
//     await page1.locator('[class="a-icon a-icon-small-remove"]').click()
//     await page1.waitForTimeout(2000)
//     let price =await page1.locator('//h2[@class="a-size-base a-color-price a-text-bold"]').textContent()
//     console.log(price)
// })




//scenaio2




import {test,expect} from '@playwright/test'
// test("qspidersdemo",async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
//     await page.locator('(//section[@class="poppins text-[15px]"])[3]').click()
//     await page.waitForTimeout(1000)
//     await page.locator('(//section[@class="poppins text-[14px]"])[3]').click()
//     await page.waitForTimeout(1000)
//     let [page1]=await Promise.all([page.waitForEvent('popup'),await page.click('(//button[text()="view more"])[2]')])
//     await page1.locator('//button[text()="Add to Cart"]').click()
//     await page1.locator('//button[text()="Add to Cart"]').click()
//     await page1.locator('//button[text()="Add to Cart"]').click()
//     let check=await page1.locator('[class="h-5 w-5 bg-red-500 rounded-full absolute top-0 right-0 z-[10] text-white flex justify-center items-center text-xs"]').textContent()
//     await expect(check).toBe('3')
//     await page1.locator('//section/article').click()
//     let text=await page1.locator('[class="flex items-center justify-between p-4 border rounded-lg"]').allTextContents()
//     let len=await text.length
//     await expect(len).toBe(3)
//     console.log(len)
// })

//scenario 3


// import { test, expect } from '@playwright/test';
test('DemoQA Book Store', async ({ page }) => {
await page.goto('https://demoqa.com/login')
    await page.waitForTimeout(3000);
    await page.locator('[id="newUser"]').click()
    await page.locator('[id="firstname"]').click()
    await page.keyboard.type('fathima')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.type('A')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.keyboard.press('Tab')
    await page.keyboard.type('Fathima@123')
    await page.locator('[id="register"]').click()
    await page.locator('[id="gotologin"]').click()
    await page.locator('[id="userName"]').click()
    await page.keyboard.type('fathima')
    await page.keyboard.press('Tab')
    await page.keyboard.type('Fathima@123')
    await page.locator('[id="login"]').click()
    await page.locator('[class="col-12 mt-4 col-md-6 col-xl-7"]');
    let Check_User= await page.locator('//label[@id="userName-value"]').textContent()
    await expect(Check_User).toBe('fathima')
    await page.locator('[id="gotoStore"]').click();
    await page.locator('(//a[@href="/books?search=9781449331818"])').click()
    const subtitle = await page.locator('(//label[@id="userName-value"])[3]').textContent();
    console.log("Subtitle:", subtitle);
    await expect(subtitle).toBe('Learning JavaScript Design Patterns')
    const pages = await page.locator('(//label[@id="userName-value"])[7]').textContent();
    console.log("Total Pages:", pages);
    await expect(pages).toBe('254')
    await page.locator('[id="submit"]').click();
    await expect(page.locator('(//button[@class="btn btn-primary"])[1]')).toHaveText('Login');
    console.log("login page is showing");
    await page.waitForTimeout(3000)

});


