import React from "react";

const Header = ({ titleText, imgSrc }) => {
  return (
    <React.Fragment>
      <header>
        <div className="title-box">
          <h1 className={"title-text"}>{titleText}</h1>
        </div>
      </header>

      <style jsx>{`
        header {
          background: url(${imgSrc});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          height: 500px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title-box {
          height: calc(100% - 120px);
          width: 70%;
          border: 4px solid white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title-text {
          color: white;
          font-size: 6rem;
        }

        @media screen and (max-width: 1000px) {
          header {
            height: 450px;
          }

          .title-text {
            font-size: 5rem;
          }
        }

        @media screen and (max-width: 900px) {
          header {
            height: 400px;
          }

          .title-text {
            font-size: 4rem;
          }
        }

        @media screen and (max-width: 700px) {
          header {
            height: 370px;
          }

          .title-text {
            font-size: 3rem;
          }
        }

        @media screen and (max-width: 600px) {
          header {
            height: 350px;
          }

          .title-text {
            font-size: 4rem;
            text-align: center;
            margin: 0 auto;
          }
        }

        @media screen and (max-width: 550px) {
          header {
            height: 300px;
          }

          .title-text {
            font-size: 3rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Header;
