import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import ContactUs from "lib/pages/contactus";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
