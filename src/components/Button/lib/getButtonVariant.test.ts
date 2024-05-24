import { describe, expect, it } from 'vitest';
import { getButtonVariant } from './getButtonVariant';

describe('getButtonVariant', () => {
  // Verify function returns correct class string for 'primary' variant
  it('should return the correct class string for primary variant', () => {
    const result = getButtonVariant('primary');
    expect(result).toBe(
      'relative inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out border-transparent text-white dark:text-gray-100 bg-blue-600 dark:blue-600 hover:bg-blue-800 dark:hover:bg-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:dark:bg-gray-800 disabled:dark:text-gray-500'
    );
  });

  // Verify function handles unexpected variant types gracefully
  it('should handle unexpected variant types gracefully', () => {
    const result = getButtonVariant('unknown' as any);
    expect(result).toBe('relative inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out');
  });
});
