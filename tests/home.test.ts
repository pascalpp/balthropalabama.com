import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('/_vercel/insights/script.js', (route) => {
    route.fulfill({
      body: '',
    });
  });

  await page.goto('/#still');
});

test('screenshot test', async ({ page }) => {
  await expect(page).toHaveScreenshot('home.png');
});
