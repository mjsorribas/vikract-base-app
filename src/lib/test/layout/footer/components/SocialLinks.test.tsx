import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import SocialLinks from "lib/layout/footer/components/sociallinks/SocialLinks";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("SocialLinks", () => {
  const component = renderer.create(<SocialLinks />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
