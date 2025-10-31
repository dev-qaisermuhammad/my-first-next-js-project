import { authOptions } from '@/lib/auth';
import Sidebar from '@/components/Sidebar';
import { getServerSession } from 'next-auth';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <div className="flex w-full min-h-screen">
        <Sidebar />
        {/* <h2 className="text-2xl text-black dark:text-white">
          Admin page - welcome back{' '}
          {session?.user.username || session?.user.name}
        </h2> */}
        <div className="flex-1 w-full pt-[4rem] ml-64">
          {/* 🎯 FIX 1: pt-[4rem] (or pt-16) to clear the fixed Navbar. */}
          {/* 🎯 FIX 2: ml-64 to clear the w-64 fixed Sidebar. */}
          <main className="p-8">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome back, {session?.user.username || session?.user.name}
            </p>
            {/* Add your dashboard widgets here */}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 w-full">
      <h2 className="text-2xl text-2xl text-black dark:text-white">
        Please login to see this admin page
      </h2>
    </div>
  );
};

export default page;
