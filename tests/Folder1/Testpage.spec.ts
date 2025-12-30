import{test,expect} from '@playwright/test';
test('First test',async({page})=>{
    //We can describe the steps here
    //No need to pass anything in the async function 
    //** We must need to assign await before every operations need to perform */
   await test.step('Launching the browser',async()=>{
       await page.goto("http://localhost:8888/");
    })

   await test.step('Enter the username',async()=>{
        //We have to give xpath in double in interverted comma because it confuse between css/xpath
      await  page.locator("//input[@name='user_name']").fill('admin');
    })

     await test.step('Enter the password',async()=>{
       await page.locator("//input[@name='user_password']").fill('0000');
    })


});

test('Second test',async({page})=>{
    
   await test.step('Launching the browser',async()=>{
       await page.goto("http://localhost:8888/");
    })

   await test.step('Enter the username',async()=>{
        
      await  page.locator("//input[@name='user_name']").fill('admin');
    })

     await test.step('Enter the password',async()=>{
       await page.locator("//input[@name='user_password']").fill('0000');
    })

    await test.step('Click on Login button',async()=>{
        await page.locator("//input[@id='submitButton']").click();
    })


});