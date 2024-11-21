import { Search } from "lucide-react";
import ApiProduct from "./ApiProduct";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ onClickProduct }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    ApiProduct
      .get(`products/categories`)
      .then((response) => setCategories(response.data))
      .catch((err) => {
        alert("Algo deu errado: " + err);
      });
  }, []);

  return (
    <div className="w-full fixed top-0 bg-purple-700 z-50 p-3">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2">
        <input
          className="w-auto flex-grow rounded-md px-3 py-2"
          type="text"
          placeholder="Pesquise por um produto"
        />
        <button className="bg-white rounded-md p-2 hover:bg-gray-100">
          <Search />
        </button>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center mt-3">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClickProduct(category)}
            className="cursor-pointer text-sm text-center p-1 bg-slate-300 hover:bg-slate-400 rounded-md"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Header;
