import type { PathRouteProps } from "react-router-dom";

import AboutUs from "lib/pages/aboutus";
import ContactUs from "lib/pages/contactus";
import Cookies from "lib/pages/cookies";
import Features from "lib/pages/features";
import DynamicModalPage from "lib/pages/features/dynamicmodal-example";
import Home from "lib/pages/home";
import Prices from "lib/pages/prices";
import Products from "lib/pages/products";
import TermsAndConditions from "lib/pages/termsandconditions";

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
  {
    path: "/termsandconditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/features/dynamicmodal",
    element: <DynamicModalPage />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
