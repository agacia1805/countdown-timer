type InputProps = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
  remainingTime?: number;
};

export default function Input({
  handleOnChange,
  remainingTime,
  name,
}: InputProps) {
  const formattedTime = String(remainingTime || 0).padStart(2, '0');

  return (
    <input
      name={name}
      value={formattedTime}
      onChange={handleOnChange}
      className='timeInput appearance-none border-none bg-transparent text-center font-semibold leading-tight text-yellow-300 focus:outline-none'
    />
  );
}
