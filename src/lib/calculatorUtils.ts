/**
 * Safely parses a string input to a number for calculators.
 * Returns 0 if the input is empty or invalid.
 */
export const parseInput = (value: string): number => {
  if (value === '') return 0;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};

/**
 * Formats a number for display in an input field.
 * Prevents "0" from being displayed when the user clears the input.
 */
export const formatInputValue = (value: number): string | number => {
  return value === 0 ? '' : value;
};
