import { useEffect } from 'react';

const useCurrentValue = (value: string | undefined, setCurrentValue: React.Dispatch<React.SetStateAction<string>>) => {
  useEffect(() => {
    setCurrentValue(value ?? '');
  }, [value, setCurrentValue]);
};

export default useCurrentValue;
