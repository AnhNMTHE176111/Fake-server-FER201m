import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ListProduct from './components/ListProduct';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dien-thoai/:catId" element={<ListProduct />} />
        <Route path="/dien-thoai/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;