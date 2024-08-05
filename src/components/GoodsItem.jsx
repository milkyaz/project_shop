import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: [{ full_background }],
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              regularPrice,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.5rem" }}>
          {regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
