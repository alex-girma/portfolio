import Link from 'next/link';
import { useRouter } from 'next/router';

interface AppWindowWrapperProps {
  children: React.ReactNode;
}

const AppWindowWrapper = ({ children }: AppWindowWrapperProps) => {
  const route = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <div>{route.pathname.slice(1)}</div>
        <div>
          <Link href={'/'}>
            <button className="h-7 px-4 text-xs hover:bg-gray-100">⚊</button>
          </Link>
          <Link href={'/'}>
            <button className="h-7 px-4 text-xs hover:bg-red-600">✕</button>
          </Link>
        </div>
      </div>
      <div className="rounded shadow">{children}</div>
    </div>
  );
};

export default AppWindowWrapper;
