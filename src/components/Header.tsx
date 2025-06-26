import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="top">
        <div className="left">📱 Download BeliBeli App</div>
        <div className="right">
          <div className="navigations">
            <span>Mitra BeliBeli</span>
            <span>About BeliBeli</span>
            <span>BeliBeli Care</span>
            <span>Promo</span>
          </div>
          <div className="auth-options">
            <span>Sign Up</span>
            <span>Login</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">🫎BeliBeli.com</div>
          <div className="search-panel">
            <select name="" id="" className="filter">
              <option value="">All Category</option>
              <option value="">Featured</option>
              <option value="">Sales</option>
              <option value="">Promo</option>
            </select>
            <div className="input-field">
              <span className="icon">🔍</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search product or brand here.."
              />
            </div>
          </div>
        </div>
        <div className="right">
          <span>🛒</span>
          <span>🔔</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
