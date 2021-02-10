import React from "react";

const Information = ({ info }) => {
  return (
    <React.Fragment>
      <section>
        <p className="text" dangerouslySetInnerHTML={{ __html: info }} />
      </section>

      <style jsx>{`
        section {
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          margin-bottom: 25px;
        }

        .text {
          font-size: 20px;
          width: 80%;
          margin: 0 auto;
          padding-top: 1.5em;
          height: 100%;
        }

        @media screen and (max-width: 500px) {
          .text {
            font-size: 18px;
            width: 90%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Information;
