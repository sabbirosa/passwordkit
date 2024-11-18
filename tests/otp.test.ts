import { createOtp, validateOtp } from "../src/otp";

test("Should generate and validate OTP correctly", () => {
  const key = "user1";
  const otp = createOtp(key, 60); // OTP valid for 60 seconds

  expect(otp).toHaveLength(6);
  expect(validateOtp(key, otp)).toBe(true); // OTP should be valid

  // Validate OTP again (should fail since it's already used)
  expect(validateOtp(key, otp)).toBe(false);
});

test("Should expire OTP after the expiry time", () => {
  const key = "user2";
  const otp = createOtp(key, 1); // OTP valid for 1 second

  expect(validateOtp(key, otp)).toBe(true);
  jest.advanceTimersByTime(2000); // Fast-forward 2 seconds
  expect(validateOtp(key, otp)).toBe(false); // OTP should have expired
});
