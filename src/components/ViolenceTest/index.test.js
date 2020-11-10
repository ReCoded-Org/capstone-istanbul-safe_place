import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import ViolenceTest from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <ViolenceTest />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
