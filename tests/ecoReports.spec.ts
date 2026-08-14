import { test } from '@playwright/test';
import { login} from '../steps/login';
import {businessreports} from '../steps/busineesreports'
import { producttypereports } from '../steps/producttypereports';
import { maximizeWindow } from '../utils/window';

test.setTimeout(180000);

test('ecoReports', async ({ page }) => {
    // ensure the native browser window is maximized (best-effort, Chromium)
    await maximizeWindow(page);

    await login(page);
  //  await businessreports(page);
    await producttypereports(page);

});