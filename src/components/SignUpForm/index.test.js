import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignUpForm from "./index";

describe("SignUpForm", () => {
  it("renders correctly and matches the snapshot", () => {
    const tree = renderer.create(<SignUpForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const mockSubmit = jest.fn(
    (firstName, lastName, email, password, confirmPassword, acceptTerms) => {
      return Promise.resolve({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        acceptTerms,
      });
    }
  );

  beforeEach(() => {
    render(<SignUpForm submit={mockSubmit} />);
  });

  it("should display required error when value is empty", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(5);
    expect(mockSubmit).not.toBeCalled();
  });

  it("should display matching error when email is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe(
      "name"
    );
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe(
      "surname"
    );
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("test");
    expect(screen.getByPlaceholderText(/^password/i).value).toBe("password");
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe(
      "password"
    );
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });

  it("should display matching error when email domain is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@test.co",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe(
      "name"
    );
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe(
      "surname"
    );
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@test.co"
    );
    expect(screen.getByPlaceholderText(/^password/i).value).toBe("password");
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe(
      "password"
    );
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });

  it("should display min length error when password is short", async () => {
    const MIN_CHAR = 8;
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: `${"a".repeat(MIN_CHAR - 1)}`,
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: `${"a".repeat(MIN_CHAR - 1)}`,
      },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe(
      "name"
    );
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe(
      "surname"
    );
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByPlaceholderText(/^password/i).value).toBe(
      `${"a".repeat(MIN_CHAR - 1)}`
    );
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe(
      `${"a".repeat(MIN_CHAR - 1)}`
    );
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });

  it("should display max length error when password is long", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    const MAX_CHAR = 64;
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: `${"a".repeat(MAX_CHAR + 1)}`,
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: `${"a".repeat(MAX_CHAR + 1)}`,
      },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe(
      "name"
    );
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe(
      "surname"
    );
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByPlaceholderText(/^password/i).value).toBe(
      `${"a".repeat(MAX_CHAR + 1)}`
    );
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe(
      `${"a".repeat(MAX_CHAR + 1)}`
    );
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });

  it("should display password not match error when password repeat does not match", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "passcode",
      },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe(
      "name"
    );
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe(
      "surname"
    );
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByPlaceholderText(/^password/i).value).toBe("password");
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe(
      "passcode"
    );
    expect(screen.getByRole("checkbox").checked).toBe(true);
  });

  it("should display accept terms error when not accept terms", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe(
      "name"
    );
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe(
      "surname"
    );
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "test@mail.com"
    );
    expect(screen.getByPlaceholderText(/^password/i).value).toBe("password");
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe(
      "password"
    );
    expect(screen.getByRole("checkbox").checked).toBe(false);
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockSubmit).toBeCalledWith({
      firstName: "name",
      lastName: "surname",
      email: "test@mail.com",
      password: "password",
      confirmPassword: "password",
      acceptTerms: "accepted",
    });
    expect(screen.getByRole("textbox", { name: /firstName/i }).value).toBe("");
    expect(screen.getByRole("textbox", { name: /lastName/i }).value).toBe("");
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("");
    expect(screen.getByPlaceholderText(/^password/i).value).toBe("");
    expect(screen.getByPlaceholderText(/repeat password/i).value).toBe("");
    expect(screen.getByRole("checkbox").checked).toBe(false);
  });
});
