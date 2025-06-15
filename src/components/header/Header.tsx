import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authActions } from "../../redux/slices/authSlice";
import { authService } from "../../services/authService";

const Header = () => {
  const dispatch = useAppDispatch();
  const { me } = useAppSelector((state) => state.auth);
 

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(authActions.logout());
    authService.logout();
    dispatch(authActions.setLogoutTrigger());
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header-container">
      <h1 className="header-logo">
        💍 Our Wedding Day 💍<br />
        <span className="couple-names">Vladyslav & Anastasiia</span>
      </h1>


      <button className="burger-button" aria-label="Toggle menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="about">Про нас</Link></button>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="maininfo">Деталі весілля</Link></button>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="location">Локація</Link></button>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="confirm">Підтвердити присутність</Link></button>
        {me && <button className="nav-button logout-button" onClick={() => { handleLogout(); setMenuOpen(false); }}>Вийти</button>}
      </nav>
    </header>
  );
};

export default Header;


