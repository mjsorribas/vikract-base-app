import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Header from "lib/layout/header/Header";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("Header", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Header />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
