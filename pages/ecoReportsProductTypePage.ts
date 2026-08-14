import { Locator, Page } from '@playwright/test';
import testdata from '../testdata/repots.json';

class ecoReportsProductTypePage{
    readonly page: Page;

    readonly reporttab: Locator;
    readonly productType: Locator;
    readonly DealerUpcomingServices: Locator;
    readonly alldealersdropdwon: Locator;
    readonly deselectalldealer: Locator;
    readonly selectdealer: Locator;
    readonly accountingReserves: Locator;
    readonly getreportdealerupcomingservices: Locator;
    readonly selectquater: Locator;
    readonly selectyear: Locator;
//    readonly selectdealerAR: Locator;
    readonly getreportaccountingreserves: Locator;
    readonly WrittenReserves: Locator;
    readonly CancellationReserves: Locator;
    readonly ClaimsPaid: Locator;
    readonly PreviouslyDistributed: Locator;
    readonly MissedServices: Locator;
    readonly txtBeginDate: Locator;
    readonly txtEndDate: Locator;
    readonly generatereport: Locator;
    readonly DealerReserves: Locator;
    //eadonly getreportdealerreserves: Locator;

    constructor(page:Page){
        this.page = page;
        this.reporttab = page.locator('#Reports');
        this.productType = page.getByText('Product Type');
        this.DealerUpcomingServices = page.locator('#lDealerUpcomingServices');
        this.alldealersdropdwon = page.locator('#mainCheckBoxDisplayText');
        this.deselectalldealer = page.locator('#selectAllchkBox');
        this.selectdealer = page.locator(`input[type="checkbox"][name="SelectedDealerCodeList"][id="${testdata.producttype.dealer}"], input[type="checkbox"][value="${testdata.producttype.dealer}"]`).first();
        this.accountingReserves = page.getByText('Accounting Reserves');
        this.getreportdealerupcomingservices = page.locator('#generateReport');
        this.selectquater = page.locator('#ddlQuarters');
        this.selectyear = page.locator('#ddlYears');
        //this.selectdealerAR = page.locator('#ddlDealers');
        this.getreportaccountingreserves = page.locator('#GenerateReport');
        this.WrittenReserves = page.locator('#lWrittenReserve');
        this.CancellationReserves = page.locator('#lCancellationReserve');
        this.ClaimsPaid = page.locator('#lClaimsPaid');
        this.PreviouslyDistributed = page.locator('#lPreviouslyDistributed');
        this.MissedServices = page.locator('#lMissedServices');
        this.txtBeginDate = page.locator('#txtBeginDate');
        this.txtEndDate = page.locator('#txtEndDate');
        this.generatereport = page.locator('#GenerateReport');
        this.DealerReserves = page.locator('#lDealerReserve');
       // this.getreportdealerreserves = page.locator('#GenerateReport');

    }

    async clickonreporttab(){
        await this.reporttab.click();
    }   
    
    async clickonproducttype(){
        await this.productType.click();
    }

    async clickondealerupcomingservices(){
        await this.DealerUpcomingServices.click();
    }

    async clickongetreportdealerupcomingservices(){
        await this.alldealersdropdwon.click();
        await this.deselectalldealer.click();
        await this.selectdealer.waitFor({ state: 'visible', timeout: 30000 });
        if (!(await this.selectdealer.isChecked())) {
            await this.selectdealer.check({ force: true });
        }
        await this.getreportdealerupcomingservices.click();
    }

       async clickonaccountingreserves(){
        await this.accountingReserves.click();
    }

    async clickongetreportaccountingreserves(){

        await this.selectquater.selectOption({ label: testdata.producttype.quarter });
        await this.selectyear.selectOption({ label: testdata.producttype.year });
       // await this.selectdealerAR.selectOption({ label: testdata.producttype.dealer });     
        await this.getreportaccountingreserves.click();
    }
    async clickonDealerReserves(){
        await this.DealerReserves.click();
    }

    async clickongenerateDealerReservesReport(){
        await this.generatereport.waitFor({ state: 'visible', timeout: 30000 });
        await this.generatereport.click();
    }

    async clickonWrittenReserves(){
        await this.WrittenReserves.click();
        await this.txtBeginDate.waitFor({ state: 'visible', timeout: 30000 });
        await this.txtEndDate.waitFor({ state: 'visible', timeout: 30000 });
    }

    async clickongenerateWrittenReservesReport(){
        // compute dates: begin = 30 days before today, end = today
        const now = new Date();
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const beginDate = new Date(endDate);
        beginDate.setDate(endDate.getDate() - 30);
        const fmt = (d: Date) => {
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yyyy = d.getFullYear();
            return `${mm}/${dd}/${yyyy}`;
        };

        const beginStr = fmt(beginDate);
        const endStr = fmt(endDate);

        // Fill dates
        await this.txtBeginDate.fill(beginStr);
        await this.txtBeginDate.press('Tab');
        await this.txtEndDate.fill(endStr);
        await this.txtEndDate.press('Tab');

        // Click Generate Report
        await this.generatereport.waitFor({ state: 'visible', timeout: 30000 });
        await this.generatereport.click();

        // Wait for report iframe to load
        const iframe = this.page.frameLocator('#ifRptViewer');
        await iframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    }

    async clickonCancellationReserves(){
        await this.CancellationReserves.click();

    }

    async clickongenerateCancellationReservesReport(){
        // compute dates: begin = 30 days before today, end = today
        const now = new Date();
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const beginDate = new Date(endDate);
        beginDate.setDate(endDate.getDate() - 30);
        const fmt = (d: Date) => {
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yyyy = d.getFullYear();
            return `${mm}/${dd}/${yyyy}`;
        };

        const beginStr = fmt(beginDate);
        const endStr = fmt(endDate);

        await this.txtBeginDate.fill(beginStr);
        await this.txtBeginDate.press('Tab');
        await this.txtEndDate.fill(endStr);
        await this.txtEndDate.press('Tab');

        await this.generatereport.waitFor({ state: 'visible', timeout: 30000 });
        await this.generatereport.click();

        const iframe = this.page.frameLocator('#ifRptViewer');
        await iframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    }

    async clickonClaimPaid(){
        await this.productType.click();
        await this.ClaimsPaid.click();
    }

    async clickongenerateClaimPaidReport(){
        const now = new Date();
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const beginDate = new Date(endDate);
        beginDate.setDate(endDate.getDate() - 30);
        const fmt = (d: Date) => {
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yyyy = d.getFullYear();
            return `${mm}/${dd}/${yyyy}`;
        };

        const beginStr = fmt(beginDate);
        const endStr = fmt(endDate);

        await this.txtBeginDate.fill(beginStr);
        await this.txtBeginDate.press('Tab');
        await this.txtEndDate.fill(endStr);
        await this.txtEndDate.press('Tab');

        await this.generatereport.waitFor({ state: 'visible', timeout: 30000 });
        await this.generatereport.click();

        const iframe = this.page.frameLocator('#ifRptViewer');
        await iframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    }

    // Previously Distributed: open details view
    async clickonPreviouslyDistributed(){
        await this.PreviouslyDistributed.click();
    }

    // Previously Distributed: generate report
    async clickongeneratePreviouslyDistributedReport(){
        const now = new Date();
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const beginDate = new Date(endDate);
        beginDate.setDate(endDate.getDate() - 30);
        const fmt = (d: Date) => {
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yyyy = d.getFullYear();
            return `${mm}/${dd}/${yyyy}`;
        };
        const beginStr = fmt(beginDate);
        const endStr = fmt(endDate);

        await this.txtBeginDate.fill(beginStr);
        await this.txtBeginDate.press('Tab');
        await this.txtEndDate.fill(endStr);
        await this.txtEndDate.press('Tab');

        await this.generatereport.waitFor({ state: 'visible', timeout: 30000 });
        await this.generatereport.click();

        const iframe = this.page.frameLocator('#ifRptViewer');
        await iframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    }

    // Missed Services: open details view
    async clickonMissedServices(){
        await this.MissedServices.click();
      
    }

    // Missed Services: generate report
    async clickongenerateMissedServicesReport(){
        const now = new Date();
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const beginDate = new Date(endDate);
        beginDate.setDate(endDate.getDate() - 30);
        const fmt = (d: Date) => {
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yyyy = d.getFullYear();
            return `${mm}/${dd}/${yyyy}`;
        };
        const beginStr = fmt(beginDate);
        const endStr = fmt(endDate);

        await this.txtBeginDate.fill(beginStr);
        await this.txtBeginDate.press('Tab');
        await this.txtEndDate.fill(endStr);
        await this.txtEndDate.press('Tab');

        await this.generatereport.waitFor({ state: 'visible', timeout: 30000 });
        await this.generatereport.click();

        const iframe = this.page.frameLocator('#ifRptViewer');
        await iframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    }

    


}
export default ecoReportsProductTypePage;