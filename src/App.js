import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Favourites from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<>
          <Banner/>
          <Movies/>
          {/* <Pagination/> */}
          </>} />

        <Route path="/favourites" element={<Favourites/>} />  
       </Routes>
    </BrowserRouter>
  );
}

export default App;
