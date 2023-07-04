import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test, vi } from "vitest";

import MenuAccess from "lib/layout/header/components/menuaccess/menuAccess";

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

test("Menu Access isMobile true", () => {
  const originalMatchMedia = window.matchMedia;
  window.innerWidth = 375;
  window.innerHeight = Math.round((window.innerWidth * 16) / 9);
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));

  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <MenuAccess />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();

  window.matchMedia = originalMatchMedia;
});

test("Menu Access isMobile false", () => {
  const originalMatchMedia = window.matchMedia;
  window.innerWidth = 1920;
  window.innerHeight = 1080;
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));

  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <MenuAccess />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();

  window.matchMedia = originalMatchMedia;
});
