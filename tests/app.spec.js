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
});

test('convert 32 fahrenheit to 0 celsius', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Length'}).click();
    await page.getByRole('button', { name: 'Temperature'}).click();
    await page.locator('#temp-unit1').selectOption('fahrenheit');
    await page.locator('#temp-unit2').selectOption('celsius');
    await page.locator('#temp-value').fill('32')
    await page.getByRole('button', { name: 'Convert'}).click();
    await expect(page.getByText('0 celsius')).toBeVisible();
});

test('converts 10 meters to 32.8 feet', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', {name: 'Length'}).click();
    await page.locator('#')
})