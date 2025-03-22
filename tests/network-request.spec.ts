import { expect, test } from '@playwright/test';


test('can retrieve a random fact', async ({ page }) => {
  await page.goto('/network-request');
  await page.getByRole('button', { name: 'Get a fact' }).click();
  const locator = page.getByRole('alert').filter({ hasText: 'Did you know?' });
  await expect(locator).toBeVisible({ timeout: 30000 })
});
