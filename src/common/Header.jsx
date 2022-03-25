import React from "react";
export default function Header(){
    return(
        <React.Fragment>
            <div className="header">
                <div className="header-container">
                    <div className="logo">
                        <span>MTMart</span>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Nhap tu khoa" />
                        <i className='bx bx-search-alt-2'></i>
                    </div>
                    <div className="cart">
                        <i class='bx bx-cart-alt' ></i>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav-menu">
                        <ul>
                            <i class='bx bx-menu' ></i>
                            <li>Trang chủ</li>
                            <li>Sản phẩm</li>
                            <li>Tin tức</li>
                            <li>Voucher</li>
                        </ul>
                    </div>
                    <div className="nav-login">
                        <button className="loginbtn">Đăng nhập</button>
                        <button className="signinbtn">Đăng ký</button>
                    </div>
                    
                </div>
            </div>
            {/* mobile */}
            <div className="nav-overlay"></div>
            <div className="nav-mobile">
                <div className="nav-mobile-category">
                    <i className='bx bx-menu'></i>
                    <span>Danh mục</span>
                </div>
                <div className="nav-mobile-home">
                    <i className='bx bxs-home'></i>
                    <span>Trang chủ</span>
                </div>
                <div className="nav-mobile-news">
                    <i className='bx bxs-news'></i>
                    <span>Tin tức</span>
                </div>
                <div className="nav-mobile-user">
                    <i className='bx bxs-user'></i>
                    <span>Cá nhân</span>
                </div>
            </div>
        </React.Fragment> 
    );
}