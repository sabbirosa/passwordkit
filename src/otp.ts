// OTP Cache
const otpCache: Record<string, { otp: string; expiry: number }> = {};

// Import secureRandomBytes
import { secureRandomBytes } from "./utils/ secureRandomBytes";

/**
 * Generates a random character from a given set of characters.
 * @param set - A string containing the character set.
 * @returns A random character.
 */
function generateRandomCharacterFromSet(set: string): string {
  const array = secureRandomBytes(1);
  const index = array[0] % set.length;
  return set.charAt(index);
}

/**
 * Generates a numeric OTP of the specified length.
 * @param length - The length of the OTP. Default is 6.
 * @returns A numeric OTP.
 */
function generateOtp(length = 6): string {
  if (length <= 0) throw new Error("OTP length must be greater than 0.");
  const digits = "0123456789";
  return Array.from({ length })
    .map(() => generateRandomCharacterFromSet(digits))
    .join("");
}

/**
 * Creates and stores an OTP in the cache with an expiration time.
 * @param key - A unique key to associate the OTP (e.g., user ID or email).
 * @param expiryInSeconds - Expiry time in seconds. Default is 300 (5 minutes).
 * @returns The generated OTP.
 */
export function createOtp(key: string, expiryInSeconds = 300): string {
  if (!key) throw new Error("Key is required to create an OTP.");
  if (expiryInSeconds <= 0)
    throw new Error("Expiry time must be greater than 0.");

  const otp = generateOtp();
  const expiry = Date.now() + expiryInSeconds * 1000;
  otpCache[key] = { otp, expiry }; // Cache the OTP with the expiry time
  return otp;
}

/**
 * Validates an OTP against the cache.
 * @param key - The unique key associated with the OTP.
 * @param otp - The OTP to validate.
 * @returns True if the OTP is valid; otherwise, false.
 */
export function validateOtp(key: string, otp: string): boolean {
  if (!key) throw new Error("Key is required to validate an OTP.");
  if (!otp) throw new Error("OTP is required for validation.");

  const record = otpCache[key];
  if (!record) return false; // No OTP found for the key

  const { otp: cachedOtp, expiry } = record;
  if (Date.now() > expiry) {
    delete otpCache[key]; // Remove expired OTP
    return false;
  }

  const isValid = otp === cachedOtp;
  if (isValid) delete otpCache[key]; // Remove OTP after successful validation
  return isValid;
}
