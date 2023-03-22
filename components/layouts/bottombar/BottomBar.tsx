// import Link from 'next/link';

import AppIconCreator from './AppIconCreator';

const BottomBarLayout = () => {
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
      name: 'Todo',
      route: '/calendar',
    },
    {
      name: 'Weather',
      route: '/weather',
    },
    {
      name: 'Calculator',
      route: '/calculator',
    },
    {
      name: 'Clock',
      route: '/clock',
    },
    {
      name: 'Calories',
      route: '/calories',
    },
    {
      name: 'Sudoku',
      route: '/sudoku',
    },
  ];
  return (
    <footer className="flex w-screen justify-center text-xs flex-wrap">
      {apps.map((app) => {
        return (
          <AppIconCreator name={app.name} route={app.route} key={app.name} />
        );
      })}
    </footer>
  );
};

export default BottomBarLayout;
