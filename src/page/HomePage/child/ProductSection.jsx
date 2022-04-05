import CardProduct from "../../../common/CardProduct";

export default function ProductSection(props){
    let {title, listProduct} = props;
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
                {createCardProduct(listProduct)}
            </div>
        </div>
    );
}