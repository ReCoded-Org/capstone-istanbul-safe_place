import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignUpForm from "./index";

describe("SignUpForm", () => {
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
    // Try to submit the form without filling the required input fields
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    expect(await screen.findAllByRole("alert")).toHaveLength(5);
    expect(mockSubmit).not.toBeCalled();
  });

  it("should display matching error when email is invalid", async () => {
    // insert a valid first name
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    // insert a valid last name
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    // insert an invalid email address
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test",
      },
    });

    // insert a valid password
    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    // insert the same password provided
    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    // click on the checkbox to accept the terms and policy
    fireEvent.click(screen.getByRole("checkbox", { name: /acceptTerms/i }));

    // submit with these provided values
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // check against the right behaviour
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
    expect(screen.getByRole("checkbox", { name: /acceptTerms/i }).checked).toBe(
      true
    );
  });

  it("should display min length error when password is short", async () => {
    // insert a valid first name
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    // insert a valid last name
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    // insert a valid email address
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    // insert a short password
    const MIN_CHAR = 8;
    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: `${"a".repeat(MIN_CHAR - 1)}`,
      },
    });

    // insert the same password again
    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: `${"a".repeat(MIN_CHAR - 1)}`,
      },
    });

    // click on the checkbox to accept the terms and policy
    fireEvent.click(screen.getByRole("checkbox", { name: /acceptTerms/i }));

    // submit with these provided values
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // check against the right behaviour
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
    expect(screen.getByRole("checkbox", { name: /acceptTerms/i }).checked).toBe(
      true
    );
  });

  it("should display max length error when password is long", async () => {
    // insert a valid first name
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    // insert a valid last name
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    // insert a valid email address
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    // insert a too long password
    const MAX_CHAR = 64;
    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: `${"a".repeat(MAX_CHAR + 1)}`,
      },
    });

    // insert the same password again
    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: `${"a".repeat(MAX_CHAR + 1)}`,
      },
    });

    // click on the checkbox to accept the terms and policy
    fireEvent.click(screen.getByRole("checkbox", { name: /acceptTerms/i }));

    // submit with these provided values
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // check against the right behaviour
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
    expect(screen.getByRole("checkbox", { name: /acceptTerms/i }).checked).toBe(
      true
    );
  });

  it("should display password not match error when password repeat does not match", async () => {
    // insert a valid first name
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    // insert a valid last name
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    // insert a valid email address
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    // insert a valid password
    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    // insert a different password than provided one
    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "passcode",
      },
    });

    // click on the checkbox to accept the terms and policy
    fireEvent.click(screen.getByRole("checkbox", { name: /acceptTerms/i }));

    // submit with these provided values
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // check against the right behaviour
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
    expect(screen.getByRole("checkbox", { name: /acceptTerms/i }).checked).toBe(
      true
    );
  });

  it("should display accept terms error when not accept terms", async () => {
    // insert a valid first name
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    // insert a valid last name
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    // insert a valid email address
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    // insert a valid password
    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    // insert the same password again
    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    // submit with those provided values without accept terms and policy
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // check against the right behaviour
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
    expect(screen.getByRole("checkbox", { name: /acceptTerms/i }).checked).toBe(
      false
    );
  });

  it("should not display error when value is valid", async () => {
    // insert a valid first name
    fireEvent.input(screen.getByRole("textbox", { name: /firstName/i }), {
      target: {
        value: "name",
      },
    });

    // insert a valid last name
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "surname",
      },
    });

    // insert a valid email address
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    // insert a valid password
    fireEvent.input(screen.getByPlaceholderText(/^password/i), {
      target: {
        value: "password",
      },
    });

    // insert the same passwrod again
    fireEvent.input(screen.getByPlaceholderText(/repeat password/i), {
      target: {
        value: "password",
      },
    });

    // click on the checkbox to accept the terms and policy
    fireEvent.click(screen.getByRole("checkbox", { name: /acceptTerms/i }));

    // submit with those provided values
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));

    // check against the right behaviour
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
    expect(screen.getByRole("checkbox", { name: /acceptTerms/i }).checked).toBe(
      false
    );
  });
});
