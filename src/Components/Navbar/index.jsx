import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    return (
        <nav className="bg-white top-0 w-full py-5 px-8 text-sm font-light flex justify-between items-center fixed z-10">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to = '/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}
                    onClick={()=>{
                        context.setSearchByTitle(null)
                    }}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/clothes'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}
                    onClick={()=>{
                        context.setSearchByTitle(null)
                    }}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/electronics'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}
                    onClick={()=>{
                        context.setSearchByTitle(null)
                    }}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/furnitures'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}
                    onClick={()=>{
                        context.setSearchByTitle(null)
                    }}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/shoes'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}
                    onClick={()=>{
                        context.setSearchByTitle(null)
                    }}>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/miscellaneous'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}
                    onClick={()=>{
                        context.setSearchByTitle(null)
                    }}>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                   example@example.com
                </li>
                <li>
                    <NavLink 
                    to = '/my-order'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/my-account'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/sign-in'
                    className ={({ isActive}) =>
                    isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="w-6 h-6 text-black cursor-pointer" 
                    onClick={() => {
                        if(context.isCheckoutSideMenuOpen)
                            context.closeCheckoutSideMenu()
                        else 
                            context.openCheckoutSideMenu()
                    }}></ShoppingBagIcon> 
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar