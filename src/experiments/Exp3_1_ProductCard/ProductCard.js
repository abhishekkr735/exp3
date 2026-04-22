import "./Exp3_1.css";

function ProductCard(props) {
  return (
    <div className="card">
      <div className="image"></div>
      <h2>{props.name}</h2>
      <p>${props.price}</p>
      <span className={props.inStock ? "in" : "out"}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;