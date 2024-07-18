import { LuArrowRight, LuX } from "react-icons/lu";
import "./Cart.css";
import shoe from "../../assets/images/shoe.png";
import shoe2 from "../../assets/images/shoe2.png";
let productsData = [
    {
      productTitle: 'Мужские Кроссовки Nike Blazer Mid Suede',
      productPrice: '12 999 руб.',
      image: shoe,
    },
    {
      productTitle: 'Мужские Кроссовки Nike Air Max 270',
      productPrice: '12 999 руб.',
      image: shoe2,
    },
  ]
const Cart = ({isOpen, handleIsOpen}) => {
  return (
    <div className={isOpen ? 'cart isOpen' : 'cart'}>
        <div className="cart-top">
          <h1>Корзина</h1>
          <LuX onClick={handleIsOpen} className="X" size={32}/>
        </div>
        <div className="cart-products">
            {productsData.map((product, index) => (
                <div key={index} className="cart-product">
                    <div className="cart-product__image">
                        <img src={product.image} />
                    </div>
                    <div className="cart-product__text">
                        <h3>{product.productTitle}</h3>
                        <p>{product.productPrice}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="cart-checkout">
            <div className="total">
                <p>Итого:</p>
                <div className="border_b"></div>
                <p>21 498 руб.</p>
            </div>
            <div className="tax">
                <p>Налог 5%:</p>
                <div className="border_b"></div>
                <p>1074 руб.</p>
            </div>
            <button><p>Оформить заказ</p><LuArrowRight size={24} className="arrow"/></button>
        </div>
    </div>
  );
};

export default Cart;