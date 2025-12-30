import { test as base} from '@playwright/test';
import { Homepage } from '../pages/Homepage';

//Here we use this file to store all the exports class
//where we use export test and base extends includes property of all the classes 
//is exported and below auto true we need specify all the classes as it is initaialised
//savelogs sync is used for global hooks and this return above await use()- will executed before everthing
//and after that will execute after everthing


//test is exported =base.extend<{all the property is initialised whose object is to be created}>
//then ({fuction elocated:[async function is passed({with objecty or without but should be declared})]})
//async will have use.. as parameter 2 then arrow function then all global before content
//await use then global after content
// then that tuple has one more parameter as object auto:true
//then similar like ever page object but they will dont have touple they simply have async function
//every await use will have page object variable value in it


export const test = base.extend<{
    saveLogs: void;
    homePage:Homepage;

}>({
    saveLogs:[async({page },use)=>{
        console.log('Global before is running...');
       await page.goto("http://localhost:8888/")

        

        await use();

        console.log('Global afterEach is running...')
    },
    { auto: true}],
    homePage: async({ page }, use) =>{
        const homePage=new Homepage(page);
        await use(homePage);
    },
      
}

)

export {expect} from '@playwright/test';


