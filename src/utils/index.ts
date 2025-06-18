// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<A extends any[]>(
  fn: (...args: A) => void,
  delay: number
): (...args: A) => void {
  let timer: NodeJS.Timeout;
  return (...args: A) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function chunkArray<T>(array: T[], chunkSize: number = 3): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
