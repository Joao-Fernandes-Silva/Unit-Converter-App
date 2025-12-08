import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle('Unit Converter');
});

test('app renders main UI', async({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Unit Converter' })).toBeVisible();
});

test('converts 0 celsius to 32 fahrenheit', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Length'}).click();
    await page.getByRole('button', { name: 'Temperature'}).click();
    await page.locator('#temp-unit1').selectOption('celsius');
    await page.locator('#temp-unit2').selectOption('fahrenheit');
    await page.locator('#temp-value').fill('0')
    await page.getByRole('button', { name: 'Convert'}).click();
    await expect(page.getByText('32 fahrenheit')).toBeVisible();
})