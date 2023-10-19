import {
  Box,
  Flex,
  Spacer,
  Link,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  IconButton,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { RiAlignJustify, RiCloseFill } from "react-icons/ri";

import MenuAccess from "../menuaccess/menuAccess";
import Logo from "lib/components/logo/Logo";
import { theme } from "lib/styles/customTheme";

export default function MenuMobile() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex>
      <Logo boxSize="25px" fontSize="1.168rem" fontColor={theme.colors.black} />
      <Spacer />
      <Box display="flex" alignItems="center">
        <Menu>
          <MenuButton
            onClick={onToggle}
            as={IconButton}
            size="lg"
            border="none"
            aria-label="Options"
            icon={isOpen ? <RiCloseFill /> : <RiAlignJustify />}
            variant="outline"
          />
          <MenuList
            w="100vw"
            alignContent="center"
            backgroundColor={theme.colors.cream}
          >
            <MenuItem
              w="100%"
              h="100%"
              display="flex"
              alignContent="center"
              alignItems="center"
            >
              <Link
                w="100%"
                h="100%"
                fontWeight="bold"
                mt={2}
                mb={2}
                textAlign="center"
                _hover={{ textDecoration: "none" }}
                href="/"
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                w="100%"
                mt={2}
                mb={2}
                textAlign="center"
                _hover={{ textDecoration: "none" }}
                href="/aboutus"
              >
                About Us
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                w="100%"
                mt={2}
                mb={2}
                textAlign="center"
                _hover={{ textDecoration: "none" }}
                href="/contactus"
              >
                Contact Us
              </Link>
            </MenuItem>
            <MenuDivider />
            <MenuAccess />
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
