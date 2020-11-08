import React from "react";

import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <React.Fragment>
      <section>
        <SectionTitle titleText={"Featured"} />
        <div className="grid-container">
          <div className="grid-item">
            <img src={"/download.jpeg"} alt="item" />
            <p className="name">Lavendar Soap</p>
            <p className="price">$230</p>
          </div>
          <div className="grid-item">
            <img src={"/download.jpeg"} alt="item" />
            <p className="name">Rose Soap</p>
            <p className="price">$230</p>
          </div>
          <div className="grid-item">
            <img src={"/download.jpeg"} alt="item" />
            <p className="name">Sweet Orange Soap</p>
            <p className="price">$230</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          height: 530px;
          background: #d3d3d3;
          padding-top: 1px;
        }

        .grid-container {
          margin-top: 2em;
          height: 350px;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .grid-item {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
        }

        p {
          font-size: 1.5rem;
        }

        .name {
          margin-top: 10px;
        }

        img {
          width: 80%;
          border: 3px solid #af9b7d;
          box-shadow: 1px 1px 5px #af9b7d;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Featured;
