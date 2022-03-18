import Header from "../common/Header";
import Footer from "../common/Footer";
import Category from "../common/Category";
import CardProduct from "../common/CardProduct";

export default function HomePage(){
    return(
        <>
        <Header />
        <div className="container">
            <Category />
            <div className="slider">
                <img src="./image/la_roche_posay.jpeg" alt="" />
                <div className="control prev">
                    <i class='bx bx-chevron-left-circle'></i>
                </div>
                <div className="control next">
                    <i class='bx bx-chevron-right-circle'></i>
                </div>
            </div>
        </div>
        <div className="product">
            <div className="product-title">
                <span>Sản phẩm nổi bật</span>
            </div>
            <CardProduct />
        </div>
        <div className="product">
            <div className="product-title">
                <span>Sản phẩm mới</span>
            </div>
            <CardProduct />
        </div>

        <Footer />
        </>
    );
}