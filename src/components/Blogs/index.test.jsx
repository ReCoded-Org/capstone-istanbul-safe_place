import React from "react";
import { render } from "react-dom";
import Blogs from "./index";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Blogs", () => {
  const MOCK_DATA = [
    {
      title: {
        rendered: "You can find safe place for yourself here",
      },
      jetpack_featured_media_url:
        "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
      id: 78,
      tags: [10221],
    },
  ];

  it("Renders without crashing", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      })
    );

    await act(async () => {
      render(
        <Router>
          <Blogs />
        </Router>,
        container
      );
    });

    expect(container).toMatchSnapshot();
  });
});
