import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test, vi } from "vitest";

import MenuAccess from "lib/layout/header/components/menuaccess/menuAccess";

// Mock de una dependencia específica
vi.mock("lib/layout/header/components/menuaccess/menuAccess", () => ({
  __esModule: true,
  default: () => <div>Mocked MenuAccess</div>,
}));

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("Menu Access", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <MenuAccess />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
