import{test} from '../../src/fixture/TestFixture';
import{expect} from '@playwright/test';


test('Login with valid credentials',async({page,homePage})=>{
   // await homePage.launchBrowser();
    await homePage.giveUsername('admin');
    await homePage.givePassword('0000');
    await homePage.clickOnLogin();
    await page.locator("//img[@src='themes/softed/images/info.PNG']").hover();
    const page1Promise= page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Help' }).click();
    const page1=await page1Promise;
    
   const aa= await page1.locator("//a[text()='cloudflare.com']").innerText();
    console.log(aa);
    
    const page2Promise=page1.waitForEvent('popup');
   await page1.locator("//a[text()='cloudflare.com']").click();
   const page2=await page2Promise;
   const bb=await page2.locator("//a[text()='Learn more about Cloudflare']").innerText();
   console.log(bb);
   await page.locator("//a[@href='index.php?module=Leads&action=index']").click();

});
//a[text()='Learn more about Cloudflare']

test('Login with invalid credentials',async({page,homePage})=>{
   // await homePage.launchBrowser();
    await homePage.giveUsername('admin');
    await homePage.givePassword('0076');
    await homePage.clickOnLogin();
    await expect(page.getByText('You must specify')).toBeVisible();
    

});

test('Login with correct username and blank password',async({page,homePage})=>{
   // await homePage.launchBrowser();
    await homePage.giveUsername('admin');
    await homePage.givePassword('');
    await homePage.clickOnLogin();

});

test('Login with both username and password blank',async({page,homePage})=>{
   // await homePage.launchBrowser();
    await homePage.giveUsername('');
    await homePage.givePassword('');
    await homePage.clickOnLogin();


});

/*test.beforeAll('test2', async ({} ) => {
  console.log('Before all method');
});

test.afterAll('test3', async ({  }) => {
  console.log('After all method');
});

test.beforeEach('test4', async ({  }) => {
  console.log('Before each method');
});

test.afterEach('test5', async ({ }) => {
  console.log('After each method');
});*/






