import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ItemProduct from "./components/ItemProduct";
import { Grip, TableOfContents } from "lucide-react";
import clsx from "clsx";
import ApiProduct from "./components/ApiProduct";

function App() {
  const [styleGrid, setStyleGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [myCart, setMyCart] = useState([]);
  const [categoryClick, setCategoryClick] = useState(null);
  const [itemAdd, setItemAdd] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Novo estado para a busca

  // Exibe notificação temporária quando um item é adicionado
  useEffect(() => {
    if (itemAdd) {
      const timer = setTimeout(() => setItemAdd(false), 3000); // Reseta o estado
      return () => clearTimeout(timer); // Limpa o timer para evitar erros
    }
  }, [itemAdd]);

  // Carrega todos os produtos ao montar o componente
  useEffect(() => {
    ApiProduct.get("products")
      .then((response) => {
        setProducts(response.data);
        setProductsFilter(response.data); // Inicializa o filtro com todos os produtos
      })
      .catch((err) => alert("Erro ao carregar produtos: " + err));
  }, []);

  // Filtra os produtos por categoria e busca
  useEffect(() => {
    let filteredProducts = [...products];

    if (categoryClick) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.category === categoryClick
      );
    }

    if (searchQuery.trim()) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProductsFilter(filteredProducts);
  }, [categoryClick, searchQuery, products]);

  // Adiciona um produto ao carrinho
  const handleAddToCart = (produto) => {
    setMyCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === produto.id);
      setItemAdd(true); // Mostra o indicador
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === produto.id
            ? { ...item, qntNoCarrinho: item.qntNoCarrinho + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...produto, qntNoCarrinho: 1 }];
      }
    });
  };

  // Atualiza a busca
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    setSearchQuery(query);
    
  };

  return (
    <div className="relative w-screen sm:h-screen flex flex-col md:flex-row items-start bg-gray-100">
      <Header
        onSubmit={handleSearch}
        onClickProduct={(product) => setCategoryClick(product)}
      />
      <Cart products={myCart} setMyCart={setMyCart} newItemAdd={itemAdd} />

      <div
        className={clsx(
          "flex flex-col w-full p-3 sm:mt-40 mt-52 sm:w-10/12 sm:h-4/6 m-auto relative bg-white rounded-lg shadow-md"
        )}
      >
        <div className="flex gap-2 absolute right-2 -top-10 sm:right-0 sm:-top-8">
          <button
            className="hover:text-purple-700 transition-all duration-300"
            onClick={() => setStyleGrid(true)}
          >
            <Grip />
          </button>

          <button
            className="hover:text-purple-700 transition-all duration-300"
            onClick={() => setStyleGrid(false)}
          >
            <TableOfContents />
          </button>
        </div>

        <div
          className={clsx(
            "flex-1 h-full p-4 overflow-y-auto",
            styleGrid
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              : "flex flex-col"
          )}
        >
          {productsFilter.map((produto) => (
            <ItemProduct
              image={produto.image}
              price={produto.price}
              title={produto.title}
              styleGalery={styleGrid}
              key={produto.id}
              onClickCart={() => handleAddToCart(produto)}
              searchQuery={searchQuery} // Passa o estado de busca para o componente
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
