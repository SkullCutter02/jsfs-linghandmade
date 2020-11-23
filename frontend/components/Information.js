import React from "react";

const Information = () => {
  return (
    <React.Fragment>
      <section>
        <p className="text">
          We always hear people said, “You are what you eat.” One step further,
          “You are what you use.’ Majority of people will turn to bottled liquid
          soaps when they want to buy something to clean their hair, face and
          body. It is undeniable that the over-the-counter bottled liquid
          cleansers are very attractive. They claimed to have different
          functions: moisturising, pore-refining, exfoliating, you name it. They
          are also packaged nicely with different colour. However, you might not
          know the truth behind it. <br /> <br />
          Most bottled liquid cleansers contain harsh chemicals, synthetic
          lathering agent such as Sodium Lauryl Sulfate ( SLS ) which is linked
          to breast cancer and is a known hormone disrupter. Some also contain
          Dimethicone which creates silky after-use feeling. As you know, skin
          is the largest organ and numerous researches show that toxic chemicals
          can pass through the porous skin and go into our bloodstream. Using
          over-time, those toxic can be accumulated internally in our body and
          poses long term threat to our health. <br /> <br />
          Then you will ask,”If bottled liquid cleanser is harmful, why not
          using commercially made soaps?” There are in fact distinct differences
          between commercially made soaps and handmade soaps. <br /> <br />
          Commercial soaps are made with hot process so that soaps can be
          produced and used in a short period of time. Besides, glycerin ( a
          humectant that attracts moisture from the air to the skin ) which is
          produced naturally from the soap making process, is being extracted
          and sold separately to the skin care making industry to make lotions
          and creams. This leaves the commercial soaps with only cleansing
          property. Besides, a lot of chemicals are being added to the
          commercial soaps: hardening agent to increase the durability;
          lathering agent to produce rich foam; PH stabilizer to balance the PH;
          preservatives also to increase durability. All these chemicals are
          harmful to our body. <br /> <br />
          On the other hand, handmade soaps are made by using different
          vegetable oils with cold process. It is due to this cold process that
          the nutrients and vitamins of the vegetable oils can be preserved.
          Besides, most handmade soaps are scented with essential oils derived
          from plants and flowers which contain different skin-loving
          properties. Other natural ingredients can also be added such as clays,
          herbs, milk , eggs etc to produce different functions. <br /> <br />
          Glycerin, the by-product in the soap making process, is maintained
          completely in handmade soaps. It captures the moisture in the air and
          forms a protective layer on the skin. This is the secret of the
          nourishing property of handmade soaps. <br /> <br />
          Apart from being good to ourselves, handmade soaps are environmental
          friendly. The toxic chemicals in commercial liquid cleanser and soaps
          flow back to the rivers and ocean. They cannot dissolved and will be
          accumulated in the water. Worst still, the polluted water will
          ultimately find their way back to our water system. On the other hand,
          residual of handmade soaps are bio-degradable and will be dissolved
          into water and carbon dioxide after 24 hours. As such, they pose zero
          burden and threat to our planet. <br /> <br />
          Handmade soaps can be tailor-made to suit different needs of different
          people. It can done simply by varying the combination of vegetable
          oils and the addition of other natural ingredients. <br /> <br />
          The main reason why people refused to use soaps is because of the dry
          feeling they have after using commercial soaps. If this is exactly the
          reason why you still away from soaps, I would strongly recommend you
          to pick up a piece of handmade soap and I can guarantee you will love
          it. While the beneficial effects might not be seen instantly, if used
          over time, the beneficial effect will be obvious and long lasting.
          <br /> <br />
          So why use LHM? At LHM, we use natural ingredients sourced from
          reputable overseas suppliers. We would not compromise quality in order
          to reduce manufacturing cost. Having said that, we do use expensive
          and fancy ingredients but high quality and affordable ingredients to
          make our products as we want to promote the use of natural skin cares
          to the general public. Majority of our products are scented with
          essential oils. In some cases, organic ones are used. Colour are
          derived from natural herbs and clays with the exception of some
          festive products which calls for certain fragrance and colour. Take
          for an instance, Christmas themed soaps which are usually in typical
          bright red and green colour which cannot be achieved without colouring
          agents. <br /> <br />
          In all cases, we guarantee a high standard of quality, a strict
          standard of hygiene and a simple but nice packaging that is pleasant
          to the eyes. <br /> <br />
          Come and try out our products and you will love it.
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
