import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button.component';

describe('Button component', () => {
  const baseClass =
    'relative inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out border-transparent text-white dark:text-gray-100 bg-blue-600 dark:blue-600 hover:bg-blue-800 dark:hover:bg-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:dark:bg-gray-800 disabled:dark:text-gray-500 ';

  // Verify that the button renders correctly with default props
  it('should render with default props', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toHaveProperty('className', baseClass);
  });

  // Check that the button renders with a custom className appended to its class list
  it('should append custom className', () => {
    const { getByRole } = render(<Button className='extra-class' />);
    expect(getByRole('button')).toHaveProperty('className', baseClass + 'extra-class');
  });

  // Check button behavior when an invalid variant is provided
  it('should handle invalid variant gracefully', () => {
    const { getByRole } = render(<Button variant={undefined} />);
    expect(getByRole('button')).toHaveProperty('className', baseClass);
  });

  // Verify that the button handles null or undefined children gracefully
  it('should handle null children without crashing', () => {
    const { getByRole } = render(<Button>{null}</Button>);
    expect(getByRole('button')).exist;
  });

  // Ensure that the button does not break when no className is provided
  it('should render without className prop', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).exist;
  });

  // Verify that the button is disabled when the disabled prop is set to true
  it('should render disabled button', () => {
    const { getByRole } = render(<Button disabled />);
    expect(getByRole('button')).toHaveProperty('disabled', true);
  });

  // Verify that the button is loading when the loading prop is set to true
  it('should render loading button', () => {
    const { getByRole } = render(<Button isLoading />);
    expect(getByRole('button').textContent).toBe('CargandoCargando');
  });

  // Verify that the button is loading when the loadingText prop is set
  it('should render loading button', () => {
    const { getByRole } = render(<Button isLoading loadingText='Guardando' />);
    expect(getByRole('button').textContent).toBe('GuardandoGuardando');
  });
});
