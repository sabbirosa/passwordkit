export function generatePassword(options: {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
}): string {
  const charsets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    special: "!@#$%^&*()_+[]{}|;:,.<>?",
  };

  let charset = "";
  if (options.includeUppercase) charset += charsets.uppercase;
  if (options.includeLowercase) charset += charsets.lowercase;
  if (options.includeNumbers) charset += charsets.numbers;
  if (options.includeSpecialCharacters) charset += charsets.special;

  if (!charset)
    throw new Error("At least one character type must be included.");

  return Array.from(
    { length: options.length },
    () => charset[Math.floor(Math.random() * charset.length)]
  ).join("");
}
