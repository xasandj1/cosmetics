import "./textinfo.scss";
import girl from "../../../../assets/img/girl.png";
import cosmetics from "../../../../assets/img/costmetics.png";
export const InfoText = () => {
  return (
    <div className="about_container ">
      <div className="about_container_flex">
        <div className="text_info_card_block">
          <div className="text_info_card">
            <div className="textinfo">
              <h3 className="text_info_title">Vegan & cruelty free</h3>
              <p className="text_info_text">
                All products are 100% Vegan and have been registered with the
                Vegan Society. We will never test our products or ingredients on
                animals nor do we use suppliers who test them on our behalf.
              </p>
            </div>
          </div>
          <div className="text_info_card">
            <div className="textinfo">
              <h3 className="text_info_title">Vegan & cruelty free</h3>
              <p className="text_info_text">
                All products are 100% Vegan and have been registered with the
                Vegan Society. We will never test our products or ingredients on
                animals nor do we use suppliers who test them on our behalf.
              </p>
            </div>
          </div>
          <div className="text_info_card">
            <div className="textinfo">
              <h3 className="text_info_title">Vegan & cruelty free</h3>
              <p className="text_info_text">
                All products are 100% Vegan and have been registered with the
                Vegan Society. We will never test our products or ingredients on
                animals nor do we use suppliers who test them on our behalf.
              </p>
            </div>
          </div>
        </div>
        <div className="info_girls">
          <img className="info_photo" src={cosmetics} alt="" />
          <img className="info_photo" src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};
