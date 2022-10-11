import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Footer from "lib/layout/footer/Footer";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("Footer", () => {
  const component = renderer.create(<Footer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
