import{expect,Locator,Page} from '@playwright/test';

export class Homepage{
    readonly page:Page;
    readonly userNametextBox:Locator;
    readonly passwordtextBox:Locator;
    readonly loginButton:Locator;
    constructor(page:Page){
        this.page=page;
        //Initialise all the elements as a form of constructor initialisation
            this.userNametextBox=page.locator("//input[@name='user_name']");
    this.passwordtextBox=page.locator("//input[@name='user_password']");
    this.loginButton=page.locator("//input[@id='submitButton']");

    }

    //Here we need to write all the methods we need to perform an operation
    async giveUsername(userName:string){
        await this.userNametextBox.isVisible();
       // await this.userNametextBox.isEnabled();
       // await this.userNametextBox.clear();
        await this.userNametextBox.fill(userName);
  
    };

      async givePassword(userPassword:string){
        await expect(this.passwordtextBox).toBeVisible();
       // await this.userNametextBox.isEnabled();
       // await this.userNametextBox.clear();
        await this.passwordtextBox.fill(userPassword);
  
    };

      async clickOnLogin(){
        const loginStatus=await this.loginButton.isVisible();
        console.log(loginStatus);
        await this.loginButton.isEnabled();
        await this.loginButton.click();
        
  
    };

    async launchBrowser(){
      await this.page.goto("http://localhost:8888/");
    }


}