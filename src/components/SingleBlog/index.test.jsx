import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import SingleBlog from "./index";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Single blog", () => {
  const MOCK_DATA = {
    content: {
      rendered: "You can find safe place for yourself here",
    },
    "jetpack-related-posts": [
      {
        id: 61,
        title: "Women and health",
        img: {
          src:
            "https://safeplace102505649.files.wordpress.com/2020/11/smilinggirl.jpg?w=350&h=200&crop=1",
        },
      },
    ],
  };

  it("Renders without crashing", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      })
    );

    await act(async () => {
      render(
        <Router>
          <SingleBlog />
        </Router>,
        container
      );
    });

    expect(container).toMatchSnapshot();
  });
});