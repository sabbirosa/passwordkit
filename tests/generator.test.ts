import { generatePassword } from "../src";

describe("Password Generator", () => {
  it("should generate a password of specified length", () => {
    const password = generatePassword({
      length: 12,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSpecialCharacters: true,
    });
    expect(password.length).toBe(12);
  });

  it("should include only specified character types", () => {
    const password = generatePassword({
      length: 10,
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: false,
      includeSpecialCharacters: false,
    });
    expect(/^[a-z]+$/.test(password)).toBe(true);
  });

  it("should throw an error if no character types are selected", () => {
    expect(() =>
      generatePassword({
        length: 10,
        includeUppercase: false,
        includeLowercase: false,
        includeNumbers: false,
        includeSpecialCharacters: false,
      })
    ).toThrow("At least one character type must be included.");
  });
});
