import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import ItemProduct from "./components/ItemProduct"

function App() {

  const [products, setProducts] = useState([
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
  ])

  return (
    <div className="relative w-screen h-screen flex items-center bg-gray-100">
      <Header />
      <Cart />
      <div className="">
        {
          products.map((produto) => {
            return (
              <ItemProduct
              image={produto.image}
              price={produto.price}
              title={produto.title}
              styleGalery={true}
              key={produto.id}
            />)
          })
        }
      </div>
    </div>
  )
}

export default App
