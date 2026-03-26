import { test, expect } from '@playwright/test';

test('user can register and log in', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('someuser');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="email"]').fill('someuser@gmail.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill('password');
  await page.locator('input[name="password"]').press('Tab');
  await page.locator('input[name="password2"]').fill('password');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('someuser');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('password');
});

