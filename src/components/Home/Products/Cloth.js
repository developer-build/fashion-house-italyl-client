import React from "react";
import { ClothingData } from "../../../StaticData/CardData";

const Cloth = () => {
  const handleClick = (id) => {
    console.log("Click to", id);
  };
  return (
    <section id="products">
      <div className="main_product_card">
        {ClothingData.map((product, i) => (
          <div key={product.id} className="card">
            <div className="imgBx">
              <img src={product.img1} alt="" />
              <div className="action">
                <ul>
                  <li>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Add to Wishlist</span>
                  </li>
                  <li>
                    <button onClick={() => handleClick(`${product.id}`)}>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span>Add to Cart</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleClick(`${product.id}`)}>
                      <i class="fa fa-eye" aria-hidden="true"></i>
                      <span>View Details</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="productName">
                <h3 className="text-2xl">{product.name.slice(0, 15)}...</h3>
              </div>
              <div className="price_rating">
                <h2 className="text-xl font-sans">${product.price}</h2>
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloth;