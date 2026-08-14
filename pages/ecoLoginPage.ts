import { Locator, Page } from '@playwright/test';

export class ecoLoginPage {
    readonly username: Locator;
    readonly enterButton: Locator;
    readonly password: Locator
    readonly continuebutton: Locator;

    constructor(page: Page) {
        this.username = page.locator('#UserName');
        this.enterButton=page.locator('#enter_button');
        this.password=page.locator('#password');
        this.continuebutton=page.getByText('Continue');

}

async enterUsername(user:any) {
    await this.username.fill(user);
}

async clickonenterbutton(){
    await this.enterButton.click();
}

async enterpassword(pass:any)
{
  await this.password.fill(pass);
}

async clickoncontinuebutton(){
    await this.continuebutton.click();
}

}