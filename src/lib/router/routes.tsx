import type { PathRouteProps } from "react-router-dom";

import AboutUs from "lib/pages/aboutus";
import ContactUs from "lib/pages/contactus";
import Home from "lib/pages/home";
import Prices from "lib/pages/prices";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/prices",
    element: <Prices />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
