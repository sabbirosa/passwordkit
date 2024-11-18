export function secureRandomBytes(length: number): Uint8Array {
  if (typeof window !== "undefined" && window.crypto) {
    // Browser environment
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array;
  } else if (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  ) {
    // Node.js environment
    const { randomBytes } = require("crypto"); // Dynamically import the Node.js crypto module
    return randomBytes(length);
  } else {
    throw new Error(
      "Secure random number generation is not supported in this environment."
    );
  }
}
