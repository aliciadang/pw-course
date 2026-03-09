## A. Git undo actions

### 1. Undo latest commit message

```
git commit -amend -m "new commit message"
```

- rebase: will learn later

### 2. Un-stage (staging -> WD)

- Un-stage 1 file

```
git restore --staged <file>
```

- Un-stage all files

```
git restore --staged .
```

### 3. Un-commit (Repo -> Staging)

```
git reset --soft HEAD~1
```

### 4. Un-commit (Repo -> WD)

```
git reset HEAD~1
```

### \*\* Notes

---

- **Commit đầu tiên không thể bị reset.**
- **Nếu muốn reset → xoá thư mục .git đi rồi init lại**

---

## B. Git branch

- Xem danh sách các nhánh

```
git branch
```

- Chỉ tạo nhánh, chưa chuyển sang

```
git branch feature/login
```

- Chuyển sang nhánh vừa tạo

```
git checkout <branch_name>
```

- Vừa tạo, vừa chuyển nhánh

```
git checkout -b feature/login
```

- Xoá nhánh

```
git branch -D <tên nhánh>
```

\*\* **Lưu ý: đứng ở nhánh khác trước khi xoá.**

- Đưa nhánh lên online (remote)

```
git push origin <tên_nhánh>
```

- Xoá nhánh trên online (remote)

```
git push -D origin <tên_nhánh>
```

## C. Git ignore file

- File .gitignore là một file cấu hình quan trọng trong Git, giúp bạn chỉ định những file và thư mục nào sẽ không được theo dõi (untracked) bởi Git.
- Tại sao cần .gitignore?
  => Trong dự án thường có nhiều file không cần thiết phải đưa vào Git repository như:
  - File tạm thời của hệ điều hành (.DS_Store, Thumbs.db)
  - Thư mục dependencies (node_modules/, vendor/)
  - File build và artifacts (dist/, build/, \*.exe)
  - File cấu hình cá nhân (IDE settings, environment variables)
  - File nhạy cảm (API keys, passwords, certificates)
  - File log và database local

## D. JavaScript Conditionals

### 1. Câu điều kiện

- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy
  Nếu điều kiện đúng thì mới chạy

* Trong JavaScript, có các loại câu điều kiện:
  - if
  - if...else
  - if...else if...else
  - switch...case

### 2. Vòng lặp

- Vòng lặp dùng để lặp lại 1 đoạn logic.
- Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng
- Trong JavaScript, có các loại vòng lặp:
  - for (i)
  - for (of)
  - for (each)
  - for (in)
  - while
  - do...while

### 3. Convention

- Convention giúp:
  - Code theo format chung, dễ nhìn
  - Người khác trong team dễ đọc code

- Một số convention phổ biến:
  - **snake_case**: trông giống con rắn; tất cả các chữ viết thường, cách nhau bởi dấu gạch dưới
  - **kebab-case**: trông giống que xiên Hàn Quốc; tất cả các chữ viết thường, cách nhau bởi dấu gạch ngang
  - **camelCase**: trông giống con lạc đà; chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên
  - **PascalCase**: tên của nhà toán học Pascal; tất cả các chữ cái đầu viết hoa

### 4. Console.log nâng cao

- Sử dụng với nháy đơn, nháy kép

```
console.log(‘Toi la Linh’);
console.log(“Toi la Phong”);
```

- Sử dụng kèm với variable

```
let name = “Linh”;
console.log(`Toi la ${name}`);
```

- Sử dụng cộng chuỗi

```
console.log(“Toi ten la” + name + “”)
```
