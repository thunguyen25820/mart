import { useState } from "react";
export default function DescriptionInfo(props){
    let {description} = props;
    const [ currentTab , setCurrentTab ] = useState("description");
    function changeCurrentTab(){
        if(currentTab === "description"){
            return setCurrentTab("comment");
        }else{
            return setCurrentTab("description");
        }
    }
    function changeActiveTab(){
        if(currentTab === "description"){
            return(
                <div className="tab-title">
                    <div onClick={changeCurrentTab} className="title-active">Mô tả sản phẩm</div>
                    <div onClick={changeCurrentTab}>Đánh giá</div>
                </div>
            );
        }else{
            return(
                <div className="tab-title">
                    <div onClick={changeCurrentTab}>Mô tả sản phẩm</div>
                    <div onClick={changeCurrentTab} className="title-active">Đánh giá</div>
                </div>
            );
        }
    }
    function changeContentTab(){
        if(currentTab === "description"){
            return(description
                ?(<div className="tab-content-desc" dangerouslySetInnerHTML={{__html: description}}></div>)
                :(<div className="tab-content-nodesc">
                    Sản phẩm chưa có mô tả từ nhà cung cấp.
                </div>)
            );
        }else{
            return(
                <div className="tab-content-comm">
                    Chưa có nhận xét nào cho sản phẩm này.
                </div>
            ); 
        }
    }
    return(
        <div className="tab-comm-desc">
            {changeActiveTab()}
            {changeContentTab()}
        </div>
    );
}