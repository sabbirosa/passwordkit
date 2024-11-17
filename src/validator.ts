export function checkPasswordStrength(
  password: string,
  criteria: {
    minLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecialCharacters: boolean;
  }
): {
  score: number;
  messages: string[];
} {
  const messages: string[] = [];
  let score = 0;

  // 1. Prioritize Length Check
  if (password.length < criteria.minLength) {
    return {
      score: 0,
      messages: [
        `Password should be at least ${criteria.minLength} characters long.`,
      ],
    };
  } else {
    score++;
  }

  // 2. Check for Uppercase
  if (criteria.requireUppercase) {
    if (/[A-Z]/.test(password)) {
      score++;
    } else {
      messages.push("Password should include at least one uppercase letter.");
    }
  }

  // 3. Check for Lowercase
  if (criteria.requireLowercase) {
    if (/[a-z]/.test(password)) {
      score++;
    } else {
      messages.push("Password should include at least one lowercase letter.");
    }
  }

  // 4. Check for Numbers
  if (criteria.requireNumbers) {
    if (/[0-9]/.test(password)) {
      score++;
    } else {
      messages.push("Password should include at least one number.");
    }
  }

  // 5. Check for Special Characters
  if (criteria.requireSpecialCharacters) {
    if (/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)) {
      score++;
    } else {
      messages.push("Password should include at least one special character.");
    }
  }

  return {
    score,
    messages,
  };
}
