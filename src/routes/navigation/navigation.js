import "./navigation.styles.scss";

import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/alisveris">
            ALIŞVERİŞ
          </Link>
          <Link className="nav-link" to="/kullanici-dogrulama">
            GİRİŞ YAP / HESAP OLUŞTUR
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
