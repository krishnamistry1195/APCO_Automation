import { test, expect } from '@playwright/test';
import { login} from '../steps/login';

test('ecoLogin', async ({ page }) => {

    await login(page);

});