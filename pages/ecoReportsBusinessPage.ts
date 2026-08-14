import { Locator, Page } from '@playwright/test';

class ecoReportsBusinessPage{

    readonly reporttab: Locator;
    readonly businessProcessing: Locator;
    readonly dealers: Locator;
    readonly netblancecurrent: Locator;
    readonly netblanceprevious: Locator;
    readonly netblancecustom: Locator;
    readonly netblancegenerate: Locator;
    readonly accountstatement: Locator;

   
    
    constructor(page:Page){
        this.reporttab = page.locator('#Reports');
        this.businessProcessing = page.getByText('Business Processing');
        this.dealers = page.locator('#ddlDealers');
        this.netblancecurrent = page.locator('#lCurrent');
        this.netblanceprevious = page.locator('#lPrevious');
        this.netblancecustom = page.locator('#lCustom');
        this.netblancegenerate = page.locator('#getCustomReport');
        this.accountstatement = page.locator('#lStatements');
      

    }

    async clickonreporttab(){
        await this.reporttab.click();

    }

    async clickonbusinessprocessing(){
        await this.businessProcessing.click();
    }

    async selectdealer(dealer: any){
        await this.dealers.selectOption({label: dealer});
    }

    async clickonnetblancecurrent(){
        await this.netblancecurrent.click();

    }

    async clickonnetblanceprevious(){
        await this.netblanceprevious.click();
    }

    async clickonthenetblancecustom(){
        await this.netblancecustom.click();
    }

    async clickonthenetblancegenerate(){
        await this.netblancegenerate.click();
    }

    async clickonaccountstatement(){
        await this.accountstatement.click();
    }




}
export default ecoReportsBusinessPage;