import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import JobsTrainingHome from "./index";

it("renders correctly and matches the snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <JobsTrainingHome />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
