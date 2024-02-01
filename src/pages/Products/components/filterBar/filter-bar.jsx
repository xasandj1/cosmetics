import React from "react";
import FilterStyle from "./filter.module.scss";

export const FilterBar = () => {
  return (
    <div>
      <h2 className={FilterStyle.filter_title}>Filter by color</h2>
      <ul className={FilterStyle.filter_color_list}>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Black"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          
          <label htmlFor="Black"  className={FilterStyle.filter_color_items_text}>Black</label>
          <label htmlFor="Black" className={FilterStyle.filter_color_items_count}>(1)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input id="Blue"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Blue" className={FilterStyle.filter_color_items_text}>Blue</label>
          <label htmlFor="Blue" className={FilterStyle.filter_color_items_count}>(5)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Green"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Green" className={FilterStyle.filter_color_items_text}>Green</label>
          <label htmlFor="Green" className={FilterStyle.filter_color_items_count}>(8)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Red"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Red" className={FilterStyle.filter_color_items_text}>Red</label>
          <label htmlFor="Red" className={FilterStyle.filter_color_items_count}>(3)</label>
        </li>
      </ul>

      <h2 className={FilterStyle.filter_category_title}>Filter by category</h2>
      <ul className={FilterStyle.filter_category_list}>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Uncategorized"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Uncategorized" className={FilterStyle.filter_color_items_text}>Uncategorized</label>
          <label htmlFor="Uncategorized" className={FilterStyle.filter_color_items_count}>(1)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Bestsellers"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Bestsellers" className={FilterStyle.filter_color_items_text}>Bestsellers</label>
          <label htmlFor="Bestsellers" className={FilterStyle.filter_color_items_count}>(5)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Body"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Body" className={FilterStyle.filter_color_items_text}>Body</label>
          <label htmlFor="Body" className={FilterStyle.filter_color_items_count}>(8)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Fragrance"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Fragrance" className={FilterStyle.filter_color_items_text}>Fragrance</label>
          <label htmlFor="Fragrance" className={FilterStyle.filter_color_items_count}>(3)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="JoMolone"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="JoMolone" className={FilterStyle.filter_color_items_text}>Jo Malone</label>
          <label htmlFor="JoMolone" className={FilterStyle.filter_color_items_count}>(3)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Masks"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Masks" className={FilterStyle.filter_color_items_text}>Masks</label>
          <label htmlFor="Masks" className={FilterStyle.filter_color_items_count}>(5)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Organic_Body"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label
          htmlFor="Organic_Body"
           className={FilterStyle.filter_color_items_text}>Organic Body</label>
          <label htmlFor="Organic_Body" className={FilterStyle.filter_color_items_count}>(8)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="OrganicHair"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="OrganicHair" className={FilterStyle.filter_color_items_text}>Organic Hair</label>
          <label htmlFor="OrganicHair" className={FilterStyle.filter_color_items_count}>(3)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="OrganicSkincare"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="OrganicSkincare" className={FilterStyle.filter_color_items_text}>
            Organic Skincare
          </label>
          <label htmlFor="OrganicSkincare" className={FilterStyle.filter_color_items_count}>(1)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id=" OrganicWellbeing"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="OrganicWellbeing" className={FilterStyle.filter_color_items_text}>
            Organic Wellbeing
          </label>
          <label htmlFor="OrganicWellbeing" className={FilterStyle.filter_color_items_count}>(5)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Parfume"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Parfume" className={FilterStyle.filter_color_items_text}>Parfume</label>
          <label htmlFor="Parfume" className={FilterStyle.filter_color_items_count}>(8)</label>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
          id="Sunscreens"
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <label htmlFor="Sunscreens" className={FilterStyle.filter_color_items_text}>Sunscreens</label>
          <label htmlFor="Sunscreens" className={FilterStyle.filter_color_items_count}>(3)</label>
        </li>
      </ul>

      <div className={FilterStyle.filter_price}>
        <h2 className={FilterStyle.filter_price__title}>Filter by Price</h2>
        <input className={FilterStyle.filter_price__range} type="range" />
        <p className={FilterStyle.filter_price__text}>Price: $10 - $100</p>
      </div>
    </div>
  );
};
