export default function Footer(){
    return(
        <div className="footer">
            <div className="policy">
                <div className="policy-rule">
                    <i className='bx bx-clipboard'></i>
                    <span>Điều khoản - Chính sách</span>
                </div>
                <div className="policy-return">
                    <i className='bx bx-rotate-left'></i>
                    <span>Chính sách đổi trả</span>
                </div>
                <div className="policy-support">
                    <i className='bx bx-crosshair'></i>
                    <span>Chính sách hổ trợ</span>
                </div>
                <div className="policy-privacy">
                    <i className='bx bx-check-shield'></i>
                    <span>Chính sách bảo mật</span>
                </div>
            </div>
            <div className="footer-container">
                <span><em>Địa chỉ: </em>khu phố 6, phường Linh Trung, quận Thủ Đức,TP.HCM</span>
                <span><em>Email: </em>mtmart@gmail.com</span>
                <span><em>Số điện thoại: </em>033-88-05-165</span>
            </div>
        </div>
    );
}