
import React, { useState, useEffect, FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./../App.css";
import Header from "../components/header/Header";
import { LoginForm } from "../components/header/LoginForm";

const MainLayout: FC = () => {

  const navigate = useNavigate();


  return (
    <div>
      <Header />
      <LoginForm />
      <Outlet />
    </div>
  );
};

export { MainLayout };