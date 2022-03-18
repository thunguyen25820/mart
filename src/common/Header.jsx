export default function Header(){
    return(
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
                <div className="category">
                    <i class='bx bx-menu' ></i>
                </div>
                <ul>
                    <li>Trang chủ</li>
                    <li>Sản phẩm</li>
                    <li>Tin tức</li>
                    <li>Voucher</li>
                </ul>
            </div>
        </div>
    );
}