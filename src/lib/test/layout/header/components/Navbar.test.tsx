import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test, vi } from "vitest";

import Navbar from "lib/layout/header/components/navbar/NavBar";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test("Navbar", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Navbar />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test("Navbar Mobile true", () => {
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
      <Navbar />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();

  window.matchMedia = originalMatchMedia;
});
