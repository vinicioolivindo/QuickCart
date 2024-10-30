import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="w-screen fixed top-0 bg-purple-700 p-5 flex justify-center">
        <input className="rounded-s-md px-3 py-1" type="text" placeholder="Pesquise por um produto"/>
        <button className="bg-white rounded-r-md border-l-2 p-1"><Search/></button>
    </div>
  )
}

export default Header;