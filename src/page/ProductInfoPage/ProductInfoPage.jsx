import { useDispatch , useSelector  } from "react-redux"
import { useEffect } from "react"
import { constant } from "../../constants";
import {productAction} from "../../actions/productAction"
import MainInfo from "./child/MainInfo";
import DetailInfo from "./child/DetailInfo";
import DescriptionInfo from "./child/DescriptionInfo";
import ProductSimilarInfo from "./child/ProductSimilarInfo";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

export default function ProductInfoPage(){
    const dispatch = useDispatch();
    const productInfo  = useSelector(store => store.product.productInfo);
    const similarproduct = useSelector(store => store.product.productSimilar)
    useEffect(()=>{
        if(productInfo.state === constant.LOADING){
            dispatch(productAction.getProductInfo());
        }else{            
            console.log("ihijgygsu");
        }

        if(similarproduct.state === constant.LOADING){
            dispatch(productAction.getProductSimilar());
        }else{
            console.log("state # similar product");
        }
    })
    return(
        <>
            <Header/>
            {!productInfo.data ? <div></div> :
                <div>
                    <MainInfo 
                        image = {productInfo.data.images}
                        name = {productInfo.data.name}
                        sold = {productInfo.data.sold}
                        saleprice = {productInfo.data.after_discount_price}/>
                    <DetailInfo attributes = {productInfo.data.attributes}/>
                    <DescriptionInfo description = {productInfo.data.description}/>
                    {!similarproduct.data ? <div></div> :
                        <ProductSimilarInfo listsimilar = {similarproduct.data}/>}
                </div>}
                <Footer/>
        </>
    )
}