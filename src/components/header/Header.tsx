import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authActions } from "../../redux/slices/authSlice";

type Props = {}

const Header = (props: Props) => {
  const dispatch = useAppDispatch();
  const { me } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <h1 className="header-logo">Love is always on time  💍</h1>
      </div>

      <nav className="header-nav">
        <button className="nav-button"><Link to ='about'>Про нас</Link></button>
        <button className="nav-button"><Link to="maininfo">Деталі весілля</Link></button>
        <button className="nav-button"><Link to='location'>Локація</Link></button>
        <button className="nav-button"><Link to='confirm'>Підтвердити присутність</Link></button>
      </nav>

      <div className="header-right">
        {me && <button className="logout-button" onClick={handleLogout}>Вийти</button>}
      </div>
    </header>
  );
};

export default Header;
