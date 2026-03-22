import { test } from '@playwright/test';

test('Test 2', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào “Bài học 2: Product page”", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step("Step 3: Thêm sản phẩm để giỏ hàng có số lượng sản phẩm yêu cầu", async () => {

        // a. Sản phẩm 1: 2 sản phẩm
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='1']").click();

        // b. Sản phẩm 2: 3 sản phẩm
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();

        // c. Sản phẩm 3: 1 sản phẩm
        await page.locator("//button[@data-product-id='3']").click();

    });
});