import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { createRef } from "react";
import product from "../../../data";

const ThumbnailsSlider = () => {
  /**
   * The main Splide component.
   */
  const mainRef = createRef();

  /**
   * The thumbnail Splide component.
   */
  const thumbsRef = createRef();

  const mainOptions = {
    type: "loop",
    width: "800px",
    heightRatio: 1,
    pagination: false,
    arrows: false,
    cover: true,
    breakpoints: {
      768: {
        heightRatio: 0.8,
        arrows: true,
      },
    },
  };

  const thumbsOptions = {
    rewind: true,
    fixedWidth: 90,
    fixedHeight: 90,
    isNavigation: true,
    gap: 28,
    pagination: false,
    cover: true,
    arrows: false,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
  };

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);

      const mainRefRoot = mainRef.current.splide.Components.Elements.root;
      mainRefRoot.classList.add("slider-main-section");

      const thumbRefRoot = thumbsRef.current.splide.Components.Elements.root;
      thumbRefRoot.classList.add("mt-8", "slider-thumbails-section");
    }
  });

  const renderSlides = () => {
    return product.slides.map((slide) => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ));
  };

  return (
    <div className="thumbnails-slider">
      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {renderSlides()}
      </Splide>
    </div>
  );
};

export default ThumbnailsSlider;
