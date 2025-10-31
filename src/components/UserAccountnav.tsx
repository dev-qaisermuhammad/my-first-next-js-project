'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { useState } from 'react';
// import { Spinner } from './ui/spinner';
import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';

const UserAccountnav = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const sOut = async () => {
  //   try {
  //     setIsLoading(true);
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //     await signOut({
  //       redirect: true,
  //       callbackUrl: `${window.location.origin}/sign-in`,
  //     });
  //   } catch (err) {
  //     setIsLoading(false);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/admin">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/admin">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                // disabled={isLoading}
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/sign-in`,
                  })
                }
                // variant="destructive"
                // onClick={sOut}
              >
                {/* {isLoading && <Spinner />} */}
                <LogOut />
                Sign Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserAccountnav;
