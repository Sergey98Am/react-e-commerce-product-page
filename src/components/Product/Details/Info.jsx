import React from "react";
import product from "../../../data";

const Info = () => {
  return (
    <div className="product-info">
      <h6 className="mb-5 text-xs tracking-[1.84615px] text-tertiary font-bold uppercase md:text-xs-1 md:mb-7">
        {product.company}
      </h6>
      <h1 className="mb-4 text-3xl font-bold md:mb-7 md:text-4xl lg:text-5xl">{product.title}</h1>
      <p className="description text-secondary text-sm mb-6 md:text-base md:mb-7">{product.description}</p>
    </div>
  );
};

export default Info;
