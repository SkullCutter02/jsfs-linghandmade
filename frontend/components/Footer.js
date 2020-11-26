import React from "react";
import Head from "next/head";

const Footer = () => {
  return (
    <React.Fragment>
      <Head>
        <script
          src="https://kit.fontawesome.com/a40d908160.js"
          crossOrigin="anonymous"
        />
      </Head>
      <br />
      <br />
      <br />
      <div>
        <footer>
          <a href={"https://www.instagram.com/linghandmade18/"}>
            <i className="fab fa-instagram" />
          </a>
        </footer>
        <h2>Ling Handmade</h2>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          height: 40px;
          border-top: 1px solid #e4dbcc;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        a {
          color: grey;
          margin: 0 10px;
        }

        i {
          font-size: 30px;
        }

        h2 {
          margin: 0 20px;
          color: grey;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Footer;
