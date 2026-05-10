import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "@/app/login/page";

describe("Login Page", () => {
  it("renders login form", () => {
    render(<LoginPage />);

    expect(screen.getByText("Welcome Back")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your celestial ID")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("••••••••")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /log in/i })
    ).toBeInTheDocument();
  });

  it("allows typing in inputs", async () => {
    const user = userEvent.setup();

    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(
      "Enter your celestial ID"
    );

    const passwordInput =
      screen.getByPlaceholderText("••••••••");

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });
});