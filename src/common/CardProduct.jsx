
export default function CardProduct(property){
    let{name,pricesale,images} = property;

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
                <img src={images} alt=""/>
            </div>
            <div className="card-title">
               {name}
            </div>
            <div className="card-pricesale">
                {pricesale}<sup>đ</sup></div>
            <div className="card-price">
                <s>207000 <sup>đ</sup></s>
            </div>
        </div>
    );
}