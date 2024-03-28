export function Sum(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  return a + b;
}
