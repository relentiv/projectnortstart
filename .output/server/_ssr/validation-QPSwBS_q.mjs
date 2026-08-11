import { s as stringType } from "../_libs/zod.mjs";
const emailSchema = stringType().trim().email("Enter a valid email address");
stringType().regex(/^#[0-9a-fA-F]{6}$/, "Must be a 6-digit hex color like #F97316");
stringType().trim().url("Enter a valid URL");
stringType().trim().regex(/^\+?[0-9 ()-]{7,20}$/, "Enter a valid phone number");
function passwordStrength(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (pw.length >= 12 && /[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(4, score);
}
stringType().min(8, "Min 8 characters").regex(/[A-Z]/, "Needs an uppercase letter").regex(/[0-9]/, "Needs a number");
export {
  emailSchema as e,
  passwordStrength as p
};
