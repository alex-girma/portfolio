import Link from 'next/link';

interface AppIconCreatorProps {
  name: string;
  route: string;
  key: string;
}

const AppIconCreator = ({ name, route }: AppIconCreatorProps) => {
  const firstHalf = name.substring(0, name.length / 2);
  const secondHalf = name.substring(name.length / 2);

  return (
    <Link href={route} className="appcreatorlink">
      <p className="border-b-2 border-white">{firstHalf}</p>
      <p>{secondHalf}</p>
    </Link>
  );
};

export default AppIconCreator;
