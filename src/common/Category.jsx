import { useSelector } from "react-redux";
import CardCategory from "./CardCategory";
export default function Category(){
    const listCategory = useSelector(store => store.category.listCategory);
    function createCategory(data){
        return data.map(v =>(
            <CardCategory key={v._id} image={v.image} name={v.name} id={v._id}></CardCategory>
        ))
            
    } 
    return(
        !listCategory.data ? <div></div> :
            <div className="category-container">
                <h3>DANH MỤC SẢN PHẨM</h3>
                <div className="category">
                    {createCategory(listCategory.data)}
                </div>
            </div>
            
    );
}