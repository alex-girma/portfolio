import Link from 'next/link';
import { useRouter } from 'next/router';

interface AppWindowWrapperProps {
  children: React.ReactNode;
}

const AppWindowWrapper = ({ children }: AppWindowWrapperProps) => {
  const route = useRouter();
  return (
    <div>
      <div className="flex justify-between rounded-t bg-orange-800 pl-3 text-white ">
        <div className="flex items-center text-sm">
          {route.pathname.slice(1).charAt(0).toUpperCase() +
            route.pathname.slice(2)}
        </div>
        <div>
          <Link href={'/'}>
            <button className="h-7 px-4 text-xs duration-300 hover:bg-orange-500">
              ⚊
            </button>
          </Link>
          <Link href={'/'}>
            <button className="h-7 rounded-tr px-4 text-xs duration-300 hover:bg-red-600 ">
              ✕
            </button>
          </Link>
        </div>
      </div>
      <div className="rounded shadow">{children}</div>
    </div>
  );
};

export default AppWindowWrapper;
