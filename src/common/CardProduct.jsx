
export default function CardProduct(property){
    let{_id, name,pricesale,images} = property;
    function transProductInfo(_id){
        // window.location.href => đổi đường dẫn
        // window.location.origin => lấy tên miền url
        window.location.href = window.location.origin + "/product/" + _id;
    }
    return(
        <div className="product-card" onClick={()=>{transProductInfo(_id)}}>
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
            {/* <div className="card-price">
                <s>207000 <sup>đ</sup></s>
            </div> */}
        </div>
    );
}