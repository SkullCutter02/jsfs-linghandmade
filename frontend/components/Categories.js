import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <React.Fragment>
      <div className="grid-container">
        {categories.map((category) => {
          return (
            <div className="grid-item" key={category.id}>
              <Link href={`/products/${category.slug}`}>
                <img
                  src={`${category?.photo.formats.medium.url}`}
                  alt={category?.photo.alternativeText}
                />
              </Link>
              <p className="category-name">{category.name}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-auto-rows: minmax(1fr, auto);
          justify-items: center;
        }

        .grid-item {
          margin-top: 2em;
          margin-bottom: 2em;
          background: #d3d3d3;
          width: 90%;
          height: 300px;
        }

        img {
          height: 80%;
          width: 100%;
          object-fit: cover;
          cursor: pointer;
        }

        .category-name {
          text-align: center;
          margin-top: 5px;
          font-size: 2rem;
        }

        @media screen and (max-width: 1100px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (max-width: 800px) {
          .grid-item {
            height: 250px;
          }

          .category-name {
            font-size: 1.7rem;
          }
        }

        @media screen and (max-width: 650px) {
          .grid-item {
            height: 220px;
          }

          .category-name {
            font-size: 1.4rem;
          }
        }

        @media screen and (max-width: 530px) {
          .grid-container {
            grid-template-columns: 1fr;
          }

          .grid-item {
            height: 300px;
          }

          .category-name {
            font-size: 2rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Categories;
