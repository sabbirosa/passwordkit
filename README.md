# PasswordKit

A utility library for generating and validating strong passwords. Designed to help developers create secure applications by ensuring users generate and use strong passwords.

## Why is This Project Important?

In today’s digital world, where personal and sensitive information is stored online, weak passwords are one of the most common entry points for hackers. Millions of accounts are compromised every year because users choose passwords that are easy to guess or crack.

Using a **strong password** generator and validator can:

- Prevent brute-force and dictionary attacks.
- Protect sensitive user data.
- Build user trust by enforcing strong password policies.

This library aims to make implementing password security seamless for developers by providing robust tools to generate strong passwords and validate password strength against custom criteria.

## Features

1.  **Generate Strong Passwords**:

    - Easily create passwords based on custom criteria, such as length, inclusion of uppercase letters, numbers, and special characters.

2.  **Validate Password Strength**:

    - Ensure user-provided passwords meet your application’s security requirements.

3.  **Customizable**:

    - Define your own criteria for what makes a password "strong."

## Installation

Install the library via npm:

```bash
npm install passwordkit
```

## Usage

### Generating Passwords

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
Example Output: "A1@b2C3#d4E5"
*/
```

#### Parameters for generatePassword

- **length** (number): Desired password length.
- **includeUppercase** (boolean): Whether to include uppercase letters.
- **includeLowercase** (boolean): Whether to include lowercase letters.
- **includeNumbers** (boolean): Whether to include numbers.
- **includeSpecialCharacters** (boolean): Whether to include special characters like @, #, !.

### Validating Passwords

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

#### Parameters for checkPasswordStrength

- **password** (string): The password to validate.
- **minLength** (number): Minimum allowed password length.
- **requireUppercase** (boolean): Require at least one uppercase letter.
- **requireLowercase** (boolean): Require at least one lowercase letter.
- **requireNumbers** (boolean): Require at least one numeric digit.
- **requireSpecialCharacters** (boolean): Require at least one special character like @, #, !.

#### Result

- **score** (number): A score from 0 to 5 representing how many criteria the password meets.
- **messages** (array): A list of reasons why the password is weak (if applicable).

## Example Use Case

Imagine you're building a web application where users must register an account. You want to:

1.  Generate random secure passwords for users who prefer automatic generation.
2.  Validate user-provided passwords to meet your application's security standards.

By using passwordkit, you can:

- Simplify implementation.
- Reduce the risk of account compromises.
- Enforce strong security policies with minimal effort.

## Why Use Strong Password?

A **strong password**:

- Is long and complex.
- Contains a mix of uppercase, lowercase, numbers, and special characters.
- Is difficult to guess or crack, even with advanced tools.

passwordkit helps enforce these best practices with ease.

## Contributing

We welcome contributions! Please submit issues or pull requests via [GitHub](https://github.com/sabbirosa/passwordkit).

## License

This project is licensed under the MIT License. See the LICENSE file for details.
