import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import MenuDesktop from "lib/layout/header/components/menudesktop/MenuDesktop";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("MenuMobile", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <MenuDesktop />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
