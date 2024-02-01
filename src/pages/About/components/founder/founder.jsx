import founder from "../../../../assets/img/founder.png";
import "./founder.scss"
export const Founder = () => {
  return (
    <section className="founder_section">
      <div className="founder_container founder_flex">
        <img src={founder} alt="" />
        <div className="founder_block">
          <h2 className="founder_title">From founder</h2>
          <p className="founder_text">
            Dear friends, I would certainly love to meet you all in person, so
            come and just say hi. If it’s not possible at the moment, I would
            like to introduce myself‚ I’m Vicky, the founder of the Beauty Shop.
            I’m certain that new lipstick and body scrub can make your day
            better.
          </p>
          <p className="author">-- Vicky Underwood</p>
        </div>
      </div>
    </section>
  );
};
