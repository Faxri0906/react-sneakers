import ProductCard from "../ProductCard/ProductCard";
import "./Cards.css";
import shoe from "../../assets/images/shoe.png";
import shoe2 from "../../assets/images/shoe2.png";
import shoe3 from "../../assets/images/shoe3.png";
import shoe4 from "../../assets/images/shoe4.png";
import shoe5 from "../../assets/images/shoe5.png";
import shoe6 from "../../assets/images/shoe6.png";
import shoe7 from "../../assets/images/shoe7.png";
import shoe8 from "../../assets/images/shoe8.png";
import shoe9 from "../../assets/images/shoe9.png";
import shoe10 from "../../assets/images/shoe10.png";
import shoe11 from "../../assets/images/shoe11.png";
import shoe12 from "../../assets/images/shoe12.png";
function Cards() {
  let products = [
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
    {
      productTitle: 'Мужские Кроссовки Nike Blazer Mid Suede',
      productPrice: '8 499 руб.',
      image: shoe3,
    },
    {
      productTitle: 'Кроссовки Puma X Aka Boku Future Rider',
      productPrice: '8 999 руб.',
      image: shoe4,
    },
    {
      productTitle: 'Мужские Кроссовки Under Armour Curry 8',
      productPrice: '15 199 руб.',
      image: shoe5,
    },
    {
      productTitle: 'Мужские Кроссовки Nike Kyrie 7',
      productPrice: '11 299 руб.',
      image: shoe6,
    },
    {
      productTitle: 'Мужские Кроссовки Jordan Air Jordan 11',
      productPrice: '10 799 руб.',
      image: shoe7,
    },
    {
      productTitle: 'Мужские Кроссовки Nike LeBron XVIII',
      productPrice: '16 499 руб.',
      image: shoe8,
    },
    {
      productTitle: 'Мужские Кроссовки Nike LeBron XVIII Low',
      productPrice: '13 999 руб.',
      image: shoe9,
    },
    {
      productTitle: 'Мужские Кроссовки Nike Blazer Mid Suede',
      productPrice: '8 499 руб.',
      image: shoe10,
    },
    {
      productTitle: 'Кроссовки Puma X Aka Boku Future Rider',
      productPrice: '8 999 руб.',
      image: shoe11,
    },
    {
      productTitle: 'Мужские Кроссовки NikeKyrie Flytrap IV ',
      productPrice: '11 299 руб.',
      image: shoe12,
    },
  ]
  return (
    <div className="cards-wrapper">
      <div className="cards-top container">
        <h1>Все кроссовки</h1>
      </div>
      <div className="cards container">
        {products.map((product, index) => (
          <ProductCard key={index} productTitle={product.productTitle} productPrice={product.productPrice} img={product.image} />
        ))}
      </div>
    </div>
  )
}

export default Cards;