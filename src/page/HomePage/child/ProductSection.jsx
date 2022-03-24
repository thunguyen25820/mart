import CardProduct from "../../../common/CardProduct";

export default function ProductSection(props){
    let {title, listProduct} = props;
    function createCardProduct(listProduct){
        return listProduct.map(v=>(
            <div className="products" key={v._id} >
                <CardProduct key={v._id} id={v._id} name={v.name} pricesale={v.after_discount_price} images={v.images}/>
            </div>
        ))
    }
    return (
        <div className="product-section">
            <div className="product-title">
                <span>{title}</span>
            </div>
            {createCardProduct(listProduct)}
        </div>
    );
}