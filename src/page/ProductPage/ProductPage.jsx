import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productAction } from "../../actions/productAction";
import { categoryAction } from "../../actions/categoryAction";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Category from "../../common/Category";
import { constant } from "../../constants";
import CardProduct from "../../common/CardProduct";
import TransBtnDinamic from "./child/TransBtnDinamic";
import { useSearchParams } from "react-router-dom";
export default function ProductPage(){
    const dispatch = useDispatch();
    let [params]=useSearchParams();
    let page=params.get("page");
    const listCategory = useSelector(store => store.category.listCategory);
    const listProduct = useSelector(store => store.product.listProduct);
    useEffect(() => {
        if(listProduct.state === constant.LOADING){
            dispatch(productAction.getProducts(page));
        }
        if(listCategory.state === constant.LOADING){
            dispatch(categoryAction.getCategory());
        }
        else{
            console.log("load product:",listProduct.total_page);
        }
    });
    function Products(listProduct){
        return listProduct.map(v=>{
            return <CardProduct key={v._id} 
                        _id={v._id} 
                        name={v.name}
                        pricesale={v.after_discount_price} 
                        images={v.images}/>
        })
    }
    return(
        <>
            <Header />
            <div className="productpage-container">
                <Category/>
                <div className="product-container-dinamic">
                    {(!listProduct.data ? <div></div>
                                        :(<>
                                            <div className="product-container">
                                                {Products(listProduct.data)}
                                            </div>
                                            <TransBtnDinamic totalpage = {listProduct.total_page}/>
                                          </>)
                    )}

                    
                </div>
                    
            </div>
            <Footer />
        </>
    );
}