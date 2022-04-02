import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { constant } from "../../constants";
import { categoryAction } from "../../actions/categoryAction";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Category from "../../common/Category";
import ProductSection from "./child/ProductSection";
import { productAction } from "../../actions/productAction";
import { appAction } from "../../actions/appAction";
import Slider from "react-slick/lib/slider";   

export default function HomePage(){
    const dispatch = useDispatch();
    const listCategory = useSelector(store => store.category.listCategory);
    const listProduct = useSelector(store => store.product.listProduct);
    const listHomeInfo = useSelector(store => store.app.listHomeInfo);
        useEffect(() => {
        if(listCategory.state === constant.LOADING){
            dispatch(categoryAction.getCategory());
        }
        if(listProduct.state === constant.LOADING){
            dispatch(productAction.getProduct());
        }
        if(listHomeInfo.state === constant.LOADING){
            dispatch(appAction.getHomeInfo());
        }
    })
    function createBanners(banners) {
        console.log(banners.length);
        return banners.map((v, i) => {
            return (
                <div className="slider" key={v._id}>
                    <img src={v.image} alt="" />
                </div>
            )
        })
      }
    var setting = {
        infinite: true, //cho phep lap lai vong tron
        slidesToShow: 1, // moi lan hien 1 tam
        slidesToScroll: 1, //moi lan scroll qua nhieu tam
        dots: true, // may nut ben duoi
        dotsClass: "slick-dots slick-thumb", //kieu cua dau cham
        autoplay: true, //tu chuyen trang
        autoplaySpeed: 2000, //toc doi chuyen
      }
      
    return(        
        <>
        {listHomeInfo.state === constant.LOADING?<></>:(
            <><Header />
            <div className="container">
                <Category />
                <div className="container-slider" style={{width:"calc(100% - 320px)",overflow:"hidden"}}>
                      <Slider {...setting}>
                        {createBanners(listHomeInfo.data.banners)}
                      </Slider>
                </div>
            </div>
            {(!listHomeInfo.data) ? <div></div> : <ProductSection title="Sản phẩm nổi bật" listProduct={listHomeInfo.data.hot_products}/>} 
            {(!listHomeInfo.data) ? <div></div> : <ProductSection title="Sản phẩm mới" listProduct={listHomeInfo.data.new_products}/>} 
            <Footer />
            </>
        )}
        
        </>
    );
}