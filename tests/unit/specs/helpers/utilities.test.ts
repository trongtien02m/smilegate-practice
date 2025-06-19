import { describe, it, expect } from 'vitest';
import { generateLoremp } from '@/helpers/utilities';

describe('generateLoremp', () => {
  it('returns a string', () => {
    const result = generateLoremp();
    expect(typeof result).toBe('string');
  });

  it('starts with a capital letter and ends with a period', () => {
    const result = generateLoremp();
    expect(result.charAt(0)).toMatch(/[A-Z]/);
    expect(result.endsWith('.')).toBe(true);
  });

  it('generates at least minWords words', () => {
    const min = 5;
    const result = generateLoremp(min, min);
    // Remove period and split by space
    const words = result.slice(0, -1).split(' ');
    expect(words.length).toBe(min);
  });

  it('generates no more than maxWords words', () => {
    const min = 3;
    const max = 7;
    const result = generateLoremp(min, max);
    const words = result.slice(0, -1).split(' ');
    expect(words.length).toBeGreaterThanOrEqual(min);
    expect(words.length).toBeLessThanOrEqual(max);
  });
});
