import Slider from "react-slick/lib/slider";
import CardProduct from "../../../common/CardProduct";
export default function ProductSimilarInfo(props){
    let {listsimilar} = props;

    var setting = {
        infinite: listsimilar.length > 6,
        slidesToShow: 6,
        slidesToScroll: 1,
    }
    function creactCardSimilarProduct(listsimilar){
        return listsimilar.map(v=>(
            <CardProduct key={v._id} 
                        _id={v._id} 
                        name={v.name}
                        pricesale={v.after_discount_price} 
                        images={v.images}/>
            
        ))
    }
    return(
        <div className="card-similarproduct">
            <div className="card-simip-title">Sản phẩm tương tự</div>
            <div className="card-similarproduct-container">
                <Slider {...setting}>
                    {creactCardSimilarProduct(listsimilar)}
                </Slider>
            </div>
        </div>
    );
}