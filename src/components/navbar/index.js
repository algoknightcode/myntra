// navbar
import React, { useState } from "react";
import "./Navbar.css";
import HEART from "../../assets/heart.svg";
import PERSON from "../../assets/person.svg";
import SHOPPING from "../../assets/shopping.svg";
import SEARCH from "../../assets/search.svg";
import MYNTRA from "../../assets/myntra-1.svg"

export function Navbar() {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChnage = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className="main_nav">

      <div className="myntra-icon">
        <img src={MYNTRA} />
      </div>

      <div className="nav_categories">
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
        <div>Home & Living</div>
        <div>Beauty</div>
        <div>Studio <span className="badge">new</span></div>
      </div>

      <div className="search-bar">

        <img src={SEARCH} className="search-icon" />

        <input
          type="text"
          placeholder="Search for products, brands and more"
          value={searchItem}
          onChange={handleInputChnage}
        />



      </div>

      <div className="last_icons">
        <div className="icon_item">
          <img src={PERSON} alt="profile" />
          <span>profile</span>
        </div>
        <div className="icon_item">
          <img src={HEART} alt="wishlist" />
          <span>wishlist</span>
        </div>
        <div className="icon_item">
          <img src={SHOPPING} alt="bag" />
          <span>bag</span>
        </div>
      </div>

    </div>
  )
}
