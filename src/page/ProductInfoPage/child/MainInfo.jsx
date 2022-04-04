

export default function MainInfo(props) {
    let { _id, image, name, rating, sold, saleprice, price, quality } = props;
    return (
        <div className="maininfo">
            <div className="maininfo-img">
                <img src={image} alt="" />
            </div>
            <div className="maininfo-container">
                <h2>{name}</h2>
                <div className="maininfo-rating">
                    <span className="sold">Đã bán {sold}</span>
                </div>
                <div className="maininfo-price">
                    <span>{saleprice} <sup>đ</sup></span>
                </div>
                <div className="maininfo-cart">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    );
}