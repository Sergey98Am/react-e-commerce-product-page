import React from "react";
import ThumbnailsSlider from "./ThumbnailsSlider/ThumbnailsSlider";

const Product = () => {
  return (
    <div className="product px-0 md:px-6">
      <div className="container mx-auto mb-[130px] md:mt-10 lg:mt-[90px]">
        <div className="grid grid-cols-1 mx-0 md:grid-cols-2 md:gap-10 lg:mx-12 lg:gap-20 xl:gap-[125px]">
          <ThumbnailsSlider />
          <div className="px-6 md:px-0">6</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
