/* Internal */
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

/* Helpers */
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

/* Validation Helpers */
export const required = value => value ? undefined : 'Required';

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const maxLength128 = maxLength(128);
export const maxLength24 = maxLength(24);
export const maxLength12 = maxLength(12);
