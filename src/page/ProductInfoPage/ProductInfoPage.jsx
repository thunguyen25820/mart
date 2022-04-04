import { useDispatch , useSelector  } from "react-redux"
import { useEffect } from "react"
import { constant } from "../../constants";
import {productAction} from "../../actions/productAction"
import MainInfo from "./child/MainInfo";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

export default function ProductInfoPage(){
    const dispatch = useDispatch();
    const productInfo  = useSelector(store => store.product.productInfo);
    useEffect(()=>{
        if(productInfo.state === constant.LOADING){
            dispatch(productAction.getProductInfo());
        }else{            
            console.log("ihijgygsu");
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
                </div>}
                <Footer/>
        </>
    )
}