// eslint-disable-next-line react/prop-types
const ItemProduct = ({ styleGalery, title, image, price }) => {
    return (
        <div>
            <div className="w-64 h-64 bg-gray-200 overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt={`Imagem de ${title}`} />
            </div>
            <div>
                {title}
                {price}
            </div>
        </div>
    )
}

export default ItemProduct;