import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi, describe } from "vitest";
import "@testing-library/jest-dom";

import Navbar from "lib/layout/header/components/navbar/NavBar";
import MenuDesktop from "lib/layout/header/components/menudesktop/MenuDesktop";
import MenuMobile from "lib/layout/header/components/menumobile/MenuMobile";

// Mock de MenuDesktop y MenuMobile
vi.mock("../menudesktop/MenuDesktop", () => ({
  default: () => <MenuDesktop />,
}));

vi.mock("../menumobile/MenuMobile", () => ({
  default: () => <MenuMobile />,
}));

// vars to manage useMediaQuery
let isMobileView = false;

// Mock dependencies of Chakra UI
vi.mock("@chakra-ui/react", async () => {
  const actual = await vi.importActual<object>("@chakra-ui/react");
  return {
    ...actual,
    useMediaQuery: () => [isMobileView],
    Box: ({ children }: { children: React.ReactNode }) => (
      <div role="navigation">{children}</div>
    ),
  };
});

describe("Navbar Component", () => {
  test("should be render Navbar", () => {
    // ARRANGE
    const { container } = render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <ChakraProvider>
          <Navbar />
        </ChakraProvider>
      </MemoryRouter>
    );

    // ASSERT
    expect(container.firstChild).toBeInTheDocument();
  });
});
