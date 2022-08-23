import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./footer/components/Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" w="100%" transition="0.5s ease-out">
      <Flex wrap="wrap" margin="8" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
