import React from 'react';

type ButtonTagProps = React.ComponentProps<'button'>;

export const Button: React.FC<ButtonTagProps> = ({ children, className }) => {
  const classes = ' py-3 px-6 rounded-full font-bold';
  return <button className={className + classes}>{children}</button>;
};
