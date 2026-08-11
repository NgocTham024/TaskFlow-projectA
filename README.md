
# Hướng dẫn cài đặt môi trường, clone, chạy project React và quy trình làm việc với Git/GitHub

---

# 1. Yêu cầu môi trường

Trước khi chạy project, cần cài đặt các phần mềm sau:

## 1.1. Cài Node.js

Tải và cài đặt Node.js:

```text
https://nodejs.org
```

Sau khi cài đặt xong, mở Terminal / Git Bash / PowerShell và kiểm tra:

```bash
node -v
```

Version đúng:

```text
v24.18.0
```

Nếu hiển thị phiên bản Node.js nghĩa là đã cài đặt thành công.

---

## 1.2. Cài pnpm

Project sử dụng **pnpm** để quản lý các package.

Cài đặt pnpm:

```bash
npm install -g pnpm
```

Kiểm tra phiên bản pnpm:

```bash
pnpm -v
```

Version đúng:

```text
11.21.0
```

> **Lưu ý:** Chỉ sử dụng `npm` để cài đặt pnpm. Sau khi cài đặt pnpm, sử dụng `pnpm` để quản lý package trong project.

---

## 1.3. Cài Git

Git được sử dụng để clone source code từ GitHub và quản lý phiên bản của project.

Tải và cài đặt Git tại:

```text
https://git-scm.com
```

Sau khi cài đặt xong, kiểm tra:

```bash
git --version
```

Ví dụ:

```text
git version 2.x.x
```

Nếu hiển thị phiên bản Git nghĩa là đã cài đặt thành công.

---

# 2. Clone project từ GitHub

## Bước 1: Mở thư mục muốn lưu project

Có thể mở Terminal / Git Bash và tạo một thư mục riêng:

```bash
mkdir ProjectA
cd ProjectA
```

---

## Bước 2: Clone project

### 1. Chạy lệnh:

```bash
git clone https://github.com/NgocTham024/TaskFlow-projectA.git
```

Sau khi clone thành công, Git sẽ tạo thư mục:

```text
TaskFlow-projectA
```

Kiểm tra:

```bash
ls
```

Kết quả:

```text
TaskFlow-projectA
```

---

### 2. Di chuyển vào project

```bash
cd TaskFlow-projectA
```

Kiểm tra vị trí hiện tại:

```bash
pwd
```

---

### 3. Kiểm tra các branch

Repository có nhiều branch. Để xem tất cả branch:

```bash
git branch -a
```

Ví dụ:

```text
* main
  remotes/origin/HEAD -> origin/main
  register
  remotes/origin/profile
```

Dấu `*` cho biết branch hiện tại.

---

### 4. Chuyển sang branch `main`

Để đảm bảo đang làm việc trên branch `main`:

```bash
git switch main
```

Hoặc:

```bash
git checkout main
```

Kiểm tra:

```bash
git branch
```

Kết quả:

```text
* main
```

---

Sau khi chuyển sang `main`, chạy:

```bash
git pull origin main
```

Lệnh này sẽ lấy phiên bản mới nhất của branch `main` trên GitHub về máy.
# 3. Mở project bằng Visual Studio Code

Sau khi di chuyển vào thư mục project, sử dụng:

```bash
code .
```

Project sẽ được mở bằng Visual Studio Code.

---

# 4. Cài đặt thư viện cho project

Sau khi clone project, chạy:

```bash
pnpm install
```

Lệnh này sẽ cài đặt tất cả các package được khai báo trong file `package.json`.

 **Lưu ý:**

Project đã có file `pnpm-lock.yaml`

hãy sử dụng `pnpm install`

để đảm bảo các thành viên sử dụng đúng phiên bản package.

---

# 5. Chạy project React

Để chạy project ở chế độ development:

```bash
pnpm dev
```

Sau khi chạy thành công, Terminal sẽ hiển thị địa chỉ localhost, ví dụ:

```text
Local: http://localhost:5xxx/
```

Mở trình duyệt và truy cập:

```text
http://localhost:5xxx
```

---

# 6. Một số lệnh thường dùng

## 6.1. Chạy project

```bash
pnpm dev
```

---

## 6.2. Cài đặt thư viện

```bash
pnpm install
```
---

## 6.3. Cài một package mới

```bash
pnpm add <package-name>
```

Ví dụ:

```bash
pnpm add axios
```

---

## 6.4  Quy ước cài đặt Dependencies

Để đảm bảo tất cả thành viên sử dụng cùng phiên bản thư viện và tránh lỗi khi làm việc nhóm, project sử dụng **pnpm** để quản lý dependencies.

## 6.4.1. Sử dụng pnpm

Tất cả thành viên sử dụng `pnpm` để cài đặt và quản lý package.

Cài pnpm:

```bash
npm install -g pnpm
```

Kiểm tra phiên bản:

```bash
pnpm -v
```

> Sau khi cài pnpm, không sử dụng `npm install` hoặc `yarn install` để cài dependencies cho project.

---

## 6.4.2. Cài dependencies khi clone project

Sau khi clone project từ GitHub:

```bash
git clone <repository-url>
cd <project-folder>
```

Cài dependencies:

```bash
pnpm install
```

Không cần tự cài từng package có sẵn trong `package.json`.

---

## 6.4.3. Cài package mới

Khi cần sử dụng một thư viện mới, sử dụng:

```bash
pnpm add <package-name>
```

Ví dụ:

```bash
pnpm add axios
```

Sau khi cài, pnpm sẽ tự động cập nhật:

```text
package.json
pnpm-lock.yaml
```

Hai file này phải được commit lên Git.

---

## 6.4.4. Cài package dành cho Development

Nếu package chỉ được sử dụng trong quá trình phát triển, sử dụng:

```bash
pnpm add -D <package-name>
```

Ví dụ:

```bash
pnpm add -D eslint
```

Hoặc:

```bash
pnpm add -D prettier
```

---

## 6.4.5. Không tự ý sửa package.json

Không nên tự ý thay đổi version của package trong `package.json` nếu không cần thiết.

Nếu cần cập nhật hoặc thêm package, sử dụng lệnh pnpm:

```bash
pnpm add <package-name>
```

hoặc:

```bash
pnpm add -D <package-name>
```

---

## 6.4.6. Không commit node_modules

Không được commit thư mục:

```text
node_modules/
```

Thư mục này phải được thêm vào `.gitignore`:

```gitignore
node_modules/
```

Khi clone project trên máy mới, chỉ cần chạy:

```bash
pnpm install
```

để cài lại dependencies.

---

## 6.4.7. Luôn commit pnpm-lock.yaml

File:

```text
pnpm-lock.yaml
```

phải được commit lên GitHub.

Sau khi cài hoặc thay đổi dependencies:

```bash
git status
```

Nếu thấy:

```text
modified: package.json
modified: pnpm-lock.yaml
```

thì cần commit cả hai file:

```bash
git add package.json pnpm-lock.yaml

git commit -m "Update dependencies"

git push
```

---

## 6.4.8. Không sử dụng nhiều package manager

Project chỉ sử dụng:

```text
pnpm
```

Không sử dụng đồng thời:

```text
npm
yarn
pnpm
```

Không commit các file lock của package manager khác:

```text
package-lock.json
yarn.lock
```

Project nên sử dụng:

```text
pnpm-lock.yaml
```

---

## 6.4.9. Khi cần thêm một dependency

```text
Xác định package cần sử dụng
          ↓
pnpm add <package-name>
          ↓
Code và kiểm tra
          ↓
git status
          ↓
git add package.json pnpm-lock.yaml
          ↓
git commit
          ↓
git push
          ↓
Pull Request
```

Ví dụ:

```bash
pnpm add react-router-dom

pnpm dev

git add package.json pnpm-lock.yaml

git commit -m "Add react router"

git push
```

---

## 6.4.10. Quy tắc quan trọng

- Sử dụng **pnpm** làm package manager duy nhất.
- Không sử dụng `npm install` hoặc `yarn install` trong project.
- Không commit `node_modules/`.
- Luôn commit `package.json`.
- Luôn commit `pnpm-lock.yaml`.
- Không tự ý xóa hoặc sửa `pnpm-lock.yaml`.
- Khi thêm package, sử dụng `pnpm add`.
- Khi thêm package development, sử dụng `pnpm add -D`.
- Trước khi tạo Pull Request, kiểm tra project bằng `pnpm dev`.
- Nếu thay đổi dependencies, phải thông báo cho các thành viên trong nhóm.

## 6.5. Xóa package

```bash
pnpm remove <package-name>
```

---

## 6.6. Dừng project

Nhấn:

```text
Ctrl + C
```

---

# 7. Quy trình làm việc với Git/GitHub

## Lưu ý quan trọng

- Không commit trực tiếp lên nhánh `main`.
- Mỗi task sử dụng một branch riêng.
- Mỗi thành viên phải làm việc trên branch của task được giao.
- Luôn cập nhật branch `main` mới nhất trước khi tạo branch mới.
- Chỉ tạo Pull Request sau khi đã hoàn thành và kiểm tra chức năng.
- Không tự ý merge Pull Request khi chưa được review/đồng ý.

---

# 7.1. Cập nhật branch `main`

Trước khi bắt đầu task mới, cần cập nhật `main`:

```bash
git switch main
```

Sau đó:

```bash
git pull origin main
```

Hoặc có thể sử dụng:

```bash
git checkout main
git pull origin main
```

---

# 7.2. Tạo branch cho task

Mỗi thành viên phải tạo một branch riêng cho task của mình.

Ví dụ:

```bash
git switch -c function1
```

Hoặc:

```bash
git checkout -b function1
```

Kiểm tra branch hiện tại:

```bash
git branch
```

Ví dụ:

```text
  main
* function1
```

Dấu `*` cho biết branch hiện tại đang được sử dụng.

---

# 7.3. Thực hiện code

Hoàn thành chức năng được giao trên branch của mình.

Trong quá trình phát triển, có thể chạy project bằng:

```bash
pnpm dev
```

Đảm bảo chức năng hoạt động bình thường trước khi commit.

---

# 7.4. Kiểm tra thay đổi

Trước khi commit, kiểm tra các file đã thay đổi:

```bash
git status
```

---

# 7.5. Commit thay đổi

Thêm các file đã chỉnh sửa:
## Chuyển sang branch của bạn trước khi commit
```bash
git add .
```

Commit:

```bash
git commit -m "Implement function1"
```

---

# 7.6. Push lên GitHub

## Lần đầu push branch

```bash
git push -u origin function1
```

Hoặc nếu branch có tên khác:

```bash
git push -u origin <branch-name>
```

Ví dụ:

```bash
git push -u origin login
```

## Các lần push tiếp theo

Sau khi branch đã được liên kết với GitHub:

```bash
git push
```

---

# 7.7. Tạo Pull Request

Sau khi push branch thành công:

1. Truy cập repository trên GitHub.
2. Chọn **Compare & Pull Request**.
3. Kiểm tra branch:
   - **base:** `main`
   - **compare:** branch của bạn.
4. Kiểm tra các file và thay đổi.
5. Viết mô tả cho Pull Request.
6. Tạo Pull Request.
7. Chờ thành viên review.
8. Nếu có yêu cầu chỉnh sửa, thực hiện trên branch của mình.
9. Commit và push lại.
10. Sau khi được review và chấp nhận, Pull Request có thể được merge vào `main`.

Ví dụ:

```text
base: main
       ↑
       │
compare: function1
```

---

# 8. Quy ước đặt tên branch

Tên branch nên được đặt theo task hoặc chức năng đang thực hiện.

## Ví dụ

```text
<tên của bạn> <function>
```

## Không nên đặt

```text
test
abc
new
update
branch1
mybranch

---

# 9. Quy ước Commit

Commit message cần ngắn gọn và mô tả rõ nội dung thay đổi.

## Ví dụ

```bash
git commit -m "Add login page"
```

```bash
git commit -m "Implement task creation"
```

```bash
git commit -m "Fix task card layout"
```

```bash
git commit -m "Add drag and drop functionality"
```

```bash
git commit -m "Fix login validation"
```

## Quy tắc đề xuất

```text
<Action> <Mô tả thay đổi>
```

Ví dụ:

```text
Add login page
Fix task validation
Update navbar
Remove unused component
Refactor task service
```

---

# 10. Quy trình hoàn chỉnh

Mỗi thành viên thực hiện theo quy trình sau:

```text
                main
                  │
                  ↓
        git pull origin main
                  │
                  ↓
          Tạo branch riêng
                  │
                  ↓
              Thực hiện code
                  │
                  ↓
          Kiểm tra chức năng
                  │
                  ↓
              git status
                  │
                  ↓
               git add .
                  │
                  ↓
              git commit
                  │
                  ↓
               git push
                  │
                  ↓
            Pull Request
                  │
                  ↓
             Code Review
                  │
                  ↓
            Merge vào main
```

---

# 11. Quick Start

### Bước 1: Clone project

```bash
git clone <link-github-repository>
```

### Bước 2: Di chuyển vào project

```bash
cd <tên-thư-mục>
```

### Bước 3: Cài dependencies

```bash
pnpm install
```

### Bước 4: Chạy project

```bash
pnpm dev
```

### Bước 5: Cập nhật main

```bash
git switch main
git pull origin main
```

### Bước 6: Tạo branch cho task

```bash
git switch -c <tên-task>
```

Ví dụ:

```bash
git switch -c login
```

### Bước 7: Code và kiểm tra

```bash
pnpm dev
```

### Bước 8: Commit

```bash
git add .
git commit -m "Implement login"
```

### Bước 9: Push

Lần đầu:

```bash
git push -u origin login
```

Các lần sau:

```bash
git push
```

### Bước 10: Tạo Pull Request

Tạo Pull Request:

```text
login → main
```

Sau khi được review và approve, tiến hành merge.

---

# 12. Lưu ý

- Không commit trực tiếp vào `main`.
- Mỗi task sử dụng một branch riêng.
- Luôn pull `main` trước khi bắt đầu task mới.
- Kiểm tra chức năng trước khi commit.
- Kiểm tra `git status` trước khi commit.
- Không commit thư mục `node_modules`.
- Không commit file `.env` hoặc thông tin bảo mật.
- Không commit API key, password hoặc access token.
- File `pnpm-lock.yaml` cần được commit lên Git.
- Sử dụng `pnpm` để cài đặt và quản lý package.
- Khi Pull Request xảy ra conflict, cần xử lý conflict trước khi merge.
- Sau khi Pull Request được merge thành công, có thể xóa branch của task.

---


# 13. Các lệnh pnpm thường dùng

| Lệnh | Chức năng |
|---|---|
| `pnpm install` | Cài đặt dependencies |
| `pnpm dev` | Chạy project |
| `pnpm add <package>` | Cài package |
| `pnpm add -D <package>` | Cài package cho development |
| `pnpm remove <package>` | Xóa package |
| `pnpm -v` | Kiểm tra phiên bản pnpm |

---