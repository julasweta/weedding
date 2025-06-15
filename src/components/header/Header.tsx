import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authActions } from "../../redux/slices/authSlice";
import { authService } from "../../services/authService";
import { useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useAppDispatch();
  const { me, language } = useAppSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(authActions.logout());
    authService.logout();
    dispatch(authActions.setLogoutTrigger());
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
   dispatch(authActions.setLanguage(localStorage.getItem("language") || "ua"));
  }, [language]);
  

  const toggleLanguage = () => {
    dispatch(authActions.setLanguage(language === "ua" ? "en" : "ua"));
    localStorage.setItem("language", language === "ua" ? "en" : "ua");
  };

  return (
    <header className="header-container">
      <h1 className="header-logo">
        💍 Our Wedding Day 💍
        <span className="couple-names">{t('about names')}</span>
      </h1>

      <button className="burger-button" aria-label="Toggle menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="about">Про нас</Link></button>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="maininfo">Деталі весілля</Link></button>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="location">Як добратись</Link></button>
        <button className="nav-button" onClick={() => setMenuOpen(false)}><Link to="confirm">Підтвердити присутність</Link></button>
        {me && (
          <button className="nav-button logout-button" onClick={() => { handleLogout(); setMenuOpen(false); }}>
            Вийти
          </button>
        )}
      </nav>

      <button className="lang-button" onClick={toggleLanguage}>
        {language === "ua" ? "UA" : "EN"}
      </button>
    </header>
  );
};

export default Header;



