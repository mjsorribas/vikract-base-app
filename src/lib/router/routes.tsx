import type { PathRouteProps } from "react-router-dom";

import ContactUs from "lib/pages/contactus";
import Home from "lib/pages/home";

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
