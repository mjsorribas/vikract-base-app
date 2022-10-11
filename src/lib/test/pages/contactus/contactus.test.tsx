import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Contactus from "lib/pages/contactus/index";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("Contact Us Page", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Contactus />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
