import { useAppSelector } from "../../hooks/hooks";
import { useTranslation } from "react-i18next";

type Props = {};

const MainInfo = (props: Props) => {
  const { me } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();

  if (!me) return null;

  return (
    <section className="main-info">
      <p className="main-text">{t("main title p1")}</p>
      <p className="main-text">{t("main title p2")}</p>

      <hr />
      <h3>{t("ceremony")}</h3>
      <p><strong>{t("location")}</strong><br />{t("address")}</p>
      <p><strong>{t("program")}</strong></p>
      <ul>
        {t("program list", { returnObjects: true }).map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />
      <h3>{t("accommodation")}</h3>
      <p>{t("check-in")}</p>
      <p>{t("evening")}</p>
      <p>{t("stay note")}</p>

      <hr />
      <h3>{t("no flowers")}</h3>
      <p>{t("no gifts")}</p>
      <p>{t("celebrate with us")}</p>

      <hr />
      <h3>{t("after party")}</h3>
      <p>{t("after party desc")}</p>
      <p>{t("swimwear")}</p>

      <hr />
      <p className="couple-names">{t("see you")}</p>
    </section>
  );
};

export default MainInfo;


