import { expect, test } from '@playwright/test';

test('can submit the form with minimal data', async ({ page }) => {
  await page.goto('/form');
  await page.getByLabel('First name').fill('Valentina');
  await page.getByLabel('Last name').fill('Montecinos');
  await page.getByLabel('Email address').fill('vale@gmail.com');
  await page.getByRole('textbox', { name: 'Date of birth' }).fill('1995-01-20');
  await page.getByRole('spinbutton', { name: 'Years of experience' }).fill('3');
  await page.getByRole('combobox', { name: 'Highest education level' }).click();
  await page.getByRole('option', { name: 'College' }).click();

  await page.getByText('Submit').click();
});

test(
  'cannot submit the form with an invalid email address',
  async ({ page }) => {
    await page.goto('/form');
    await page.getByLabel('First name').fill('Valentina');
    await page.getByLabel('Last name').fill('Montecinos');
    await page.getByLabel('Email address').fill('vale');
    await page.getByText('Submit').click();

    const invalidEmailMessage = page.getByText('Please enter a valid email');
    await expect(invalidEmailMessage).toBeVisible();
  },
);
