# PasswordKit

A utility library for generating and validating strong passwords and one-time passwords (OTPs). Designed to help developers implement robust authentication mechanisms in their applications.

## Why is PasswordKit Important?

In today’s digital age, weak passwords and insecure authentication practices are major causes of data breaches. PasswordKit addresses this challenge by providing tools for:

- Generating strong passwords based on customizable criteria.
- Validating password strength.
- Generating secure, expirable OTPs for two-factor authentication or verification processes.

## Features

1.  **Password Generation**:

    - Create strong, secure passwords with custom criteria (length, uppercase, numbers, special characters).

2.  **Password Validation**:

    - Evaluate user-provided passwords against your security requirements.

3.  **OTP Generation and Validation**:

    - Generate one-time passwords for use in login, account recovery, or verification processes.
    - Automatically manage OTP expiration with an in-memory caching system.

4.  **Customizable**:

    - Define your own criteria for passwords and OTPs.

5.  **Lightweight and Isomorphic**:

    - Works seamlessly in both **Node.js** and **browser** environments.

## Installation

Install PasswordKit via npm:

```bash
npm install passwordkit
```

## Usage

### Password Generation

Generate a secure password by specifying custom criteria:

```javascript
import { generatePassword } from "passwordkit";
const password = generatePassword({
  length: 12,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSpecialCharacters: true,
});

console.log(password);

/* 
    Example Output: "A1b2@C3d#E4f5"
*/
```

#### Parameters for `generatePassword`

| Parameter                  | Type    | Description                                       |
| -------------------------- | ------- | ------------------------------------------------- |
| `length`                   | number  | Desired length of the password.                   |
| `includeUppercase`         | boolean | Include uppercase letters (A-Z).                  |
| `includeLowercase`         | boolean | Include lowercase letters (a-z).                  |
| `includeNumbers`           | boolean | Include numeric digits (0-9).                     |
| `includeSpecialCharacters` | boolean | Include special characters (e.g., @, #, !, etc.). |

### Password Validation

Evaluate the strength of a given password against predefined criteria:

```javascript
import { checkPasswordStrength } from "passwordkit";
const result = checkPasswordStrength("P@ssword123", {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialCharacters: true,
});
console.log(result);

/* 
Output: 
    {   
      score: 5,
      messages: []
    } 
*/
```

#### Parameters for `checkPasswordStrength`

| Parameter                  | Type    | Description                                  |
| -------------------------- | ------- | -------------------------------------------- |
| `password`                 | string  | The password to validate.                    |
| `minLength`                | number  | Minimum length required for the password.    |
| `requireUppercase`         | boolean | Require at least one uppercase letter (A-Z). |
| `requireLowercase`         | boolean | Require at least one lowercase letter (a-z). |
| `requireNumbers`           | boolean | Require at least one numeric digit (0-9).    |
| `requireSpecialCharacters` | boolean | Require at least one special character.      |

#### Validation Result for `checkPasswordStrength`

| Key        | Type     | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| `score`    | number   | A score (0–5) based on how many criteria were met.     |
| `messages` | string[] | A list of reasons why the password is considered weak. |

### OTP Generation and Validation

#### Generate an OTP

```javascript
import { createOtp } from "passwordkit";
const otp = createOtp("user123", 300); // Generate OTP valid for 300 seconds (5 minutes)  console.log(`Your OTP is: ${otp}`);

/* 
    Example Output: "458201" 
*/
```

#### Parameters for createOtp

| Parameter         | Type   | Description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| `key`             | string | A unique key to associate the OTP (e.g., user ID). |
| `expiryInSeconds` | number | Expiry time for the OTP in seconds (default: 300). |

#### Validate an OTP

```javascript
import { validateOtp } from "passwordkit";
const isValid = validateOtp("user123", "458201"); // Validate OTP  console.log(isValid ? "OTP is valid" : "OTP is invalid");

/* 
    Output:  OTP is valid 
*/
```

#### Parameters for validateOtp

| Parameter | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| `key`     | string | The unique key associated with the OTP. |
| `otp`     | string | The OTP to validate.                    |

### OTP Lifecycle

1.  **Generate OTP**:

    - Use createOtp to generate a time-limited OTP.
    - The OTP is stored in a lightweight in-memory cache.

2.  **Validate OTP**:

    - Use validateOtp to check if the OTP is correct and still valid.
    - Once validated, the OTP is automatically removed from the cache.

3.  **Automatic Expiration**:

    - OTPs expire after the defined time (default is 300 seconds) and are automatically removed from the cache.

#### Lifecycle of OTP

| Step         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| **Generate** | Use `createOtp` to generate an OTP with a specific expiry time. |
| **Validate** | Use `validateOtp` to check if the OTP is correct and valid.     |
| **Expire**   | OTP automatically expires after the defined expiry time.        |

## Why Use Strong Passwords and OTPs?

### Strong Passwords:

- Protect accounts from brute-force attacks.
- Ensure secure access to sensitive information.

### OTPs:

- Add an extra layer of security through two-factor authentication (2FA).
- Verify user actions such as login, password recovery, or sensitive changes (e.g., updating email).

PasswordKit simplifies the implementation of these best practices, enabling developers to focus on building secure applications.

## Example Use Case

### Use Case 1: Secure Registration

- **Step 1**: Generate a random password for users who choose "generate password."
- **Step 2**: Validate user-provided passwords to meet security criteria.

### Use Case 2: Two-Factor Authentication (2FA)

- **Step 1**: Generate an OTP when the user logs in or performs a sensitive action.
- **Step 2**: Validate the OTP within its expiry window to ensure secure verification.

## Contributing

We welcome contributions! Please submit issues or pull requests via [GitHub](https://github.com/sabbirosa/passwordkit).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
