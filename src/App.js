import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './page/HomePage/HomePage'; 
import ProductInfoPage from './page/ProductInfoPage/ProductInfoPage';

function App() {
  return (
    <Routes>
      <Route path='' element={<HomePage />}/>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/product/:id' element={<ProductInfoPage />}/>
    </Routes>
    // <>
    //   <HomePage/>
    // </>
  );
}

export default App;
