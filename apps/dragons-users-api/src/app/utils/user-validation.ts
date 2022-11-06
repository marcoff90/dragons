import { object, string } from 'zod';
import { UserI } from '@dragons/api-interfaces';

const userSchema = object({
  password: string()
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    )
    .min(8, 'Must be at least 8 characters in length'),
  passwordConfirmation: string(),
  email: string().email('Not a valid email'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
});

export const validateUserInput = (user: UserI) => {
  try {
    userSchema.parse(user);
  } catch (e) {
    const errors: string[] = [];
    e.errors.forEach((error) => errors.push(error.message));
    throw new Error(errors.join(', '));
  }
};
