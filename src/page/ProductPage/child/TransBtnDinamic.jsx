import { useSearchParams } from "react-router-dom";

export default function TransBtnDinamic(props) {
    let { totalpage } = props;
    console.log("totalpage", totalpage);

    let currentpage = 1;
    const [searchParam, setSearchParam] = useSearchParams(1);

    if (searchParam.get("page") != null) {
        currentpage = parseInt(searchParam.get("page"));
    }

    function createBtnDinamic(currentpage, totalpage) {
        let arr = [];
        if (totalpage <= 3) {
            console.log("tog", totalpage);
            // tao ngau nhien mang voi gia tri tung ptu =0 -> arr[0,0,0]
            arr = Array.from(new Array(totalpage), () => 0);
            return arr.map((v, i) => {
                return currentpage === i + 1
                    ? (<button key={"page:" + i + 1} className="actionbtn">
                        {i + 1}
                    </button>)
                    : (<button key={"page:" + i + 1} onClick={()=>handlePage(i+1)}>
                        {i + 1}
                    </button>)
            })
        } else {
            if (currentpage < totalpage - 2) {
                for (let i = currentpage; i <= currentpage + 2; i++) {
                    arr.push(i);
                }
            } else {
                for (let i = totalpage - 2; i <= totalpage; i++) {
                    arr.push(i);
                }
            }
            return arr.map((v, i) => {
                return v === currentpage
                    ? (<button key={"page:" + v} className="actionbtn">
                        {v}
                    </button>)
                    : (<button key={"page:" + v} onClick={()=> handlePage(v)}>
                        {v}
                    </button>)
            })
        }
    }

    function handlePage(page) {
        window.location.href = window.location.origin + window.location.pathname + "?page=" + page;
    }
    return (
        totalpage < 2 ? <div></div>
            : (<div className="dinamicbtn-container">
                {currentpage - 1 < 1
                    ? (<button disabled={true}>
                        <i className='bx bxs-chevron-left'></i>
                    </button>)
                    : (<button onClick={() => handlePage(currentpage - 1)}>
                        <i className='bx bxs-chevron-left'></i>
                    </button>)}
                {createBtnDinamic(currentpage, totalpage)}
                {currentpage + 1 > totalpage
                    ? (<button disabled={true}>
                        <i className='bx bxs-chevron-right' ></i>
                    </button>)
                    : (<button onClick={() => handlePage(currentpage + 1)}>
                        <i className='bx bxs-chevron-right' ></i>
                    </button>)}
            </div>)
    );
}