import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <header className='flex justify-center p-10 md:justify-start'>
      <Link href='/' passHref>
        <Logo />
        <span className='sr-only'>Countdown timer app homepage</span>
      </Link>
    </header>
  );
}
