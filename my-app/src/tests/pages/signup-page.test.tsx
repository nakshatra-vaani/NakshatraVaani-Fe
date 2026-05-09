import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupPage from "@/app/signup/page";

describe("Signup Page", () => {
  it("renders signup page", () => {
    render(<SignupPage />);

    expect(
      screen.getByText("Create Your Astral Profile")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /begin your journey/i,
      })
    ).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();

    render(<SignupPage />);

    const passwordInput =
      screen.getAllByPlaceholderText("••••••••")[0];

    expect(passwordInput).toHaveAttribute(
      "type",
      "password"
    );

    const toggleButtons =
      screen.getAllByRole("button");

    await user.click(toggleButtons[0]);

    expect(passwordInput).toHaveAttribute(
      "type",
      "text"
    );
  });
});