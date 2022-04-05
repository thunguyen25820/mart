import { useState } from "react";

export default function MainInfo(props) {
    let { _id, image, name, rating, sold, saleprice, price, quality } = props;
    const [qualityValue, setQualityValue] = useState(1);
    function qualityDecrease(){
        if(qualityValue > 1){
            return setQualityValue(qualityValue - 1);
        }
    }
    function qualityIncrease(){
        if(qualityValue < quality){
            return setQualityValue(qualityValue + 1);
        }
    }

    // function changeValueInput(e){
    //     let number = parseInt(e.target.value);
    //     if(number > quality){
    //         return setQualityValue(quality);
    //     }else{
    //         return setQualityValue(number);

    //     }
    // }
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
                <div className="maininfo-quality">
                    <div className="maininfo-quality-title">Số lượng</div>
                    <div className="maininfo-quality-container">
                        { qualityValue < 1 ? <button onClick={qualityDecrease} className="quality-decrease" disabled={true}>-</button>
                                            : <button onClick={qualityDecrease} className="quality-decrease">-</button>}
                        <input type="text" className="quality-value" value={qualityValue} />
                        { qualityValue > quality ? <button onClick={qualityIncrease} className="quality-increase" disabled={true}>+</button>
                                                : <button onClick={qualityIncrease} className="quality-increase">+</button>}
                        
                    </div>    
                </div>
                <div className="maininfo-cart">
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    );
}