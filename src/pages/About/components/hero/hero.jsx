import React from "react";
import "./hero.scss";
export const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_title_block">
          <h2 className="hero_title">Hallo zusammen!</h2>
          <p className="hero_text">
            Wir sind der offizielle und einzige ONmacabim-Distributor in
            Deutschland.
          </p>
          <p className="hero_text">
            Wir sind zwei Geschäftspartner, Lolita Fedorova und Zulkhumor
            Sabyrova
          </p>
        </div>
      </div>
    </section>
  );
};
