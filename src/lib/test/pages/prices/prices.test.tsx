import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test, vi } from "vitest";

import Prices from "lib/pages/prices/index";

// Mock de una dependencia específica
vi.mock("@chakra-ui/react", async () => {
  const actual = await vi.importActual("@chakra-ui/react");
  return {
    ...actual,
    useBreakpointValue: () => "mockedValue",
    extendTheme: actual.extendTheme, // Asegúrate de incluir extendTheme en el mock
  };
});

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("Prices", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <ChakraProvider>
        <Prices />
      </ChakraProvider>
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
