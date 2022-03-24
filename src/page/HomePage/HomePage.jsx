import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { constant } from "../../constants";
import { categoryAction } from "../../actions/categoryAction";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Category from "../../common/Category";
import ProductSection from "./child/ProductSection";
import { productAction } from "../../actions/productAction";

export default function HomePage(){
    const dispatch = useDispatch();
    const listCategory = useSelector(store => store.category.listCategory);
    const listProduct = useSelector(store => store.product.listProduct)
    useEffect(() => {
        if(listCategory.state === constant.LOADING){
            dispatch(categoryAction.getCategory());
        }
        if(listProduct.state === constant.LOADING){
            dispatch(productAction.getProduct());
        }
    })
    return(
        <>
        <Header />
        <div className="container">
            <Category />
            <div className="slider">
                <img src="./image/la_roche_posay.jpeg" alt="" />
                <div className="control prev">
                    <i className='bx bx-chevron-left-circle'></i>
                </div>
                <div className="control next">
                    <i className='bx bx-chevron-right-circle'></i>
                </div>
            </div>
        </div>
        {(!listProduct.data) ? <div></div> : <ProductSection title="ahihi" listProduct={listProduct.data}/>}
        <Footer />
        </>
    );
}