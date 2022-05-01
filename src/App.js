import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Inventories from './Pages/Home/Inventories/Inventories';
import Inventory from './Pages/Home/Inventory/Inventory';
import Blogs from './Pages/Blogs/Blogs';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddInventories from './Pages/AddInventories/AddInventories';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyInventories from './Pages/MyInventories/MyInventories';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/addInventories' element={
          <RequireAuth>
            <AddInventories></AddInventories>
          </RequireAuth>
        }></Route>
        <Route path='/myInventories' element={
          <RequireAuth>
            <MyInventories></MyInventories>
          </RequireAuth>
        }></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
