import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up timeout to update debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up timeout on value change or component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

// Usage:
// const FormCheckout = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

//     // This effect will only run when the debounced value changes
//     useEffect(() => {
//       if (debouncedSearchTerm) {
//         // Make API call here
//       }
//     }, [debouncedSearchTerm]);

//     return (
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     );
//   };
