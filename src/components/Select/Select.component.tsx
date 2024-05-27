import React, { useEffect, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  className?: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

const CustomSelect: React.FC<SelectProps> = ({ options, className, onChange, label, placeholder = '...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectStyle = `inline-flex justify-between w-full min-w-[100px] rounded-md border border-slate-200 shadow-sm px-2 py-1.5 bg-white text-sm text-slate-600 dark:text-slate-300 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 ${className}`;

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      {label && <label className='block text-sm font-bold text-slate-600 dark:text-slate-300 mb-1.5'>{label}</label>}
      <div>
        <button type='button' className={selectStyle} onClick={() => setIsOpen(!isOpen)}>
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className='z-20 origin-top-right absolute right-0 mt-[1px] w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[300px] overflow-x-auto'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div className='py-1' role='none'>
            {options.map((option) => (
              <button
                key={option.value}
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
