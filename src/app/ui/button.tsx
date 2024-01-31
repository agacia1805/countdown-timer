import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  name: string;
};

export default function Button({ name, onClick, children }: ButtonProps) {
  return (
    <button
      type='button'
      name={name}
      onClick={onClick}
      className='rounded border px-8 py-2'
    >
      {children}
    </button>
  );
}
