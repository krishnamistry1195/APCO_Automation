import { test, expect,Page } from '@playwright/test';
import { ecoLoginPage } from '../pages/ecoLoginPage';
import testdata from '../testdata/enviromentdata.json';
import { takeScreenshot } from '../utils/screenshot';
    
    export async function login(page:Page)
    {

    const testname = test.info().title;
    
    const path = process.env.ENV === testdata.enviroments.enviroment
                 ? process.env.QA_PATH!
                 : process.env.Prod_PATH!;

        // await page.setViewportSize({ width: 1920, height: 1080 });
        // await page.evaluate(() => {
        //     window.moveTo(0, 0);
        //     window.resizeTo(window.screen.availWidth, window.screen.availHeight);
        // });
        await page.goto(path);
    
    const loginPage = new ecoLoginPage(page);
    await takeScreenshot(page, testname,'LoginPage');

    const username =
        process.env.ENV === testdata.enviroments.enviroment
            ? process.env.QA_USERNAME2!
            : process.env.Prod_USERNAME!;

    const password =
        process.env.ENV === testdata.enviroments.enviroment
            ? process.env.QA_PASSWORD2!
            : process.env.Prod_PASSWORD!;

    await loginPage.enterUsername(username);
    await takeScreenshot(page, testname,'Enterusername');
    await loginPage.clickonenterbutton();
    await loginPage.enterpassword(password);
    await takeScreenshot(page, testname,'Enterpassword');
    await loginPage.clickoncontinuebutton();
    await takeScreenshot(page, testname,'Get the homepage');
    
}