import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ items }) => {
  const responsive = {
    0: { items: 1 },
    520: { items: 1 },
    1024: { items: 2 },
  };

  // const [windowSize, setWindowSize] = useState();
  //
  // useEffect(() => {
  //   setWindowSize(window.innerWidth);
  // }, []);
  //
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowSize(window.innerWidth);
  //
  //     return () => {
  //       window.removeEventListener("resize", () => {
  //         setWindowSize(window.innerWidth);
  //       });
  //     };
  //   });
  // });
  //
  // useEffect(() => {
  //   // console.log(windowSize);
  //   const images = Array.from(
  //     document.getElementsByClassName("image-carousel")
  //   );
  //
  //   if (windowSize < 550) {
  //     images.map((image) => {
  //       image.style.height = "190px";
  //       image.style.width = "270px";
  //     });
  //   } else if (windowSize < 700) {
  //     images.map((image) => {
  //       image.style.height = "300px";
  //       image.style.width = "500px";
  //     });
  //   } else if (windowSize > 700) {
  //     images.map((image) => (image.style.height = "340px"));
  //   }
  // }, [windowSize]);

  return (
    <React.Fragment>
      <div>
        <AliceCarousel
          mouseTracking
          // autoWidth
          // autoHeight
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
