import { ChakraProvider } from "@chakra-ui/react"; // Importa ChakraProvider
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Footer from "lib/layout/footer/Footer";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("Footer", () => {
  const component = renderer.create(
    <ChakraProvider>
      <Footer />
    </ChakraProvider>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
