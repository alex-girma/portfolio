import Head from 'next/head';
import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { GridProps } from '../utility/functions';
import PathfindingHeader from './PathfindingHeader';
import PathfindingVisualizer from './PathfindingVisualizer';

const PathfindingApp = () => {
  const [grid, setGrid] = useState<GridProps[][]>([]);

  return (
    <>
      <Head>
        <title>Visualize Pathfinding Algorithms</title>
      </Head>
      <AppWindowWrapper>
        <div className=" px-4 pb-10 pt-6">
          <PathfindingHeader grid={grid} setGrid={setGrid} />
          <div className="flex justify-center pt-10">
            <PathfindingVisualizer grid={grid} />
          </div>
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default PathfindingApp;
