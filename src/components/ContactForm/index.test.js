import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LeaveMessageForm from "./index";

describe("LeaveMessageForm", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<LeaveMessageForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const mockSubmit = jest.fn((name, email, messageContent) => {
    return Promise.resolve({ name, email, messageContent });
  });

  beforeEach(() => {
    render(<LeaveMessageForm submit={mockSubmit} />);
  });

  it("should display required error when value is invalid", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(2);
    expect(mockSubmit).not.toBeCalled();
  });

  // TODO: uncomment this unite test when add the email address validation
  // it("should display matching error when email is invalid", async () => {
  //   fireEvent.input(screen.getByRole("textbox", { name: /Email address/i }), {
  //     target: {
  //       value: "test",
  //     },
  //   });

  //   fireEvent.input(screen.getByRole("textbox", { name: /message/i }), {
  //     target: {
  //       value: "New message to send to us",
  //     },
  //   });

  //   fireEvent.submit(screen.getByRole("button"));

  //   expect(await screen.findAllByRole("alert")).toHaveLength(1);
  //   expect(mockSubmit).not.toBeCalled();
  //   expect(screen.getByRole("textbox", { name: /Email address/i }).value).toBe(
  //     "test"
  //   );
  //   expect(screen.getByRole("textbox", { name: /message/i }).value).toBe(
  //     "New message to send to us"
  //   );
  // });

  it("should display min length error when message is short", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /Email address/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /message/i }), {
      target: {
        value: "pass",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /Email address/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByRole("textbox", { name: /message/i }).value).toBe(
      "pass"
    );
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /Full Name/i }), {
      target: {
        value: "Name Nami",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /Email address/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /message/i }), {
      target: {
        value: "Long message to be sent",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    // expect(await screen.findAllByRole("alert")).toHaveLength(0);

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockSubmit).toBeCalledWith({
      email: "test@mail.com",
      fullName: "Name Nami",
      messageContent: "Long message to be sent",
    });
    expect(screen.getByRole("textbox", { name: /Full Name/i }).value).toBe("");
    expect(screen.getByRole("textbox", { name: /Email address/i }).value).toBe(
      ""
    );
    expect(screen.getByRole("textbox", { name: /message/i }).value).toBe("");
  });
});
