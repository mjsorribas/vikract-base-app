import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Home from "lib/pages/home/index";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("Home", () => {
  renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Home />
    </MemoryRouter>,
    {
      rendererConfig: {
        devicePixelRatio: 2,
        width: 1920,
        height: 1080,
      },
    }
  );

  // Verifica el snapshot del componente
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Home />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
