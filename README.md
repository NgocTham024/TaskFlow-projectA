# TaskFlow Frontend Project

## 1. Giới thiệu dự án

TaskFlow là một project frontend được xây dựng bằng **React**, mô phỏng hệ thống quản lý công việc theo dạng **Kanban Board**.
Dự án tập trung vào giao diện người dùng, xác thực tài khoản bằng **Auth**, quản lý task, kéo thả task giữa các cột và lưu dữ liệu trên localhost.

Project được phát triển dựa trên UI có sẵn gồm các phần chính:

* Trang chủ
* Trang tính năng
* Trang tài nguyên
* Trang về chúng tôi
* Trang đăng nhập / đăng ký
* Dashboard quản lý công việc
* Kanban Board quản lý task

---

## 2. Công nghệ sử dụng

### Frontend

* React
* Vite
* React Router DOM
* Context API
* LocalStorage
* CSS / Tailwind CSS
* DnD Kit dùng cho kéo thả task

### Auth

Project có sử dụng Auth để xác thực tài khoản.

Auth có thể được xử lý bằng:

* LocalStorage
* Mock user data
* Protected Route

### Database

Project chủ yếu làm về frontend.

Database PostgreSQL chỉ sử dụng nếu cần thiết hoặc nếu giảng viên yêu cầu lưu dữ liệu thật.

Trong bản frontend chính, dữ liệu có thể được lưu bằng:

* Mock data
* LocalStorage

--

## 3. Mục tiêu project

Mục tiêu chính của project là xây dựng một giao diện quản lý công việc hoàn chỉnh bằng React.

Các chức năng chính:

* Hiển thị giao diện theo UI đã thiết kế
* Đăng nhập / đăng ký tài khoản
* Bảo vệ route Dashboard bằng Auth
* Hiển thị danh sách project
* Hiển thị Kanban Board
* Hiển thị các cột task
* Thêm task
* Sửa task
* Xóa task
* Kéo thả task giữa các cột
* Lưu trạng thái đăng nhập
* Lưu dữ liệu task trên localhost

---

## 4. Phạm vi project

### Làm chính

* Giao diện Landing Page
* Trang tính năng
* Trang tài nguyên
* Trang về chúng tôi
* Trang đăng nhập
* Trang đăng ký
* Dashboard
* Sidebar
* Topbar
* Kanban Board
* Task Card
* Modal thêm / sửa task
* Auth frontend
* Lưu dữ liệu bằng localStorage

### Không tập trung làm

* Backend phức tạp
* Phân quyền nâng cao
* API lớn
* Deploy online
* Database bắt buộc
* Chat realtime
* Notification realtime

---

## 5. Phân chia công việc cho 3 thành viên

## Thành viên 1: Public UI

### Nhiệm vụ chính

Thành viên 1 phụ trách các giao diện bên ngoài hệ thống, bao gồm các trang người dùng nhìn thấy trước khi đăng nhập.

### Công việc cụ thể

* Làm Header
* Làm Footer
* Làm trang chủ
* Làm trang tính năng
* Làm trang tài nguyên
* Làm trang về chúng tôi
* Làm responsive cho các trang public
* Thống nhất màu sắc, font chữ, spacing theo UI

### Các file phụ trách

```txt
src/pages/HomePage.jsx
src/pages/FeaturesPage.jsx
src/pages/ResourcesPage.jsx
src/pages/AboutPage.jsx

src/components/layout/Header.jsx
src/components/layout/Footer.jsx

src/components/common/Button.jsx
src/components/common/Card.jsx
src/components/common/SearchBox.jsx
```

### Kết quả cần hoàn thành

* Có đầy đủ các trang public
* Giao diện giống UI đã cung cấp
* Header điều hướng được giữa các trang
* Button đăng nhập / bắt đầu hoạt động đúng
* Responsive tốt trên desktop, tablet và mobile

---

## Thành viên 2: Dashboard và Kanban Board

### Nhiệm vụ chính

Thành viên 2 phụ trách phần giao diện chính sau khi người dùng đăng nhập, đặc biệt là Dashboard và Kanban Board.

### Công việc cụ thể

* Làm Dashboard layout
* Làm Sidebar
* Làm Topbar
* Làm danh sách project
* Làm Progress Box
* Làm Kanban Board
* Làm Column
* Làm Task Card
* Làm Modal thêm task
* Làm Modal sửa task
* Làm chức năng xóa task
* Làm chức năng kéo thả task giữa các cột

### Các cột trong Kanban Board

```txt
Chưa bắt đầu
Đang làm
Đợi duyệt
Hoàn thành
```

### Thông tin trong Task Card

```txt
Tên task
Mô tả ngắn
Tag
Người phụ trách
Deadline
Độ ưu tiên
Số bình luận
```

### Các file phụ trách

```txt
src/pages/DashboardPage.jsx
src/pages/MyTasksPage.jsx
src/pages/CalendarPage.jsx
src/pages/ReportPage.jsx

src/components/dashboard/Sidebar.jsx
src/components/dashboard/Topbar.jsx
src/components/dashboard/ProgressBox.jsx
src/components/dashboard/ProjectList.jsx

src/components/board/Board.jsx
src/components/board/Column.jsx
src/components/board/TaskCard.jsx
src/components/board/TaskModal.jsx
src/components/board/AddTaskButton.jsx
```

### Thư viện đề xuất

```bash
npm install @dnd-kit/core @dnd-kit/sortable
```

### Kết quả cần hoàn thành

* Dashboard hiển thị giống UI
* Có Sidebar và Topbar
* Có Board quản lý task
* Thêm task được
* Sửa task được
* Xóa task được
* Kéo thả task giữa các cột được

---

## Thành viên 3: Auth và Data Frontend

### Nhiệm vụ chính

Thành viên 3 phụ trách xác thực tài khoản, quản lý dữ liệu frontend và kết nối dữ liệu nếu cần.

### Công việc cụ thể

* Làm trang Login
* Làm trang Register
* Làm AuthContext
* Làm ProtectedRoute
* Lưu thông tin user vào localStorage
* Lưu task vào localStorage
* Chuẩn bị mock data
* Xử lý logout
* Validate form đăng nhập / đăng ký
* Viết README
* Chuẩn bị hướng dẫn chạy project

### Các file phụ trách

```txt
src/pages/LoginPage.jsx
src/pages/RegisterPage.jsx

src/context/AuthContext.jsx
src/context/TaskContext.jsx

src/routes/ProtectedRoute.jsx

src/services/authService.js
src/services/taskService.js

src/data/mockUsers.js
src/data/mockProjects.js
src/data/mockTasks.js
```

### Kết quả cần hoàn thành

* Đăng nhập được
* Đăng ký được
* Logout được
* Chưa đăng nhập thì không vào được Dashboard
* Đăng nhập xong chuyển vào Dashboard
* Reload trang không mất trạng thái đăng nhập
* Task được lưu lại bằng localStorage

---

## 6.  Cấu trúc thư mục đề xuất

```txt
taskflow-frontend/
├── public/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SearchBox.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── ProgressBox.jsx
│   │   │   └── ProjectList.jsx
│   │   │
│   │   └── board/
│   │       ├── Board.jsx
│   │       ├── Column.jsx
│   │       ├── TaskCard.jsx
│   │       └── TaskModal.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── TaskContext.jsx
│   │
│   ├── data/
│   │   ├── mockUsers.js
│   │   ├── mockProjects.js
│   │   └── mockTasks.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── MyTasksPage.jsx
│   │   ├── CalendarPage.jsx
│   │   └── ReportPage.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── taskService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## 7. Timeline thực hiện trong 4 tuần

## Tuần 1: Setup project và dựng layout cơ bản

### Thành viên 1

* Setup Header
* Setup Footer
* Làm HomePage
* Tạo component Button, Card

### Thành viên 2

* Làm Dashboard layout
* Làm Sidebar
* Làm Topbar
* Dựng layout Board tĩnh

### Thành viên 3

* Setup React Router
* Tạo AuthContext
* Tạo mock data
* Tạo localStorage service
* Làm login cơ bản

### Kết quả tuần 1

* Project chạy được trên localhost
* Có routing giữa các trang
* Có layout trang chủ
* Có layout dashboard
* Có đăng nhập giả lập cơ bản

---

## Tuần 2: Hoàn thiện UI chính

### Thành viên 1

* Làm FeaturesPage
* Làm ResourcesPage
* Làm AboutPage
* Chỉnh responsive public pages

### Thành viên 2

* Làm Board component
* Làm Column component
* Làm TaskCard component
* Hiển thị task mẫu

### Thành viên 3

* Làm LoginPage hoàn chỉnh
* Làm RegisterPage
* Làm ProtectedRoute
* Xử lý logout

### Kết quả tuần 2

* Có đầy đủ các trang theo UI
* Login xong vào được Dashboard
* Chưa login thì không vào được Dashboard
* Board hiển thị task mẫu

---

## Tuần 3: Làm chức năng frontend

### Thành viên 1

* Chỉnh UI chi tiết
* Thêm hover effect
* Thêm animation nhẹ
* Tối ưu responsive

### Thành viên 2

* Làm thêm task
* Làm sửa task
* Làm xóa task
* Làm kéo thả task giữa các cột

### Thành viên 3

* Lưu task vào localStorage
* Lưu user vào localStorage
* Validate form login/register
* Kết nối dữ liệu giữa TaskContext và Board

### Kết quả tuần 3

* Thêm task được
* Sửa task được
* Xóa task được
* Kéo thả task được
* Reload trang không mất dữ liệu

---

## Tuần 4: Test, sửa lỗi và hoàn thiện báo cáo

### Thành viên 1

* Kiểm tra giao diện toàn bộ trang
* Sửa lỗi responsive
* Thống nhất màu sắc, font chữ, khoảng cách

### Thành viên 2

* Test Dashboard
* Test Kanban Board
* Sửa lỗi kéo thả task
* Sửa lỗi modal task

### Thành viên 3

* Test Auth
* Test localStorage
* Viết README
* Chuẩn bị hướng dẫn chạy project
* Chuẩn bị dữ liệu demo

### Kết quả tuần 4

* Project hoàn thiện
* Giao diện giống UI
* Auth hoạt động
* Dashboard hoạt động
* Kanban Board hoạt động
* Task lưu được trên localhost
---