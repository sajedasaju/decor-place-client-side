import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Inventories from './Pages/Home/Inventories/Inventories';
import Inventory from './Pages/Home/Inventory/Inventory';
import Blogs from './Pages/Blogs/Blogs';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
