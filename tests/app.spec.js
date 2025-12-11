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
    await expect(page.getByText('32.00 fahrenheit')).toBeVisible();
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

test('converts 10 meters to 32.81 feet', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', {name: 'Length'}).click();
    await page.locator('#length-unit1').selectOption('meters')
    await page.locator('#length-unit2').selectOption('feet');
    await page.locator('#length-value').fill('10');
    await page.getByRole('button', {name: 'Convert'}).click();
    await expect(page.getByText('32.81 feet')).toBeVisible();
});

test('converts 10 kilos to 22.05 pounds', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', {name: 'Weight'}).click();
    await page.locator('#weight-unit1').selectOption('kilograms')
    await page.locator('#weight-unit2').selectOption('pounds');
    await page.locator('#weight-value').fill('10');
    await page.getByRole('button', {name: 'Convert'}).click();
    await expect(page.getByText('22.00  pounds')).toBeVisible();
});