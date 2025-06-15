import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authActions } from "../../redux/slices/authSlice";
import MainInfo from "../mainInfo/MainInfo";


export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { me, error } = useAppSelector((state) => state.auth);

console.log("me", me);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(authActions.login({ firstName, lastName }));
  };



  // Якщо auth.me оновлюється після login — підтягуй guest автоматично
  useEffect(() => {
  }, [me]);

  return (
    <div className="login-container">
      {!me &&  (
        <form onSubmit={handleSubmit}>
          <h2>Вхід в систему</h2>
          <div>
            <label>Ім’я:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Прізвище:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <button type="submit">Увійти</button>
        </form>
      )}

      {!me && error && (
        <div style={{ color: "red" }}>
          {error === 'Користувача не знайдено'
            ? 'Користувача з такими даними не знайдено. Спробуйте ще раз.'
            : 'Сталася помилка. Спробуйте пізніше.'
          }
        </div>
      )}


      {me  && (
        <>
          <p className="welcome-name">
            Вітаємо, {(me?.first_name)}!
          </p>
   
        </>
      )}
    </div>
  );
};
