import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/hooks";

const Confirm = () => {
  const { me } = useAppSelector((state) => state.auth);

  const [guest, setGuest] = useState<{ firstName: string; lastName: string } | null>(null);
  const [sent, setSent] = useState(false);
  const [alreadyConfirmed, setAlreadyConfirmed] = useState(false);

  useEffect(() => {
    const guestString = localStorage.getItem("guest");
    if (guestString) setGuest(JSON.parse(guestString));
  }, [me]);

  const SHEET_URL = import.meta.env.VITE_SHEET_URL;

  const firstName = me?.firstName || guest?.firstName;
  const lastName = me?.lastName || guest?.lastName;

  useEffect(() => {
    if (!firstName || !lastName) return;

    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data: Array<{ firstName: string; lastName: string }>) => {
        const confirmed = data.some(
          (item) =>
            item.firstName.toLowerCase() === firstName.toLowerCase() &&
            item.lastName.toLowerCase() === lastName.toLowerCase()
        );
        setAlreadyConfirmed(confirmed);
      })
      .catch(() => {
        console.warn("Не вдалося завантажити список підтверджених");
      });
  }, [firstName, lastName, SHEET_URL]);

  const sendConfirmation = () => {
    const firstName = me?.firstName || guest?.firstName;
    const lastName = me?.lastName || guest?.lastName;
  
    if (!firstName || !lastName) {
      return alert("Ім'я або прізвище не задано");
    }
  
    const url = new URL(import.meta.env.VITE_SHEET_URL);
    url.searchParams.append("firstName", firstName);
    url.searchParams.append("lastName", lastName);
  
    fetch(url.toString())
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setSent(true);
        } else {
          alert("Помилка відправки");
        }
      })
      .catch(() => alert("Помилка мережі"));
  };
  

  if (!firstName || !lastName) {
    return <p>Будь ласка, увійдіть, щоб підтвердити присутність.</p>;
  }

  if (alreadyConfirmed) {
    return (
      <div style={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
        <h3>Ви вже підтвердили присутність</h3>
        <p>Дякуємо!</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
      <h3>Підтвердити присутність</h3>
      <p>
        Ім'я: <b>{firstName} {lastName}</b>
      </p>
      <button onClick={sendConfirmation} style={{ padding: "8px 16px" }}>
        Підтвердити
      </button>
      {sent && <p style={{ color: "green" }}>Дякуємо за підтвердження!</p>}
    </div>
  );
};

export default Confirm;


