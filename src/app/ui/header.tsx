import Link from 'next/link';

export default function Header() {
  return (
    <header className='mx-auto grid w-full scroll-m-[20vh] overflow-x-clip p-5 lg:px-10 lg:px-10'>
      <Link href='/' className='flex items-center' passHref>
        Timer
      </Link>
    </header>
  );
}
