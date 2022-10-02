import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Copyright from "lib/layout/footer/components/copyright/Copyright";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("Copyright", () => {
  const component = renderer.create(<Copyright />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
