

export default function DetailInfo(props){
    let {attributes} = props;
    function createInfo(attributes){
        return attributes.map(v=>{
            return (
                <div className="detailinfo-containerinfo">
                    <div className="detailinfo-name">{v.name}</div>
                    <div className="detailinfo-info">{v.value}</div>
                </div>
            );
        })
    }
    return (
        <div className="detailinfo">
            <div className="detailinfo-title">Thông tin chi tiết</div>
            <div className="detailinfo-container">
                {createInfo(attributes)}
            </div>
        </div>
    );
}