import "./navigation.styles.scss";

import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { user } = useContext(UserContext);

  const handleSignout = async () => {
    await signOutUser();
  };

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

          {user ? (
            <span className="nav-link" onClick={handleSignout}>
              ÇIKIŞ YAP
            </span>
          ) : (
            <Link className="nav-link" to="/kullanici-dogrulama">
              GİRİŞ YAP / HESAP OLUŞTUR
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
