import React from "react";

const Information = ({ reverse, background }) => {
  const style = reverse ? "row-reverse" : "row";

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="image" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            deserunt dicta distinctio dolor dolorem doloremque eaque earum
            eligendi eveniet ex facere fugiat fugit in incidunt, labore libero
            magnam maxime minus modi molestias nesciunt nisi odio odit quam quas
            qui quibusdam quo ratione rem rerum saepe temporibus vel velit.
            Sunt, ullam.
          </p>
        </div>
      </section>

      <style jsx>{`
        section {
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
        }

        .container {
          height: 80%;
          width: 90%;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          flex-direction: ${style};
        }

        .image {
          width: calc(100% + 1500px);
          background: url(${background});
          background-position: center;
          margin-right: 4em;
        }

        .text {
          font-size: 20px;
          margin-right: 3em;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Information;
