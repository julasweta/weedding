import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/hooks";



const AboutUs = () => {
  const { t } = useTranslation();
  const { me } = useAppSelector((state) => state.auth); 
  
  if (!me) {
    return null; // Якщо користувач не авторизований, нічого не показуємо
  }
  return (
    <section className="about-us">
      <h2 className="about-title">{t('about us')}</h2>
      <p className="about-text">
        {t('about p1')}
      </p>
      <p className="about-text">
        {t('about p2')}
      </p>
      <p className="about-text">
        {t('about p3')}
      </p>
      <p className="about-names">{t('about names') }</p>

    </section>
  );
};

export default AboutUs;
