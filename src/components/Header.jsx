function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">TaskFlow</a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <nav>
                                <ul className="navbar-nav">
                                    <li><a className="nav-link active" aria-current="page" href="#">Trang chủ</a></li>
                                    <li><a className="nav-link " aria-current="page" href="#">Tính năng</a></li>
                                    <li><a className="nav-link " aria-current="page" href="#">Tài nguyên</a></li>
                                    <li><a className="nav-link " aria-current="page" href="#">Về chúng tôi</a></li>
                                </ul>
                            </nav>

                            <div className="d-flex align-items-center gap-2 ms-auto mt-2 mt-lg-0">
                                <a href="#" className="btn btn-link text-dark text-decoration-none fw-medium px-3 py-2">
                                    Đăng nhập
                                </a>
                                <button type="button" className="btn btn-primary rounded-3 px-3 py-2 fw-medium">
                                    Bắt đầu
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;