import clsx from "clsx";
import { Minus, Plus, ShoppingCart } from "lucide-react";

// eslint-disable-next-line react/prop-types
const ItemProduct = ({ styleGalery, title, image, price, onClickCart, itemInCart, qntProduct, onClickMinus, onClickPlus }) => {

    return (
        <div className={clsx("max-w-44 flex",
            styleGalery ? "flex-col items-center" : "flex-row max-w-4xl gap-3 "
        )}>
            <div className={clsx(" bg-white rounded-lg p-4 flex items-center justify-center relative",
                itemInCart ? "w-20 h-20" : "w-44 h-44"
            )}>
                <button className={clsx("flex font-bold absolute z-30 bottom-1 right-1 hover:text-purple-700 transition-all duration-300 hover:rotate-6 hover:scale-125",
                    itemInCart ? "hidden" : null
                )}
                    onClick={onClickCart}>
                    <ShoppingCart />+
                </button>
                <img className="max-w-full max-h-full object-contain" src={image} alt={`Imagem de ${title}`} />
            </div>
            <div className="flex-1">
                <h3 className={clsx("text-sm line-clamp-2 ",
                    itemInCart ? "text-white" : "text-gray-800"
                )}>{title}</h3>

                <div className={clsx("flex justify-between",
                    itemInCart ? "mt-2" : null
                )}>
                    <h2 className={clsx("text-2xl font-bold",
                        itemInCart ? "text-gray-100" : "text-gray-900",
                        styleGalery ? "absolute -bottom-4" : ""
                    )}><span className="text-sm">R$</span>{price}</h2>

                    {itemInCart ? (
                        <div className="flex items-center gap-2">
                            <button className="text-purple-700 rounded-md border-2 border-gray-500"
                                onClick={onClickMinus}>
                                <Minus />
                            </button>
                            <p className="text-gray-100">
                                {qntProduct}
                            </p>
                            <button className="text-purple-700 rounded-md border-2 border-gray-500"
                                onClick={onClickPlus}>
                                <Plus />
                            </button>
                        </div>
                    ) : null}

                </div>
            </div>
        </div>
    )
}

export default ItemProduct;