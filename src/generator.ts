import { secureRandomBytes } from "./utils/ secureRandomBytes";

/**
 * Generates a random character from a given set of characters.
 * @param set - The character set to pick from.
 * @returns A random character from the set.
 */
function generateRandomCharacterFromSet(set: string): string {
  const array = secureRandomBytes(1);
  const index = array[0] % set.length;
  return set.charAt(index);
}

/**
 * Builds the character pool based on the provided options.
 * @param options - Password generation options.
 * @returns A string containing all allowed characters.
 */
function buildCharacterPool(options: {
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
}): string {
  const {
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialCharacters,
  } = options;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:',.<>?";

  let pool = "";

  if (includeUppercase) pool += upper;
  if (includeLowercase) pool += lower;
  if (includeNumbers) pool += numbers;
  if (includeSpecialCharacters) pool += special;

  return pool;
}

/**
 * Generates a secure random password based on the provided options.
 * @param options - Password generation options.
 * @returns A secure random password.
 */
export function generatePassword(options: {
  length: number;
  includeUppercase?: boolean;
  includeLowercase?: boolean;
  includeNumbers?: boolean;
  includeSpecialCharacters?: boolean;
}): string {
  const {
    length,
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSpecialCharacters = true,
  } = options;

  // Validate length
  if (!Number.isInteger(length) || length <= 0) {
    throw new Error("Password length must be a positive integer.");
  }

  // Build character pool
  const pool = buildCharacterPool({
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialCharacters,
  });

  if (!pool) {
    throw new Error("At least one character type must be included.");
  }

  // Generate password
  return Array.from({ length })
    .map(() => generateRandomCharacterFromSet(pool))
    .join("");
}
