import Link from 'next/link';
import { buttonVariants } from './ui/button';
// import { Anchor } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountnav from './UserAccountnav';
import Image from 'next/image';
import logo from '../img/logo.png';
import ThemeToggler from '@/components/ThemeToggler';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" bg-gray-100 dark:bg-gray-950 dark:border-zinc-800 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          {/* <Anchor /> */}
          <Image
            src={logo}
            alt="MyDigiBits"
            width={40}
            className="transition-all duration-300 dark:invert dark:grayscale dark:brightness-200 dark:contrast-200"
          />
        </Link>
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <div className="flex gap-2">
            <ThemeToggler />
            <Link className={buttonVariants()} href="/sign-up">
              Get Started
            </Link>
            <Link className={buttonVariants()} href="/sign-in">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
