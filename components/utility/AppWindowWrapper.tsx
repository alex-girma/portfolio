import Link from 'next/link';
import { useRouter } from 'next/router';

interface AppWindowWrapperProps {
  children: React.ReactNode;
}

const AppWindowWrapper: React.FC<AppWindowWrapperProps> = ({ children }) => {
  const route = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <div>{route.pathname.slice(1)}</div>
        <div>
          <Link href={'/'}>
            <button className="px-4 text-xs h-7 hover:bg-gray-100">⚊</button>
          </Link>
          <button className="px-4 text-xs h-7 hover:bg-gray-100">☐</button>
          <Link href={'/'}>
            <button className="px-4 text-xs h-7 hover:bg-red-600">✕</button>
          </Link>
        </div>
      </div>
      <div className="shadow rounded">{children}</div>
    </div>
  );
};

export default AppWindowWrapper;
