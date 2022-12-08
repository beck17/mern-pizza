import {Route, Routes} from "react-router-dom";

import {Login,Register, Home, Order, Product, Cart} from "./pages";
import {Navbar} from "./components";

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Order/>}/>

            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/register' element={<Register/>}/>

            <Route path='*' element={<h1>404 Ошибка. Страница не найдена :(</h1>}/>
        </Routes>
      </>
  );
}

export default App;
