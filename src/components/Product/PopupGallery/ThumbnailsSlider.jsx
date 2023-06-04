import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { createRef } from "react";
import product from "@/data";
import ModalDialog from "./Modal/ModalDialog";

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
    fixedWidth: 90,
    fixedHeight: 90,
    isNavigation: true,
    gap: 28,
    pagination: false,
    cover: true,
    arrows: false,
  };

  const [open, setOpen] = useState(false);

  const [sliderIndex, setSliderIndex] = useState(0);

  const handleOpen = (e) => {
    setSliderIndex(e.target.attributes.getNamedItem("index").value);
    setOpen(!open);
  };

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <div className="thumbnails-slider">
      <div className="slider-main-section">
        <Splide options={mainOptions} ref={mainRef}>
          {product.slides.map((slide, index) => (
            <SplideSlide index={index} key={slide.src} onClick={handleOpen} className="pointer-events-none md:pointer-events-auto">
              <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="mt-8 slider-thumbails-section">
        <Splide options={thumbsOptions} ref={thumbsRef}>
          {product.slides.map((slide) => (
            <SplideSlide key={slide.src}>
              <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {open && (
        <ModalDialog
          mainOptions={mainOptions}
          thumbsOptions={thumbsOptions}
          sliderIndex={sliderIndex}
          open={open}
          onClose={() => setOpen(false)}
          handleOpen={handleOpen}
        />
      )}
    </div>
  );
};

export default ThumbnailsSlider;
