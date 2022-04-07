import CardProduct from "../../../common/CardProduct";
import slider from "react-slick/lib/slider";
import Slider from "react-slick/lib/slider";

export default function ProductSection(props){
    let {title, listProduct} = props;
    var setting = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    function createCardProduct(listProduct){
        return listProduct.map(v=>(
            <CardProduct key={v._id} 
                        _id={v._id} 
                        name={v.name}
                        pricesale={v.after_discount_price} 
                        images={v.images}/>
            
        ))
    }
    return (
        <div className="product-section">
            <div className="product-title">
                <span>{title}</span>
            </div>
            <div className="products">
                <Slider {...setting}>
                    {createCardProduct(listProduct)}
                </Slider>
            </div>
        </div>
    );
}