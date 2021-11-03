/* eslint-disable import/no-anonymous-default-export */
import React from "react";
const HomePage = React.lazy(() => import("pages/HomePage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AboutPage = React.lazy(() => import("pages/AboutPage"));

export default [
  {
    id: 1,
    path: "/",
    exact: true,
    page: HomePage,
  },
  {
    id: 2,
    path: "/contact",
    exact: true,
    page: ContactPage,
  },
  {
    id: 3,
    path: "/aboutMe",
    exact: true,
    page: AboutPage,
  },
];
