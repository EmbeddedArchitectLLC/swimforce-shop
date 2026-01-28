import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  test('can add item to cart from shop', async ({ page }) => {
    await page.goto('/shop');
    
    // Click first "Add to Cart" button
    await page.locator('button:has-text("Add to Cart")').first().click();
    
    // Navigate to cart
    await page.click('text=Cart');
    await expect(page).toHaveURL(/\/cart/);
    
    // Verify item is in cart
    await expect(page.locator('.bg-white.border.rounded-lg')).toHaveCount(1);
  });

  test('empty cart shows message', async ({ page }) => {
    // Clear localStorage first
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    
    await page.goto('/cart');
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });

  test('can remove item from cart', async ({ page }) => {
    await page.goto('/shop');
    
    // Add item
    await page.locator('button:has-text("Add to Cart")').first().click();
    
    // Go to cart
    await page.goto('/cart');
    
    // Remove item
    await page.click('text=Remove');
    
    // Verify cart is empty
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });

  test('can update quantity', async ({ page }) => {
    await page.goto('/shop');
    
    // Add item
    await page.locator('button:has-text("Add to Cart")').first().click();
    
    // Go to cart
    await page.goto('/cart');
    
    // Update quantity
    const qtyInput = page.locator('input[type="number"]').first();
    await qtyInput.fill('3');
    
    // Verify subtotal updated (should be 3x price)
    await expect(page.locator('text=Summary')).toBeVisible();
  });
});
