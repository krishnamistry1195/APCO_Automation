import { Page, test, expect } from "@playwright/test";
import ecoReportsbusinessPage from "../pages/ecoReportsBusinessPage";
import { takeScreenshot } from '../utils/screenshot';
import testdata from '../testdata/repots.json'


export async function businessreports(page: Page) {
    const ecoReportsbusiness = new ecoReportsbusinessPage(page);
    const testname= test.info().title;

    //click on the report tab
    await ecoReportsbusiness.clickonreporttab();

    //click on the business processing
    await ecoReportsbusiness.clickonbusinessprocessing();
    await takeScreenshot(page, testname, 'get the businessprocessing');

    //select the dealer
    await ecoReportsbusiness.selectdealer(testdata.businessprocessing.dealer);
    await takeScreenshot(page, testname, 'select the dealer');
    
    //click on the net balance due report for current month
    await ecoReportsbusiness.clickonnetblancecurrent();
    await page.waitForLoadState('load');
    await expect(
        page.getByText(new RegExp(testdata.expectbusiness.currentreport, 'i')),
        'The report was generated'
    ).toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'New balace due report visible');

//click on the net balance due report for previous month
    await ecoReportsbusiness.clickonnetblanceprevious();
    await page.waitForLoadState('load');
    await expect(
        page.getByText(new RegExp(testdata.expectbusiness.previousreport, 'i')),
        'The report was generated'
    ).toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Previous balance due report visible');

//click on the net balance due report for custom month
    await ecoReportsbusiness.clickonthenetblancecustom();
    await page.waitForLoadState('load');
    await takeScreenshot(page, testname, 'Date picker get visible');

//click on generate report button
    await ecoReportsbusiness.clickonthenetblancegenerate();
    await page.waitForLoadState('load');
    await expect(
        page.getByText(new RegExp(testdata.expectbusiness.customreport, 'i')),
        'The report was generated'
    ).toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Custom balance due report visible');

//click on the account statement report
    await ecoReportsbusiness.clickonaccountstatement();
    await page.waitForLoadState('load');
    await expect(
        page.getByText(new RegExp(testdata.expectbusiness.accountstatement, 'i')),
        'Click on the links below to download the full statement details.'
    ).toBeVisible({ timeout: 120000 });
    await takeScreenshot(page, testname, 'Account statement report visible');

}