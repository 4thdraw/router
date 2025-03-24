import { Link, Routes, Route } from 'react-router-dom'

import Maincontent, { Childcontenet } from './components/Maincontenet'
import List from './components/List'
import View from './components/View'
import Nopage from './components/Nopage'

import boarddb from './data/board.json'

function App() {
  return (
    <div className="App">
       <nav>
          <Link to="/"><img src="/logo192.png" /></Link>
          <Link to="/board/notice">공지사항</Link>
          <Link to="/board/qna">문의하기</Link>
          <Link to="/board/review">후기보기</Link>
       </nav>
       <main style={{minHeight:"90vh", "maxWidth" : "1280px", margin : "auto"}}>      
          <Routes>
              <Route path='/' element={<Childcontenet />}></Route>
              <Route path='/board/:boardnm' element={<List datainfo={boarddb} ></List>}></Route>
              <Route path='/board/:boardnm/:pk' element={<View datainfo={boarddb} ></View>}></Route>     
              <Route path='*' element={<Nopage />}></Route>
          </Routes>
       </main>
       <footer style={{ 
        padding : "30px",
        textAlign : "center",
        borderTop : "1px solid #666"
         }}>항상노출되는 것들</footer>     
    </div>
  );
}

export default App;
