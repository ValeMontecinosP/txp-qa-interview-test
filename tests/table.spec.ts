import { expect, test } from '@playwright/test';
const NAMES = [
    'Brenda Praill',
    'Elias Riggulsford',
    'Florentia Halbeard',
    'Darryl Gayther',
    'Karrie Cridland'
] as const;
const COMPANIES = [
    'Sawayn-Cruickshank',
    'Pacocha, Ondricka and Ondricka',
    'McGlynn Group',
    'Reichert, Legros and Cruickshank',
    'Padberg Inc'
] as const;
const JOB_TITLES = [
    'Professor',
    'Senior Sales Associate',
    'Software Consultant',
    'Accounting Assistant II',
    'Structural Analysis Engineer'
] as const;

test('details of all individuals are displayed', async ({ page }) => {
  await page.goto('/table');
  for (const person of NAMES){
    await expect(page.getByRole('cell', { name: person })).toBeVisible();
  }  
  for (const company of COMPANIES){
    await expect(page.getByRole('cell', { name: company })).toBeVisible();
  }  
  for (const job of JOB_TITLES){
    await expect(page.getByRole('cell', { name: job })).toBeVisible();
  }  
});

const INDIVIDUAL_DATA = {
    id: 'a07550b7-ef3f-4966-9d7b-fe8d64efe848',
    firstName: 'Brenda',
    lastName: 'Praill',
    email: 'bpraill0@adobe.com',
    country: 'Portugal',
    timezone: 'Europe/Lisbon',
    currency: 'EUR',
    company: 'Sawayn-Cruickshank',
    jobTitle: 'Professor',
    skills: ['DTE', 'ETL Tools', 'Blackberry', 'Crisis Intervention', 'ETL'],
  } as const;



test('can view the full details of an individual', async ({ page }) => {
    const id = INDIVIDUAL_DATA.id;
    await page.goto('/table/'+id);
    await expect(page.locator('ul').getByText(INDIVIDUAL_DATA.firstName+' '+INDIVIDUAL_DATA.lastName)).toBeVisible();
    await expect(page.getByText(INDIVIDUAL_DATA.email)).toBeVisible();
    await expect(page.getByText(INDIVIDUAL_DATA.country+" ("+INDIVIDUAL_DATA.timezone+")")).toBeVisible();
    await expect(page.getByText(INDIVIDUAL_DATA.currency,{ exact: true })).toBeVisible();
    await expect(page.getByText(INDIVIDUAL_DATA.jobTitle)).toBeVisible();
    await expect(page.getByText(INDIVIDUAL_DATA.company)).toBeVisible();
    const SKILLS = INDIVIDUAL_DATA.skills;
    for (const skill of SKILLS){
        await expect(page.getByText(skill,{ exact: true })).toBeVisible();
      } 



});


