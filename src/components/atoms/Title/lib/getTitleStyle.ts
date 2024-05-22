import { TitleVariants } from '..';

export const getTitleStyle = (variant: TitleVariants) => {
  const titleStyles = {
    base: 'font-bold text-slate-700 dark:text-slate-200 line-clamp-1 mb-3',
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    h5: 'text-base',
    h6: 'text-sm',
  };

  return titleStyles.base + ' ' + (titleStyles[variant] || titleStyles.h1);
};
