import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";

import DynamicModalPage from "lib/pages/features/dynamicmodal-example";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
};

test("DynamicModal Example Page", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: "/features/dynamicmodal" }]}>
      <DynamicModalPage />
    </MemoryRouter>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
