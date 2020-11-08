import React from "react";

const Header = ({ titleText }) => {
  return (
    <React.Fragment>
      <header>
        <div className="title-box">
          <h1 className={"title-text"}>{titleText}</h1>
        </div>
      </header>

      <style jsx>{`
        header {
          background: url("/download.jpeg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          height: 500px;
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
      `}</style>
    </React.Fragment>
  );
};

export default Header;
