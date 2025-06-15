import { useAppSelector } from "../../hooks/hooks";

type Props = {}

const MainInfo = (props: Props) => {
  const { me } = useAppSelector((state) => state.auth); 
  if (!me) {
    return null; // Якщо користувач не авторизований, нічого не показуємо
  } 
  return (
    <section className="main-info">
      <p className="main-text">
        Цей непростий час нам вкотре нагадав, як важливо оберігати тих, хто поруч, не відкладати життя на потім, а цінувати коханих, рідних та друзів. Разом відчувати безцінні моменти!
      </p>

      <p className="main-text">
        Щиро запрошуємо завітати на наше свято і в колі найближчих людей розділити з нами незабутні та щасливі хвилини створення нашої сім'ї
      </p>

      <div className="event-info">
        <h3>📅 3 липня 2025 року</h3>

        <ul>
          <li>
            <strong>⛪ Таїнство вінчання:</strong> 12:00 год.<br />
            Церква Успіння Пресвятої Богородиці
          </li>

          <li>
            <strong>💍 Церемонія одруження:</strong> 16:00 год.<br />
            Warsawa, Dwor Zolotopolska Dolina
          </li>

          <li>
            <strong>🎉 Святковий банкет:</strong> 17:00 год.<br />
            Warsawa, Dwor Zolotopolska Dolina
          </li>
        </ul>
      </div>

      <p className="couple-names">З любов’ю, Владислав та Анастасія 💗</p>
    </section>
  );
};

export default MainInfo;
