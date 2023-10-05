import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';

export default function signIn() {

  test('login', async ({ page }) => {
    const browser: Browser = await chromium.launch();

    await page.goto('http://test-manual-ui.afront.io/login');
    await page.getByPlaceholder("E-mail").fill("developer@afront.io");
    await page.getByPlaceholder("password").fill("wyZVDyQgaTgyp53n");

    await page.click("[data-cy='submit-button']");
    await expect(page).toHaveURL("http://test-manual-ui.afront.io/campaigns/test");
    
  });
}
