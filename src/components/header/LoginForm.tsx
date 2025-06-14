import React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authActions } from "../../redux/slices/authSlice";
import MainInfo from "../mainInfo/MainInfo";


export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { me, error } = useAppSelector((state) => state.auth);

  const [guest, setGuest] = useState(() => {
    const meString = localStorage.getItem("guest");
    return meString ? JSON.parse(meString) : null;
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(authActions.login({ firstName, lastName }));
  };



  // Якщо auth.me оновлюється після login — підтягуй guest автоматично
  useEffect(() => {
    const meString = localStorage.getItem("guest");
    setGuest(meString ? JSON.parse(meString) : null);
  }, [me]);

  return (
    <div className="login-container">
      {!me && !guest && (
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

      {error && <p style={{ color: "red" }}>{error}</p>}

      {(me || guest) && (
        <>
          <p className="welcome-name">
            Привіт, {(me?.firstName || guest?.firstName)} {(me?.lastName || guest?.lastName)}!
          </p>
   
        </>
      )}
    </div>
  );
};
