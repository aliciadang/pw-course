# Lesson 05 takeaways
- DOM table
- Hàm `text()`
    - Hàm `text()` dùng để tìm ra phần tử có text tương ứng. Ví dụ với DOM sau:
    
        `<div @class=”playwright”>This is a text</div>`
            
        Để chọn phần tử này, ta dùng cú pháp như sau:

        `//div[text()=’This is a text’]`

        Giải thích: Chọn phần tử div mà có text là This is a text

- Hàm `contains()`
    - Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ:

    ```
    <div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
    <div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
    ```

    Để chọn các phần tử này, ta dùng hàm `contains(text(), <giá trị cố định>)`. Ví dụ:

    `//div[contains(text(), ‘Tôi là Alex’)]`

    *Giải thích: chọn thẻ div, có text chứa cụm từ “Tôi là Alex” - đoạn text có bị thừa space ở đầu và ở cuối, selector vẫn tìm được bình thường.*

    `//div[contains(text(), ‘Bây giờ là:’)]`

    *Giải thích: chọn thẻ div, có chứa cụm từ “Bây giờ là” - đoạn thời gian phía sau có thay đổi thì selector vẫn tìm được bình thường.*


## 1. DOM

Khi vào một website, ta nhìn thấy website dưới dạng:
- Các khối text
- Các hình ảnh
- Các liên kết
- Các ô input

**Máy tính** sẽ “nhìn” ở dưới dạng “cây có cấu trúc”
- Mở cây này bằng cách bấm <u>phím F12</u> (hoặc chuột phải vào vùng trống, chọn “Inspect”); sau đó chọn tab “**Element**”
- Cấu trúc này gọi là **DOM** (Document Object Model)
- Node

### Các thẻ HTML thường gặp

- Trên thực tế, có rất nhiều loại thẻ khác nhau:
    - Thẻ tiêu chuẩn: thẻ do tổ chức uy tín mozilla định nghĩa
    - Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa

- Các thẻ tiêu chuẩn thường gặp
    - **1. Thẻ Cấu Trúc khung trang**
        - `<html>`: Thẻ gốc của trang
        - `<head>`: Chứa metadata: tiêu đề website, hiển thị Google
        - `<body>`: Nội dung của cả website hiển thị
    - **2. Thẻ Bố Cục & Ngữ nghĩa**
        - `<div>`: Khối/container chung
        - `<header>`, `<footer>`, `<nav>`,
        - `<section>`: Thẻ ngữ nghĩa
    - **3. Thẻ Nội Dung**
        - `<h1>` đến `<h6>`: Tiêu đề
        - `<paragraph>`: Đoạn văn
        - `<ul>`, `<ol>`, `<li>`: Danh sách

    - **4. Thẻ Tương Tác & Media**
        - `<a>`: Liên kết
        - `<img>`: Hình ảnh

    - **5. Thẻ Form (Quan trọng cho Testing)**
        - `<form>`: Biểu mẫu
        - `<input>`: Ô nhập liệu (text, password, checkbox, radio, etc.)
        - `<button>`: Nút bấm
        - `<select>` và `<option>`: Dropdown
        - `<textarea>`: Vùng văn bản nhiều dòng


** Demo tất tần tật các thẻ:
https://material.playwrightvn.com/035-DOM-elements.html



## 2. Selector

**Automation = tương tác** với các phần tử trên trang web
- Input
- Fill
- Click
- ...

Để tương tác được, ta cần **tìm** được phần tử này. Selector là công cụ giúp ta **tìm**.



Có 3 loại selector thường dùng:
- **XPath**
    - Dùng được trong hầu hết các trường hợp (99.99%)
    - Đa dạng, có khả năng tìm các phần tử khó
    - Hơi dài
    - VD: `//button[normalize-space() = ‘Add to cart’]`
- **CSS selector**
    - Ngắn gọn, performance cao
    - Dùng cho các trường hợp dễ tìm.
    - Không linh hoạt bằng XPath
    - VD: `.add-to-cart`
- **Playwright selector**
    - Chỉ dùng riêng cho Playwright
    - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
    - Hướng tới “giống người dùng đang nhìn thấy gì”
    - VD: `page.getByText(“Add to cart”);`

**Khi nào thì dùng gì?**
- ***Playwright selector > CSS Selector > XPath***
- Vẫn cần học hiểu cả ba loại để có thể “cân” được mọi loại dự án.
- Có những dự án “thích” dùng CSS, “thích” dùng XPath, ta buộc phải tuân theo.


### 2.1. XPath selector
- XPath = XML Path
- Có 2 loại:
    - **Tuyệt đối**: đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - **Tương đối**: tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - `//tenthe[@thuoctinh=”giatri”]`
- Nên dùng XPath tương đối


#### 2.1.1.  XPath Tuyệt Đối

Bắt đầu từ root (gốc), dùng dấu `/`

`/html/body/div/input`

**Đặc điểm:**
- Bắt đầu bằng `/`
- Phải viết đầy đủ đường dẫn từ root
- Dễ bị lỗi khi cấu trúc HTML thay đổi
- Ít linh hoạt

#### 2.2.2. XPath Tương Đối

Bắt đầu từ bất kỳ đâu trong DOM, dùng `//`

`//input[@id=’user’]`

**Đặc điểm:**

- Bắt đầu bằng `//`
- Tìm element ở bất kỳ vị trí nào
- Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
- **Nên dùng** trong thực tế


#### 2.2.3. Khi Nào Dùng Gì?

✅ **Dùng tương đối** ( `//` ): 99% trường hợp

❌ **Tránh tuyệt đối** ( `/` ): Chỉ khi bạn chắc chắn cấu trúc không đổi

**Mẹo**: Luôn kết hợp với attributes như `@id`, `@class`, `@name` để XPath chính xác hơn!



### 2.2. Playwright basic syntax

**Automation = tương tác + verify**

Trong bài này, ta học cách tương tác với các phần tử
- Viết một test
- Tổ chức thành các step
- Tương tác cơ bản
    - Navigation
    - Click
    - Fill

**test**: Đơn vị cơ bản để khai báo một test

```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {

// Code của test

});
```


**step**: Đơn vị nhỏ hơn test, để khai báo từng step của test case

```
await test.step('Tên step', async () => {
    // Code here
});

------

test('<tên test>', async ({ page }) => {

    await test.step('Tên step', async () => {

        // Code here

    });
});
```

   - Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.


**Navigate**
```
await
page.goto('https://pw-practice.playwrightvn.com/');
```


**Locate**
Sử dụng page.locator(“<selector>”) để chọn phần tử trên trang

VD:
`page.locator(“//input[@id=’email’]”)`


**Click**

```
Single click
await page.locator("//button").click();

Double click
await page.locator("//button").dblclick();

Click chuột phải
page.locator("//button").click({
button: 'right'
})

Click chuột kèm bấm phím khác
page.locator("").click({
modifiers: ['Shift'],
})
```


**Input**

- **Fill**: Giống việc bạn paste content vào một ô input 

    `page.locator("//input").fill('Playwright Viet Nam');`

- **pressSequentially**: Giống việc bạn gõ từng chữ cái vào ô input

    ```
    page.locator("//input").pressSequentially('Playwright Viet Nam', {
        delay: 100,
    });
    ```


**Radio/checkbox**
- Lấy giá trị hiện tại đang là check hay không:
    ```
    const isChecked =
    page.locator("//input").isChecked();
    ```
- Check/ uncheck
    ```
    page.locator("//input").check();
    page.locator("//input").setChecked(false);
    ```


**Select**

    ```
    await page.locator('//select[@id=”country”]')
        .selectOption({ label: 'USA' })
    ```


**Upload file**

```
await page.locator("//input[@id='profile']")

.setInputFiles("<file-path>");
```