
export default function CardProduct(){
    return(
        <div className="product-card">
            <div className="card-heart">
                <i className='bx bx-heart'></i>
            </div>
            <div className="card-sale">
                <p>30%</p>
                <p>OFF</p>
            </div>
            <div className="card-image">
                <img src="./image/sonbbia.png" alt=""/>
            </div>
            <div className="card-title">
                Son Kem Lì Bbia Last Velvet Lip Tint Version 
            </div>
            <div className="card-pricesale">
                144000<sup>đ</sup></div>
            <div className="card-price">
                <s>207000 <sup>đ</sup></s>
            </div>
        </div>
    );
}