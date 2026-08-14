import { Page, test, expect } from "@playwright/test";
import ecoReportsproducttypePage from "../pages/ecoReportsProductTypePage";
import { takeScreenshot } from '../utils/screenshot';
import testdata from '../testdata/repots.json'

export async function producttypereports(page: Page) {

    const ecoReportsproducttype = new ecoReportsproducttypePage(page);
    const testname= test.info().title;

    const reportUrl = process.env.REPORT_URL || 'https://onlineqa.easycare.com/eco-qa/Reports/Index?Show=ProductReports';
    await page.goto(reportUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('load');

    //click on the report tab
    await ecoReportsproducttype.clickonreporttab(); 
    await takeScreenshot(page, testname, 'click on the report tab');

    //click on the product type
    await ecoReportsproducttype.clickonproducttype();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'click on the product type'); 

   /* //Click on the dealer upcoming services
    await ecoReportsproducttype.clickondealerupcomingservices();
    await page.waitForLoadState('load');
    await expect(
        page.getByText(new RegExp(testdata.expectproducttype.dealerupcomming, 'i')),
        'Scheduled Maintenance - Dealer Upcoming Services Report').toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Dealer upcoming services screen get visible');

    //click on the get report dealer upcoming services
    await ecoReportsproducttype.clickongetreportdealerupcomingservices();
    const iframe = page.frameLocator('iframe[name="ifRptViewer"]');
    await iframe.locator('body').waitFor({ state: 'visible', timeout: 120000 });
    await expect(
        iframe.getByText(new RegExp(testdata.expectproducttype.dealerupcommingreport, 'i')),
        'Expected Service Date From').toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Expected Service Date From');

    //Accounting Reserves report flow
    await ecoReportsproducttype.clickonproducttype();
    await ecoReportsproducttype.clickonaccountingreserves();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Accounting Reserves screen get visible');

    await ecoReportsproducttype.clickongetreportaccountingreserves();
    const reservesIframe = page.frameLocator('#ifRptViewer');
    await reservesIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    await expect(
        reservesIframe.getByText(new RegExp(testdata.expectproducttype.accountingreserves, 'i')),
        'Accounting - Reserve Reconciliation Report').toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Accounting Reserves report');

    // Dealer Reserves Summary report flow
    //await ecoReportsproducttype.clickonproducttype();
    await ecoReportsproducttype.clickonDealerReserves();
    await ecoReportsproducttype.clickongenerateDealerReservesReport();
     await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Dealer Reserves screen get visible');
    
    const dealerReservesIframe = page.frameLocator('#ifRptViewer');
    await dealerReservesIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    await expect(
        dealerReservesIframe.getByText(new RegExp(testdata.expectproducttype.dealerreserves, 'i')),
        'Dealer - Reserve Reconciliation Report').toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Dealer Reserve Report');


    // Written Reserves Summary report
    await ecoReportsproducttype.clickonWrittenReserves();
    await ecoReportsproducttype.clickongenerateWrittenReservesReport();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Written Reserves Summary screen visible');
    const writtenReservesIframe = page.frameLocator('#ifRptViewer');
    await writtenReservesIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    await expect(
        writtenReservesIframe.getByText(new RegExp(testdata.expectproducttype.writtenreserves, 'i')),
        'Contract Sales/Written Reserves').toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Written Reserve Report');


    // Cancellation Reserves Summary report
    await ecoReportsproducttype.clickonCancellationReserves();
    await ecoReportsproducttype.clickongenerateCancellationReservesReport();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Cancellation Reserves Summary screen visible');
    const cancellationReservesIframe = page.frameLocator('#ifRptViewer');
    await cancellationReservesIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    await expect(
        cancellationReservesIframe.getByText(new RegExp(testdata.expectproducttype.cancellationreserves, 'i')),
        ' Cancellations').toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Cancellation Reserve Report');
    
        // Claim Paid Summary report
        await ecoReportsproducttype.clickonClaimPaid();
        await ecoReportsproducttype.clickongenerateClaimPaidReport();
        await page.waitForLoadState('load');
        await takeScreenshot(page, testname, 'Claim Paid Summary screen visible');
        const claimPaidIframe = page.frameLocator('#ifRptViewer');
        await claimPaidIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
        await expect(
            claimPaidIframe.getByText(new RegExp(testdata.expectproducttype.claimpaid, 'i')),
            ' Claims Payments').toBeVisible({ timeout: 120000 });
        await takeScreenshot(page, testname, ' Claims Payments Report');

    // Previously Distributed Summary report
    await ecoReportsproducttype.clickonPreviouslyDistributed();
    await ecoReportsproducttype.clickongeneratePreviouslyDistributedReport();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Previously Distributed Summary screen visible');
    const prevDistIframe = page.frameLocator('#ifRptViewer');
    await prevDistIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    await expect(
            prevDistIframe.getByText(new RegExp(testdata.expectproducttype.previouslydistributed, 'i')),
            ' Previously Distributed').toBeVisible({ timeout: 120000 });
        await takeScreenshot(page, testname, ' Previously Distributed Report');*/

    // Missed Services Summary report
    await ecoReportsproducttype.clickonMissedServices();
    await ecoReportsproducttype.clickongenerateMissedServicesReport();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Missed Services Summary screen visible');
    const missedSrvIframe = page.frameLocator('#ifRptViewer');
    await missedSrvIframe.locator('body').waitFor({ state: 'visible', timeout: 180000 });
    await expect(
            missedSrvIframe.getByText(new RegExp(testdata.expectproducttype.missedservices, 'i')),
            ' Missed Services').toBeVisible({ timeout: 120000 });
        await takeScreenshot(page, testname, ' Missed Services Report');
}
