import "./ProductCard.css";
import { useState } from "react";
import { LuCheck, LuHeart, LuPlus } from "react-icons/lu";
function ProductCard({productPrice , productTitle , img}) {
    const [selected, setSelected] = useState(false);
    const [liked, setLiked] = useState(false);
  return (
    <div className="product-card">
        <div className="product-like">
            <button className={liked && "liked"} onClick={() => setLiked(!liked)}>
                <LuHeart color={liked ? "#FF8585" : "EAEAEA"} fill={liked ? "#FF8585" : "none"}  size={16}/>
            </button>
        </div>
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
            <button className={selected && "selected"} onClick={() => setSelected(!selected)}>{!selected ? (<LuPlus size={12}/>) : (<LuCheck size={12} color="white" />)}</button>
        </div>
    </div>
  )
}

export default ProductCard;