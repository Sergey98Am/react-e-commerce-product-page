import React from "react";
import product from "@/data";

const Price = () => {
  return (
    <div className="product-price mb-6 flex justify-between items-center md:mb-8 md:flex-col md:items-start">
      <div className="new-price flex items-center md:mb-3">
        <h3 className="text-3xl font-bold mr-4">${product.price / 100 * product.sale}</h3>
        <span className="sale text-tertiary font-bold bg-tertiaryLight px-[8px] rounded-md">{product.sale}%</span>
      </div>
      <div className="old-price">
        <h4 className="text-secondaryLight font-bold"><s>${product.price}</s></h4>
      </div>
    </div>
  );
};

export default Price;
