import { test } from '@playwright/test';

test('Test 3', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào “Bài học 3: Todo page”.", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("Step 3: Thêm mới 100 todo item có nội dung “Todo <i>”", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step("Step 4: Xoá các todo có số lẻ", async () => {
        for (let i = 1; i <= 100; i += 2) {
            await page.locator(`//button[@id='${i}-delete']`).click();
        }
    });
});