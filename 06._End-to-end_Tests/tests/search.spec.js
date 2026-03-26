import { test, expect } from '@playwright/test';

test('can search in the input field', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Search' }).click();
});