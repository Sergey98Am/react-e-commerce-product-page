import { useEffect, createRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import product from "@/data";

const ModalContent = ({ mainOptions, thumbsOptions, sliderIndex }) => {
  /**
   * The main Splide component.
   */
  let mainRef = createRef();

  /**
   * The thumbnail Splide component.
   */
  let thumbsRef = createRef();

  const [mOptions, setMOptions] = useState({
    ...mainOptions,
    arrows: true,
    speed: 0,
  });

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
      mainRef.current.go(parseInt(sliderIndex));
      setMOptions({ ...mOptions, speed: 400 });
    }
  }, []);

  const renderSlides = () => {
    return product.slides.map((slide) => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ));
  };

  return (
    <>
      <div className="slider-main-section">
        <Splide options={mOptions} ref={mainRef}>
          {renderSlides()}
        </Splide>
      </div>

      <div className="mt-8 slider-thumbails-section">
        <Splide options={thumbsOptions} ref={thumbsRef}>
          {renderSlides()}
        </Splide>
      </div>
    </>
  );
};

export default ModalContent;
