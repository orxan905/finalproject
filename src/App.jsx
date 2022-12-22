import './App.css';
import { Route,Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Description from './Description/Description';
import CoinList from './Pages/CoinList/CoinList'
import "bootstrap/dist/css/bootstrap.min.css";
import DataMain from './dataMain.json';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coinlist' element={<CoinList />}></Route>
        <Route path='/coinlists/:category' element={<CoinList />}></Route>
        <Route path='/description/:id' element={<Description data={DataMain}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;