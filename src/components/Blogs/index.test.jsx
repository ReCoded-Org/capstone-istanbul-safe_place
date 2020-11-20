import React from "react";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Blogs from "./index";
import { act } from "react-dom/test-utils";

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
  it("Renders without crashing", async () => {
    const mockData = [
      {
        title: {
          rendered: "You can find safe place for yourself here",
        },
        jetpack_featured_media_url:
          "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
        id: 78,
      },
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    await act(async () => {
      ReactDOM.render(<Blogs />, container);
    });

    expect(container).toMatchSnapshot();
  });
});
