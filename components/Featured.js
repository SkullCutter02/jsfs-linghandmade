import React from "react";

const Featured = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Featured</h1>
        <div className="line" />
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
          height: 500px;
        }

        h1 {
          text-align: center;
          font-size: 3rem;
          margin-top: 1em;
        }

        .line {
          width: 70px;
          margin: 0 auto;
          padding-top: 5px;
          border-bottom: 4px solid #af9b7d;
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
        }
      `}</style>
    </React.Fragment>
  );
};

export default Featured;
