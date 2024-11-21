/* eslint-disable react/prop-types */
import clsx from "clsx";
import { ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";

const Cart = ({ products, setMyCart, newItemAdd }) => {
    const [cartActive, setCartActive] = useState(false);
    const [totalValue, setTotalValue] = useState(0);

    const handleIncreaseQuantity = (id) => {
        setMyCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id) {
                    return { ...item, qntNoCarrinho: item.qntNoCarrinho + 1 };
                }
                return item;
            })
        );
    };

    const handleDecreaseQuantity = (id) => {
        setMyCart((prevCart) => {
            return prevCart.reduce((newCart, item) => {
                if (item.id === id) {
                    if (item.qntNoCarrinho > 1) {
                        newCart.push({ ...item, qntNoCarrinho: item.qntNoCarrinho - 1 });
                    } else if (item.qntNoCarrinho === 1) {
                        const isOk = confirm('Deseja mesmo remover este item do carrinho?');
                        if (!isOk) newCart.push(item); // Mantém o item se o usuário cancelar
                    }
                } else {
                    newCart.push(item); // Mantém os itens que não correspondem ao `id`
                }
                return newCart;
            }, []);
        });
    };


    useEffect(() => {
        const sumTotal = products.reduce((acc, item) => acc + item.price * item.qntNoCarrinho, 0);
        setTotalValue(sumTotal);
    }, [products]);

    return (
        <div>
            <div
                className={clsx(
                    "fixed z-50 h-full w-full md:w-80 bg-zinc-900 top-0 md:top-1/2 md:-translate-y-1/2 rounded-md shadow-lg transition-all duration-300 overflow-hidden",
                    cartActive ? "right-0" : "-right-full md:-right-80"
                )}
            >
                <div className="py-4 px-5 flex items-center justify-between border-b border-gray-700">
                    <h2 className="text-white text-lg">
                        Seu carrinho tem <strong>{products.length} itens</strong>
                    </h2>
                    <button
                        aria-label="Fechar carrinho"
                        className="text-gray-200"
                        onClick={() => {
                            setCartActive(false);
                        }}
                    >
                        <X />
                    </button>


                </div>

                <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ItemProduct
                                key={product.id}
                                itemInCart={true}
                                styleGalery={false}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                qntProduct={product.qntNoCarrinho}
                                onClickPlus={() => handleIncreaseQuantity(product.id)}
                                onClickMinus={() => handleDecreaseQuantity(product.id)}
                            />
                        ))
                    ) : (
                        <p className="text-gray-300 text-center mt-4">
                            Seu carrinho está vazio.
                        </p>
                    )}
                </div>

                <div className="absolute bottom-0 w-full py-4 px-5 border-t border-gray-700">
                    <div className="flex justify-between">
                        <h2 className="text-gray-300 text-xl">Total: </h2>
                        <h1 className="text-2xl text-gray-50">R$ {totalValue}</h1>
                    </div>
                </div>
            </div>

            {!cartActive && (
                <div className="fixed z-50 right-4 bottom-4 md:right-2 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center">
                    <button
                        aria-label="Abrir carrinho"
                        className="bg-zinc-900 p-3 rounded-lg relative"
                        onClick={() => setCartActive(true)}
                    >
                        <ShoppingCart className="text-gray-300 w-8 h-8 transition-all duration-300 hover:rotate-6 hover:scale-125" />
                        {newItemAdd && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                                +
                            </span>
                        )}
                    </button>
                    {newItemAdd && (
                        <p className="text-xs text-gray-400 mt-1">Novo item adicionado!</p>
                    )}
                </div>
            )}



        </div>
    );
};

export default Cart;
