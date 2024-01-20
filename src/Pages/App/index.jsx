import { useState } from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Clothes from '../Clothes'
import Electronics from '../Electronics'
import Furnitures from '../Furnitures'
import Shoes from '../Shoes'
import Miscellaneous from '../Miscellaneous'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/clothes', element: <Clothes /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/furnitures', element: <Furnitures /> },
    { path: '/shoes', element: <Shoes /> },
    { path: '/miscellaneous', element: <Miscellaneous /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;

}


const App = () => {
  return (
    <ShoppingCartProvider>
        <BrowserRouter>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg><AppRoutes/>
          <Navbar />
          <CheckoutSideMenu/>
        </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
