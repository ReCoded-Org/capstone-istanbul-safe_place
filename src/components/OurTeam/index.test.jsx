import React from "react";
import OurTeam from "./index.jsx";
import renderer from "react-test-renderer";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

it("renders correctly and matches the snapshot", () => {
  const tree = renderer.create(<OurTeam />).toJSON();
  expect(tree).toMatchSnapshot();
});
