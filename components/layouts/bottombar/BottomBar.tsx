// import Link from 'next/link';

import AppIconCreator from './AppIconCreator';

const BottomBarLayout: React.FC = () => {
  const apps = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Calendar',
      route: '/calendar',
    },
    {
      name: 'Weather',
      route: '/weather',
    },
    {
      name: 'Clock',
      route: '/clock',
    },
  ];
  return (
    <footer className="flex justify-center text-xs pb-1">
      {apps.map((app) => {
        return (
          <AppIconCreator name={app.name} route={app.route} key={app.name} />
        );
      })}
    </footer>
  );
};

export default BottomBarLayout;
