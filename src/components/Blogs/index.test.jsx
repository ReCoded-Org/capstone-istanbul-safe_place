import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Blogs from "./index";
import TestRenderer from "react-test-renderer";
const { act } = TestRenderer;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          title: {
            rendered: "You can find safe place for yourself here",
          },
          jetpack_featured_media_url:
            "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
          id: 78,
        },
      ]),
  })
);

describe("Blogs", () => {
  it("renders correctly and matches the snapshot", async () => {
    await act(async () => render(<Blogs />));
    const tree = renderer.create(<Blogs />).toJSON();
    expect(
      screen.getByText("You can find safe place for yourself here")
    ).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
