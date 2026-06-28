// 1. Amazon – Search History Validation 
// Viewport: 1366 × 768
// Launch Amazon.
// Set viewport.
// Enter "Laptop".
// Press Enter.
// Navigate back.
// Validate search box still contains "Laptop".
// Read search value.
// Assert value equals "Laptop".


// 2. Demo WebShop

// Set viewport to 1366 x 780
// Launch demowebshop application
// click on Digital downloads
// click on music 2  Having actual price of 10.00
// Verify that shopping cart was increased it's count or not
// Open the shopping cart
// target the quantity input field and change that 1 to 3
// Hit Enter button 
//  and verify that total price was changed to 30 or not price

// 3. Blinkit – Search and Clear
// Launch Blinkit.
// Enter "Chocolate".
// Validate value entered.
// Clear textbox.
// Validate textbox empty.
// Enter "Juice".
// Capture value.
// Assert value equals "Juice".



// 4. Blinkit – Keyboard Shortcut Scenario

// Enter "ButterMilk".
// Press Ctrl+A.
// Press Ctrl+X.
// Verify field empty.
// Press Ctrl+V.
// Verify text restored.
// Take screenshot.
// Assert value equals ButterMilk.
// Hit On Enter
// Add Slurrp Farm Banana Chocochip Pancake Mix to cart
// Add  Hershey's Hazelnut Syrup 
// validate that cart count was increased or not
// print the total cart price


// 5. Saucedemo validation
// Launch SauceDemo.
// Leave username empty.
// Leave password empty.
// Click Login.
// Capture error message.
// Verify error displayed.
// Verify message length > 5.
// Assert validation.
// Now Give Correct credentials and Login
//  Click Sauce Labs Fleece Jacket to add to cart using traversing









//task1



// import{test,expect} from '@playwright/test'
// test("demo",async({page})=>{
//      await page.setViewportSize({height:1366,width:768})
//      await page.goto("https://www.amazon.in/");
//      await page.locator('(//input[@id="twotabsearchtextbox"])').fill("Laptop");
//      await page.keyboard.press("Enter");
//      await page.goBack();
//      await page.waitForTimeout(2000);
//      let a=await page.locator('(//input[@id="twotabsearchtextbox"])').inputValue();
//      await expect(a).toBe("Laptop");

// });



 //output ---   Error: expect(received).toBe(expected) // Object.is equality

// Expected: "Laptop"
// Received: ""

//   85 |      await page.waitForTimeout(2000);
//   86 |      let a=await page.locator('(//input[@id="twotabsearchtextbox"])').inputValue();
// > 87 |      await expect(a).toBe("Laptop");
//      |                      ^
//   88 |
//   89 |
//   90 |
//     at C:\Users\FATHIMA\Desktop\playwright\tests\play.spec.js:87:22








//task2

// import {test} from '@playwright/test'
// test("test2",async({page})=>{
//     await page.setViewportSize({width:1366,height:780})
//     await page.goto('https://demowebshop.tricentis.com/')
//     await page.locator('//ul[@class="top-menu"]/li[5]/a').click()
//     await page.waitForTimeout(2000)
//     await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]').click()  //(//h2[@class="product-title"])[2]/a
//     await page.waitForTimeout(2000)
//     let a=await page.locator('//span[@class="cart-qty"]').textContent()
//     if(a=="(1)"){
//         console.log("count is increased")
//     }else{
//         console.log("not increased")
//     }
//     await page.waitForTimeout(2000)
//     await page.locator('(//span[@class="cart-label"])[1]').click()
//     let c=await page.locator('(//input[@type="text"])[2]').fill("3")
//     await page.keyboard.press("Enter")
//     let b=await page.locator('(//strong)[4]').textContent()
//     if(b==="30"){
//         console.log("Not changed to 30")
//     }else{
//         console.log("changed to 30")
//    }
// });


    //output:passed








//task-5


// import {test,chromium, expect} from "@playwright/test"
// test("amazon",async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator('[class="submit-button btn_action"]').click();
//     let c=await page.getByTestId("error").textContent();
//     await expect(c).toBe("Epic sadface: Username is required");
//     await expect(c.length).toBeGreaterThan(5);
//     await page.locator('[placeholder="Username"]').fill("problem_user");
//     await page.locator('[placeholder="Password"]').fill("secret_sauce")
//     await page.locator('[class="submit-button btn_action"]').click();
//     await page.locator('(//button[@class="btn btn_primary btn_small btn_inventory "])[4]').click()

//     });
     
     
//output :test passed





//test-3

// import { test, expect } from '@playwright/test';
// test('Blinkit', async ({ page }) => {
//     await page.goto('https://blinkit.com/');
//     await page.waitForLoadState('networkidle');
//     const s = page.locator('input[type="text"]');
//     await s.fill('Chocolate');
//     await expect(s).toHaveValue('Chocolate');
//     await s.clear();
//     await expect(s).toHaveValue('');
//     let a=await page.locator('input[type="text"]').fill('Juice');
//     const V = await s.inputValue();
//     console.log('Captured_Value:', V);
//     expect(V).toBe('Juice');
//     console.log("Assertion Passed");
// });

//output=Assertion passed





//test -4

// import {test,expect} from '@playwright/test'
// import path from 'node:path'
// test("test4",async({page})=>{
//       await page.goto('https://blinkit.com/')
//     await page.locator('//div[@class="SearchBar__PlaceholderContainer-sc-16lps2d-0 dPbxWD"]').click()
//     await page.locator('//input[@placeholder="Search for atta dal and more"]').fill('pancake')
//     await page.keyboard.press("Control+A")
//     await page.keyboard.press("Control+X")
//     let a=await page.locator('//input[@placeholder="Search for atta dal and more"]').textContent()
//     console.log(a)
//     await page.keyboard.press("Control+V")
//     let b=await page.locator('//input[@placeholder="Search for atta dal and more"]').textContent()
//     console.log(b)
//     await page.screenshot({path:'screenshots/blinkit.png'})
//     await page.waitForTimeout(2000)
//     await page.keyboard.press("Enter")
//     await page.locator('(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[4]').click()
//     await page.waitForTimeout(2000)
//     await page.locator('(//div[@class="tw-rounded-md tw-font-okra tw-flex tw-items-center tw-justify-center tw-flex-col tw-font-semibold tw-overflow-hidden tw-text-300 tw-px-0 tw-gap-0.5 tw-min-w-[66px] tw-min-h-[32px] tw-bg-green-050 tw-border tw-border-base-green tw-text-base-green"])[10]').click()
//     let c=await page.locator('(//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"])[1]').allTextContents()
//     console.log(c);
//     await expect(c).toContain('2 items');
//     let d=await page.locator('//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"][2]').textContent()
//     console.log(d)
// })
