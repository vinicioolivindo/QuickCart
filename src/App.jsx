import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import ItemProduct from "./components/ItemProduct"
import { Grip, TableOfContents } from "lucide-react"

function App() {

  const [styleGrid, setStyleGrid] = useState(true)
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
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
  ])

  const [myCart, setMyCart] = useState([])

  return (
    <div className="relative w-screen h-screen flex items-center bg-gray-100">
      <Header />
      <Cart />
      <div className="w-10/12 max-w-3xl p-3 m-auto flex flex-col gap-5 relative">
        <div className="flex gap-2 absolute right-0 -top-8">
          <button className="hover:text-purple-700 transition-all duration-300"
            onClick={() => { setStyleGrid(true) }}>
            <Grip />
          </button>

          <button className="hover:text-purple-700 transition-all duration-300" 
            onClick={() => { setStyleGrid(false) }}>
            <TableOfContents />
          </button>
        </div>
        {
          products.map((produto) => {
            return (
              <ItemProduct
                image={produto.image}
                price={produto.price}
                title={produto.title}
                styleGalery={styleGrid}
                key={produto.id}
                onClickCart={() => {setMyCart([...myCart, produto])}}
              />)
          })
        }
      </div>
    </div>
  )
}

export default App
