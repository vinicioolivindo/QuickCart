import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

// eslint-disable-next-line react/prop-types
const ItemProduct = ({ styleGalery, title, image, price, onClickCart }) => {
    return (
        <div className={clsx("max-w-44 flex",
            styleGalery ? "flex-col items-center" : "flex-row max-w-4xl gap-3 "
        )}>
            <div className="w-44 h-44 bg-white rounded-lg p-4 flex items-center justify-center relative">
                <button className="flex font-bold absolute z-30 bottom-1 right-1 hover:text-purple-700 transition-all duration-300 hover:rotate-6 hover:scale-125"
                onClick={onClickCart}>
                    <ShoppingCart/>+
                </button>
                <img className="max-w-full max-h-full object-contain" src={image} alt={`Imagem de ${title}`} />
            </div>
            <div className="">
                <h3 className="text-gray-800 text-sm line-clamp-2">{title}</h3>
                <h2 className="text-2xl font-bold"><span className="text-sm">R$</span>{price}</h2>
                
            </div>
        </div>
    )
}

export default ItemProduct;