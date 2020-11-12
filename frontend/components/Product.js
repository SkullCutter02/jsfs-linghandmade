import React from "react";
import Link from "next/link";

const Product = ({
  imgSrc,
  alternativeTxt,
  name,
  price,
  categorySlug,
  productSlug,
}) => {
  function showOverlay(e) {
    e.target.parentNode.firstElementChild.style.opacity = "100%";
  }

  function hideOverlay(e) {
    e.target.parentNode.firstElementChild.style.opacity = "0";
  }

  return (
    <React.Fragment>
      <div className="grid-item">
        <div className="container">
          <div
            className="overlay"
            onMouseEnter={showOverlay}
            onMouseLeave={hideOverlay}
          />
          <Link href={`/products/${categorySlug}/${productSlug}`}>
            <button type={"click"} onMouseEnter={showOverlay}>
              LEARN MORE
            </button>
          </Link>
          <img src={imgSrc} alt={alternativeTxt} />
        </div>
        <Link href={`/products/${categorySlug}/${productSlug}`}>
          <a className="name">{name}</a>
        </Link>
        <p className="price">${price}</p>
      </div>

      <style jsx>{`
        .grid-item {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
        }

        a {
          font-size: 1.5rem;
          color: black;
          text-decoration: none;
          cursor: pointer;
        }

        p {
          font-size: 1.5rem;
        }

        .name {
          margin-top: 10px;
        }

        .container {
          width: 80%;
          height: 70%;
          border: 3px solid #af9b7d;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .overlay {
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          transition-property: all;
          transition-duration: 0.3s;
          transition-timing-function: ease-in;
        }

        .overlay:hover {
          opacity: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        button {
          opacity: 0;
          position: absolute;
          align-self: center;
          width: 40%;
          height: 15%;
          background: #af9b7d;
          border: 3px solid #af9b7d;
          color: black;
          font-size: 1rem;
          cursor: pointer;
          z-index: 3;
          transition-property: all;
          transition-duration: 0.3s;
          transition-timing-function: ease-in;
        }

        .overlay:hover ~ button {
          opacity: 100%;
        }

        button:hover {
          opacity: 100%;
          background: none;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Product;
