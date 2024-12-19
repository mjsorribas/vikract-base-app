import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test, vi } from "vitest";

// Mock de una dependencia específica
vi.mock("@chakra-ui/react", async () => {
  const actual = await vi.importActual("@chakra-ui/react");
  return {
    ...actual,
    useBreakpointValue: () => "mockedValue",
    extendTheme: actual.extendTheme, // Asegúrate de incluir extendTheme en el mock
  };
});

import Navbar from "lib/layout/header/components/navbar/NavBar";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result;
};

test("Navbar", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(Array.isArray(tree)).toBe(true); // Verifica si el resultado es un array
  expect(tree).toMatchSnapshot();
});
