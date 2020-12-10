import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ items }) => {
  const responsive = {
    0: { items: 1 },
    520: { items: 1 },
    1024: { items: 2 },
  };

  return (
    <React.Fragment>
      <div>
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayDirection={"ltr"}
          autoPlayInterval={5000}
          items={items}
          responsive={responsive}
          infinite
        />
      </div>

      <style jsx>{`
        div {
          width: 85%;
          margin: 0 auto;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Carousel;
