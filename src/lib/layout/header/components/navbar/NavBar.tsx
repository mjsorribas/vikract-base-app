import { Box, useMediaQuery } from "@chakra-ui/react";

import MenuDesktop from "../menudesktop/MenuDesktop";
import MenuMobile from "../menumobile/MenuMobile";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  const displayDesktop = () => {
    return <MenuDesktop />;
  };

  const displayMobile = () => {
    return <MenuMobile />;
  };

  return <Box>{isMobile ? displayMobile() : displayDesktop()}</Box>;
};

export default Navbar;
