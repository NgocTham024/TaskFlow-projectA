### Hướng dẫn clone, setup môi trường và chạy project React

---

# 1. Yêu cầu môi trường

Trước khi chạy project, cần cài đặt các phần mềm sau:

## 1.1. Cài Node.js

Tải và cài đặt Node.js:

```txt
https://nodejs.org
```
Sau khi cài xong, mở Terminal / CMD / PowerShell và kiểm tra:

```bash
node -v
npm -v
```
Nếu hiển thị version nghĩa là đã cài thành công.

Ví dụ:
```bash
node -v
v20.x.x

npm -v
10.x.x
```
---

## 1.2. Cài Git

Git dùng để clone source code từ GitHub.

Tải và cài đặt Git tại:

```txt
https://git-scm.com
```

Sau khi cài xong, kiểm tra bằng lệnh:

```bash
git --version
```

Nếu hiển thị version nghĩa là đã cài thành công.

Ví dụ:

```bash
git --version
git version 2.x.x
```

---

## 1.3. Cài Visual Studio Code

Nên dùng Visual Studio Code để mở và chỉnh sửa project.

---

# 2. Clone project từ GitHub

## Bước 1: Mở thư mục muốn lưu project

Hoặc tạo thư mục riêng:

```bash
mkdir ReactProjects
cd ReactProjects
```
---

## Bước 2: Clone project

Dùng lệnh:

```bash
git clone <link-github-repository>
```

Sau khi clone xong, di chuyển vào thư mục project:

```bash
cd tên-thư-mục
```

---

# 3. Mở project bằng Visual Studio Code

Có thể mở project bằng lệnh:

```bash
code .
```
---

# 4. Cài đặt thư viện cho project

Sau khi mở project, chạy lệnh sau trong terminal:

```bash
npm install
```
---

# 5. Chạy project React

Chạy lệnh:

```bash
npm run dev
```
Sau khi chạy thành công, terminal sẽ hiển thị đường dẫn localhost, ví dụ:

```txt
Local: http://localhost:5173/
```

Mở trình duyệt và truy cập:

```txt
http://localhost:5173
```
---

# 6. Một số lệnh thường dùng

## Chạy project

```bash
npm run dev
```

## Cài thư viện

```bash
npm install
```

## Cài thêm React Router

```bash
npm install react-router-dom
```

## Cài thư viện kéo thả task

```bash
npm install @dnd-kit/core @dnd-kit/sortable
```

## Dừng project

Nhấn tổ hợp phím trong terminal:

```txt
Ctrl + C
```

Sau đó nhập:

```txt
Y
```


