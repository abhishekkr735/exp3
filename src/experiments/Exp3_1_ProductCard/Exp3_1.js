import ProductCard from "./ProductCard";
import "./Exp3_1.css";

function Exp3_1() {
  return (
    <div className="container">
      <ProductCard name="Wireless Headphones" price="129.99" inStock={true}/>
      <ProductCard name="Mechanical Keyboard" price="89.99" inStock={false}/>
      <ProductCard name="Smart Watch" price="199.99" inStock={true}/>
    </div>
  );
}

export default Exp3_1;