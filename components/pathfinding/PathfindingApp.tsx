import Head from 'next/head';
import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { GridProps } from '../utility/functions';
import PathfindingHeader from './PathfindingHeader';
import PathfindingVisualizer from './PathfindingVisualizer';

const PathfindingApp = () => {
  const [grid, setGrid] = useState<GridProps[][]>([]);
  const [startPosition, setStartPosition] = useState([6, 5]);
  const [endPosition, setEndPosition] = useState([6, 24]);
  const [wall, setWall] = useState<number[][]>([]);

  return (
    <>
      <Head>
        <title>Visualize Pathfinding Algorithms</title>
      </Head>
      <AppWindowWrapper>
        <div className=" px-4 pb-10 pt-6">
          <PathfindingHeader
            grid={grid}
            setGrid={setGrid}
            startPosition={startPosition}
            endPosition={endPosition}
            wall={wall}
            setWall={setWall}
            setEndPosition={setEndPosition}
            setStartPosition={setStartPosition}
          />
          <div className="flex justify-center pt-10">
            <PathfindingVisualizer
              grid={grid}
              wall={wall}
              setWall={setWall}
              setGrid={setGrid}
              setEndPosition={setEndPosition}
              setStartPosition={setStartPosition}
            />
          </div>
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default PathfindingApp;
