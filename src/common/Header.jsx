import React from "react";
import Category from "./Category";
export default function Header(){
    function onTongleClick(){
        document.querySelector('.dropdown-category').classList.toggle('dropdown-category-show');
    }
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
                    <div className="heart">
                        <i className='bx bxs-heart'></i>
                        <div className="heart-info">
                            <span className="heart-info-value">0</span>
                            <span className="heart-info-title">Yêu thích</span>
                        </div>
                    </div>
                    <div className="cart">
                        <i class='bx bx-cart-alt' ></i>
                        <div className="cart-info">
                            <span className="cart-info-value">0</span>
                            <span className="cart-info-title">Giỏ Hàng</span>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav-menu">
                        <ul>
                            <button onClick={onTongleClick}>
                                <i class='bx bx-menu' ></i>
                            </button>
                            {/*  */}
                            <div className="dropdown-category">
                                <Category></Category>
                            </div>
                            {/*  */}
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
            <div className="nav-mobile">
                <label htmlFor="category-checkbox" className="nav-mobile-category">
                    <i className='bx bx-menu'></i>
                    <span>Danh mục</span>
                </label>
                <input type="checkbox" className="category-checkbox" hidden/>
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
            <div className="nav-overlay">
            </div>
        </React.Fragment> 
    );
}