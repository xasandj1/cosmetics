import React from "react";
import { Hero } from "./components/hero/hero";
import { Info } from "./components/info/info";
import { InfoText } from "./components/textinfo/textinfo";
import { Founder } from "./components/founder/founder";
import cup from "../../assets/img/cup.png"
import "./about.scss";
export const About = () => {
  return (
    <>
      <Hero />,
      <Info />
      <InfoText />
      <Founder />
      <div className="mission_block">
        <h2 className="mission_title">Our Mission</h2>
        <p className="mission_text">
          “For a long time I was looking to create a new beauty brand that is
          different. Our beauty experts use ingredients that work and that
          everyone understands. ”
        </p>
      </div>
      <section className="discover_section">
        <div className="discover_container">
          <h2 className="discover_title">Discover our products</h2>
          <p className="discover_text">
            We have skincare, body, wellbeing products and amazing frangrance
            range. All made with love in France.
          </p>
          <button className="discover_btn">Shop all </button>
        </div>
      </section>
      <section>
        <div className="team_container">
          <div className="discover_info">
            <h2 className="discover_title">Join our team</h2>
            <p className="discover_text">
              We are always looking for great professionals and will be happy to
              increase our team with your talent. You can view our open
              positions or simply send us an email.
            </p>
            <button className="discover_btn">View Positions </button>
          </div>
          <img src={cup} alt="" />
        </div>
      </section>
    </>
  );
};
