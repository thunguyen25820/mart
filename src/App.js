import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './page/HomePage/HomePage';
import ProductInfoPage from './page/ProductInfoPage/ProductInfoPage';
import ProductPage from './page/ProductPage/ProductPage';

function App() {
  return (
    <Routes>
      <Route path='' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductInfoPage />} />
      <Route path='/product/' element={<ProductPage />} />
      <Route path='/product?page=2' element={<ProductPage />} />
    </Routes>
  );
}

export default App;
