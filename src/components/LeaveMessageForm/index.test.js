import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LeaveMessageForm from "./index";

describe("LeaveMessageForm", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<LeaveMessageForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});