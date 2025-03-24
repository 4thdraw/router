import React, { useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';

const View = ({datainfo}) => {

    const { boardnm, pk } = useParams();
    const boardData = datainfo[boardnm].info;
    const matchingData = boardData.find(item => item.id == pk);

    useEffect(()=>{
        console.log( datainfo[boardnm].info )      
        console.log(matchingData)

    }, [])
    return (
        <div>
           <p>
            글쓴이 :  {   matchingData  &&  matchingData.user }
            </p> 
            <p>글제목 : { matchingData  &&  matchingData.title }</p>
            <p>글내용 : { matchingData  &&  matchingData.content }
                { matchingData  &&  matchingData.imgsrc && <img src={matchingData.imgsrc} />}
            </p>
            <p>날짜 :  { matchingData  &&  matchingData.date }</p>
            <Link to={`/board/${boardnm}`}>목록</Link>
        </div>
    );
};

export default View;