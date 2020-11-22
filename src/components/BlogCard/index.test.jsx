import React from "react";
import { render , unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import BlogCard from "./index";


let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

describe("BlogCard", () => {
  const MOCK_DATA = [
    {
      title: {
        rendered: "You can find safe place for yourself here",
      },
      jetpack_featured_media_url:
        "https://safeplace102505649.files.wordpress.com/2020/11/womentogether.jpg",
      id: 78,
    },
  ];

  it("Renders without crashing", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      })
    );

    await act(async () => {
      render(<BlogCard />, container);
    });

    expect(container).toMatchSnapshot();
  });
});
