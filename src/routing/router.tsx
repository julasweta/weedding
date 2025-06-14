import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { AppRoutes } from "./AppRoutes";
import Error404 from "../components/Error404";
import Location from "../components/location/Location";
import MainInfo from "../components/mainInfo/MainInfo";
import AboutUs from "../components/about/About";
import Confirm from "../components/confirm/Confirm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppRoutes.HOME} />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "maininfo",
        element: <MainInfo />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "confirm",
        element: <Confirm />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);
