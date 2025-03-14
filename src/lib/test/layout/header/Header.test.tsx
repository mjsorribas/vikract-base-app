import { ChakraProvider } from "@chakra-ui/react"; // Importa ChakraProvider
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Header from "lib/layout/header/Header";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("Header", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <ChakraProvider>
        {" "}
        {/* Agrega ChakraProvider aquí */}
        <Header />
      </ChakraProvider>
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
