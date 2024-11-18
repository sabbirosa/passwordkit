function generateRandomCharacterFromSet(set: string): string {
  const array = new Uint8Array(1);
  crypto.getRandomValues(array);
  const index = array[0] % set.length;
  return set.charAt(index);
}

export function generatePassword(options: {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
}): string {
  const {
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialCharacters,
  } = options;

  if (length <= 0) throw new Error("Password length must be greater than 0.");

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:',.<>?";
  let pool = "";

  if (includeUppercase) pool += upper;
  if (includeLowercase) pool += lower;
  if (includeNumbers) pool += numbers;
  if (includeSpecialCharacters) pool += special;

  if (!pool) throw new Error("At least one character type must be included.");

  return Array.from({ length })
    .map(() => generateRandomCharacterFromSet(pool))
    .join("");
}
