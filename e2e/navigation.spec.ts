import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SwimForce/);
    await expect(page.locator('text=Elevate Your Swimming Training')).toBeVisible();
  });

  test('can navigate to shop', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Shop');
    await expect(page).toHaveURL(/\/shop/);
    await expect(page.locator('h1')).toHaveText('Shop');
  });

  test('can navigate to training', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Training');
    await expect(page).toHaveURL(/\/training/);
  });

  test('can navigate to about', async ({ page }) => {
    await page.goto('/');
    await page.click('text=About');
    await expect(page).toHaveURL(/\/about/);
  });

  test('can navigate to cart', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Cart');
    await expect(page).toHaveURL(/\/cart/);
  });
});
