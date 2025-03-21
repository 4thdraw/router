import React from 'react';
import { useParams } from 'react-router-dom';

const List = ({datainfo}) => {
    const { boardnm } = useParams();

    return (
        <div>

            전체개시글 { datainfo[boardnm] && datainfo[boardnm]["info"].length }
            
            {   datainfo[boardnm]["info"].length > 0 ? 

                datainfo[boardnm]["info"].map((ele, idx)=>{
                    return(
                        <p>{ele.title} <br></br> {ele.content} <br></br> {ele.date} </p>
                    )
                })
            
                : (
                    <p>게시글이 없습니다.</p>
                ) }
        </div>
    );
};

export default List;