import Link from 'next/link';

interface AppIconCreatorProps {
  name: string;
  route: string;
  key: string;
}

const AppIconCreator: React.FC<AppIconCreatorProps> = ({ name, route }) => {
  const firstHalf = name.substring(0, name.length / 2);
  const secondHalf = name.substring(name.length / 2);

  return (
    <Link
      href={route}
      className="px-3 grow-0 shrink-0 basis-1/24 border-x-2 text-white bg-orange-500 hover:bg-red-500 duration-150 rounded-md"
    >
      <p className="border-b-2 border-white">{firstHalf}</p>
      <p className="border-t-0 border-white">{secondHalf}</p>
    </Link>
  );
};

export default AppIconCreator;
