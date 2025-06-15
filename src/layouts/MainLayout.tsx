import { useEffect, FC } from "react";
import { Outlet } from "react-router-dom";
import "./../App.css";
import Header from "../components/header/Header";
import { LoginForm } from "../components/header/LoginForm";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";// імпорт asyncThunk login
import { authActions } from "../redux/slices/authSlice";

const MainLayout: FC = () => {
  const dispatch = useAppDispatch();
  const { me, logoutTrigger } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!me) {
      const first_name = localStorage.getItem("first_name");
      const last_name = localStorage.getItem("last_name");
      if (first_name && last_name) {
        dispatch(authActions.login({ firstName: first_name, lastName: last_name }));
      }
    }
  }, [me, logoutTrigger, dispatch]);

  return (
    <div className="main-layout">
      <Header />
      <LoginForm />
      <Outlet />
    </div>
  );
};

export { MainLayout };
