import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Sitemap from "lib/layout/footer/components/sitemap/Sitemap";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("Sitemap", () => {
  const component = renderer.create(<Sitemap />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
