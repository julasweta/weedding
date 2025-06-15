import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authActions } from "../../redux/slices/authSlice";

const Confirm = () => {
  const { me } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [sent, setSent] = useState(false);

  useEffect(() => {
   
  }, [sent, me]);

  const sendConfirmation = () => {
    if (me?.id) {
      const isConfirmed = window.confirm("Щоб підтвердити свою присутність, натисніть OK");
      if (isConfirmed) {
        dispatch(authActions.confirm(me.id));
        setSent(true);
      }
    }
  };
  

  if (!me?.first_name || !me?.last_name) {
    return <p>Будь ласка, увійдіть, щоб підтвердити присутність.</p>;
  }

  if (me.isConfirmed === true) {
    return (
      <div style={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
        <h3>Ви вже підтвердили присутність</h3>
        <p>Дякуємо!</p>
      </div>
    );
  }

  if (me.isConfirmed === false)
  {return (
    <div className="confirm-container">
      <h3>Підтвердити присутність</h3>
      <p>
        Ім'я: <b>{me.first_name} {me.last_name}</b>
      </p>
      <button className="nav-button" onClick={sendConfirmation} style={{ padding: "8px 16px" }}>
        Підтвердити
      </button>
    </div>
  )};
};

export default Confirm;



