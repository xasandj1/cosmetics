import "./info.scss"


export const Info = () => {
  return (
    <div className="container">
      <div className="info_block">
        <div>
          <p className="info_impressum_text">Datenschutzerklärung</p>
          <p className="info_impressum_text">Impressum</p>
        </div>
        <div>
          <p className="info_address_text">Adresse:</p>
          <p className="info_address">Kaiser-Friedrich-Strasse 19, 10585 Berlin</p>
          <p className="info_location">Termine nach Vereinbarung</p>
          <p className="info_number">RU / DE / UA</p>
          <p className="info_number">+49 176 436 036 89</p>
          <p className="info_number">ENG / RU</p>
          <p className="info_number">+49 157 381 811 78</p>
        </div>
      </div>
    </div>
  );
};
