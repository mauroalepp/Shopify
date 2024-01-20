import Layout from "../../Components/Layout"
import { useEffect } from "react";
import { useContext } from "react";
import Card from "../../Components/Cards"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { apiUrl } from "../../Api";



function Miscellaneous() {

  const context = useContext(ShoppingCartContext)

const renderView = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/?categoryId=5`)
        const data = await response.json()
        context.setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  
    if(context.searchByTitle?.length > 0 ) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map( item => (
            <Card key ={item.id}data = {item}/>
          ))
        )
      } else {
        return (
          <div>Not found :(</div>
        )
      }
      
    } else {
      return (
        context.items?.map( item => (
          <Card key ={item.id}data = {item}/>
        ))
      )
  
  
}
}



  return (
    <Layout>
        <div className="flex w-80 relative items-center justify-center mb-2">
          <h1 className="font-medium text-xl">Miscellaneous</h1>
        </div>
        <input type="text" placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => { context.setSearchByTitle(event.target.value)
    
        }}
        />
        <div className="grid gap-3 grid-cols-4 w-full max-w-screen-xl">
          {
            renderView()
          }
        </div>
  
        <ProductDetail />
      </Layout>
      
 
  )
  }
  
  export default Miscellaneous