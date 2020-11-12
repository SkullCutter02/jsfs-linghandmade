import React from "react";

const Information = () => {
  return (
    <React.Fragment>
      <section>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          deserunt dicta distinctio dolor dolorem doloremque eaque earum
          eligendi eveniet ex facere fugiat fugit in incidunt, labore libero
          magnam maxime minus modi molestias nesciunt nisi odio odit quam quas
          qui quibusdam quo ratione rem rerum saepe temporibus vel velit. Sunt,
          ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam atque delectus dignissimos fuga illo quibusdam quisquam
          veritatis voluptas! Aperiam atque dolore fugiat ipsum minima molestiae
          perspiciatis quisquam reprehenderit ullam voluptates? Amet animi dolor
          doloribus dolorum ea earum esse incidunt ipsam maxime molestiae odit
          perferendis possimus totam ullam, voluptate. Quis, recusandae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Culpa minus optio
          quos soluta velit! Accusantium alias aspernatur consequatur culpa cum
          cumque deleniti, dolore et illo nam, nihil, omnis recusandae
          voluptatibus? Ad animi cumque debitis dolorem et facere impedit iste
          neque nesciunt numquam odit omnis perspiciatis, possimus sequi unde
          vel vero! <br /> <br /> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A ab animi architecto consequuntur cumque eos et ex
          explicabo ipsum laboriosam, libero magnam magni maiores necessitatibus
          obcaecati perspiciatis praesentium quaerat quisquam quod reprehenderit
          rerum sunt, voluptatum! Ad adipisci commodi consequatur dicta
          doloremque eos eveniet ex facere, fuga incidunt ipsa ipsum iusto
          laboriosam magni maxime officia pariatur porro qui quis quos
          reiciendis reprehenderit rerum sapiente tenetur vitae voluptas
          voluptatum. Atque, commodi doloribus incidunt minus nam nihil non
          optio perferendis quidem rem reprehenderit repudiandae sapiente
          veritatis. Ad cumque delectus dignissimos est ipsum laborum magnam
          tenetur. Consequatur deserunt ducimus ipsa necessitatibus odit quod
          sapiente?
        </p>
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
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Information;
