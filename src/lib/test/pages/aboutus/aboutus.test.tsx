import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { ChakraProvider } from "@chakra-ui/react";
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

import AboutUs from "lib/pages/aboutus/index";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("AboutUs", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <ChakraProvider>
        <AboutUs />
      </ChakraProvider>
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
