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
      className='rounded-lg border px-8 py-2 text-lg font-medium shadow-lg transition duration-150 ease-in-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-sm'
    >
      {children}
    </button>
  );
}
