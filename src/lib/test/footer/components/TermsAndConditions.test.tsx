import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import TermsAndConditions from "lib/layout/footer/components/termsandconditions/TermsAndConditions";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("TermsAndConditions", () => {
  const component = renderer.create(<TermsAndConditions />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
