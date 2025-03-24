import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const List = ({datainfo}) => {
    const { boardnm } = useParams();
    // 주소창에서 변수를 가져오는 기능
    // boardnm 변수를 읽어서 저장함
    // 
    useEffect(()=>{
        console.log(datainfo[boardnm]);
        //return "이 컴포넌트가 사라질때 처리해라."; 
        // datainfo["notice"] || datainfo."notice"
    }, []) 
    return ( 
      <div>
         <div style={{display:"flex", width : '100%'}}>
            <h2 style={{marginRight :"auto"}}>
                {datainfo[boardnm]["title"]}
            </h2>
            <p>
                <Link to='/'>홈</Link> / 
                <Link to={`/board/${boardnm}`}>{datainfo[boardnm]["title"]}</Link>
             </p>  
         </div>
         <p>전체게시글  : { datainfo[boardnm]["info"].length} 건 </p>
         <ul>
       { 
            datainfo[boardnm]["info"].length > 0 
            ?
            datainfo[boardnm]["info"].map((v, i)=> ( 
                    <li key={v.id} 
                        style={{borderBottom : "1px solid #333", "display" :"flex"}} >
                        { v.imgsrc && <img src={v.imgsrc} ></img> }
                        <Link to={`/board/${boardnm}/${v.id}`} style={{marginRight:"auto", "display" :"block"}}>{ v.title }</Link>
                        { v.date }
                    </li>
                )
                )
            :
            <li>게시글이 없습니다.</li>

       }
      
        </ul>
        </div>
    )
  
};

export default List;