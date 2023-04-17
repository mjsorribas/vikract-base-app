import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import AboutUs from "lib/pages/aboutus/index";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("About Us Page", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/aboutus" }]}>
      <AboutUs />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
