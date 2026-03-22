import { test } from '@playwright/test';

test('Test 1', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào “Bài học 1: Register Page (có đủ các element)”", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Step 3: Nhập thông tin cho các field", async () => {
        await page.locator("//input[@id='username']").fill('testuser');
        await page.locator("//input[@id='email']").fill('k22testmail@gmail.com');
        await page.locator("//input[@type='radio' and @value='female']").check();
        await page.locator("//input[@type='checkbox' and @value='reading']").check();
        await page.locator("//select[@id='interests']").selectOption(['Technology', 'Sports']);
        await page.locator("//select[@id='country']").selectOption(['United States']);
        await page.locator("//input[@id='dob']").fill('1990-01-01');
        await page.locator("//input[@id='profile']").setInputFiles('picture.jpg');
        await page.locator("//textarea[@id='bio']").fill('This is a test bio');
        await page.locator("//input[@id='rating']").fill('9');
        await page.locator("//input[@id='favcolor']").fill('#ff0000');
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//input[@id='toggleOption']").check();
        await page.locator("//div[@id='starRating']").fill('3');
        await page.locator("//input[@id='customDate']").fill('2026-01-01');
    });

    await test.step("Step 4: Click button Register", async () => {
        await page.locator("//button[text()='Register']").click();
    });
});