import { useSearchParams } from "react-router-dom";
import queryString from "query-string";

export default function CardCategory(property) {
    let { id, image, name } = property;
    const [params] = useSearchParams();
    let queryObj = queryString.parse(params.toString());//queryString doi chuoi ve obj
    let obj = { ...queryObj, categories: id, page: 1 };
    let href = window.location.origin + "/product?" + queryString.stringify(obj);//stringify doi obj thanh chu bo vao href
    return (
        <a href={href} className="category-card">
            <img src={image} alt="" />
            <div className="title">{name}</div>
        </a>
    );
}