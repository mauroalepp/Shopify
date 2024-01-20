import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../Api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart - Quantity
    const [count, setCount] = useState(0);

    //Shopping cart - Add product to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Product detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
    //Product detail - Show Product
    const [productToShow, setProductToShow] = useState([]);

    //shopping cart - Order
    const [order, setOrder] = useState([]);

    //Get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);


    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);




    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch(`${apiUrl}/products`)
    //       const data = await response.json()
    //       setItems(data)
    //     } catch (error) {
    //       console.error(`Oh no, ocurrió un error: ${error}`);
    //     }
    //   }
    //   fetchData()
    // }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter (item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
    }

    useEffect(() => {
      if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    }, [items,searchByTitle])
    

    return (
        <ShoppingCartContext.Provider value= {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,

            
        }}>
             {children}
        </ShoppingCartContext.Provider>
       
    );
}