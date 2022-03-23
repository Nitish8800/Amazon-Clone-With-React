import React from "react";
import "./Header.css";
// import img1 from "./All_Images/amazon_PNG2.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      {/* LOGO */}
      <img
        className="header_logo"
        src="./all_image/amazon_PNG11.png"
        alt="Amazon"
      />

      <div className="header_search">
        <input className="header_serach_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo"> Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_BasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
