import { clsx } from "clsx";
import { ShoppingCart, X } from "lucide-react";
import { useState, useEffect } from "react";

const Cart = () => {
    const [cartActive, setCartActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = cartActive ? "hidden" : "auto";
    }, [cartActive]);

    return (
        <div>
            <div
                className={clsx(
                    "absolute z-10 h-4/5 w-auto md:w-80 bg-zinc-900 top-1/2 -translate-y-1/2 rounded-s-2xl shadow-lg backdrop-blur-md transition-all duration-300",
                    cartActive ? "right-0 show" : "-right-80"
                )}
            >
                <div className="py-4 px-7 flex items-center justify-between border-b-2">
                    <h2 className="text-white text-lg mr-4 md:mr-0">
                        Seu carrinho tem <strong>x itens</strong>
                    </h2>
                    <button
                        aria-label="Fechar carrinho"
                        className="text-gray-200"
                        onClick={() => setCartActive(false)}
                    >
                        <X />
                    </button>
                </div>
            </div>

            {!cartActive && (
                <button
                    aria-label="Abrir carrinho"
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-900 p-2 rounded-s-lg"
                    onClick={() => setCartActive(true)}
                >
                    <ShoppingCart className="text-gray-300 w-8 h-8 transition-all duration-300 hover:rotate-6 hover:scale-125" />
                </button>
            )}
        </div>
    );
};

export default Cart;
