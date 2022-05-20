import {useRef} from 'react';

export function useDebounce(fn: Function, delay: number): Function {
  const timeoutRef = useRef<any>();

  function debouncedFn(...args: any) {
    clearTimeout(timeoutRef.current as never);

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
