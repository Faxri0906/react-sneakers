import "./ProductCard.css";
import { LuPlus } from "react-icons/lu";
function ProductCard({productPrice , productTitle , img}) {
  return (
    <div className="product-card">
        <div className="product-card__image">
            <img src={img} alt=""/>
        </div>
        <p className="product-title">
            {productTitle}
        </p>
        <div className="product-bottom">
            <div className="product-info">
                <p>Цена:</p>
                <h5>{productPrice}</h5>
            </div>
            <button><LuPlus size={11}/></button>
        </div>
    </div>
  )
}

export default ProductCard;