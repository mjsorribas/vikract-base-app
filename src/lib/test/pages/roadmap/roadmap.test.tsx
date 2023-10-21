import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import Roadmap from "lib/pages/roadmap/index";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("Roadmap Page", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/roadmap" }]}>
      <Roadmap />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
