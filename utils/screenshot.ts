import { Page } from '@playwright/test';

export async function takeScreenshot(page: Page, testName: string, stepName: string) {

   const timestamp = new Date()
    .toISOString()
    .replace(/:/g, "-")
    .replace("T", "_")
    .split(".")[0];


  await page.screenshot({
    path: `screenshots/${testName}/${timestamp}_${stepName}.png`,
    fullPage: true,
  });
}