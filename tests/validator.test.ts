import { checkPasswordStrength } from "../src/validator";

describe("Password Validator", () => {
  it("should return full score for a strong password", () => {
    const result = checkPasswordStrength("P@ssword123", {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialCharacters: true,
    });
    expect(result.score).toBe(5);
    expect(result.messages.length).toBe(0);
  });

  it("should return messages for unmet criteria", () => {
    const result = checkPasswordStrength("password", {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialCharacters: true,
    });
    expect(result.score).toBeLessThan(5);
    expect(result.messages).toContain(
      "Password should include at least one uppercase letter."
    );
    expect(result.messages).toContain(
      "Password should include at least one number."
    );
    expect(result.messages).toContain(
      "Password should include at least one special character."
    );
  });

  it("should validate passwords based on custom length", () => {
    const result = checkPasswordStrength("abc", {
      minLength: 5,
      requireUppercase: false,
      requireLowercase: true,
      requireNumbers: false,
      requireSpecialCharacters: false,
    });
    expect(result.score).toBe(0);
    expect(result.messages).toContain(
      "Password should be at least 5 characters long."
    );
  });
});
