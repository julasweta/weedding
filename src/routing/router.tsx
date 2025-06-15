import React from "react";
import { Navigate, createHashRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { AppRoutes } from "./AppRoutes";
import Error404 from "../components/Error404";
import Location from "../components/location/Location";
import MainInfo from "../components/mainInfo/MainInfo";
import AboutUs from "../components/about/About";
import Confirm from "../components/confirm/Confirm";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppRoutes.MAIN_INFO} />,
      },
      {
        path: AppRoutes.LOCATION,
        element: <Location />,
      },
      {
        path: AppRoutes.MAIN_INFO,
        element: <MainInfo />,
      },
      {
        path: AppRoutes.ABOUT,
        element: <AboutUs />,
      },
      {
        path: AppRoutes.CONFIRM,
        element: <Confirm />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

