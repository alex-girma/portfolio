import { useState } from 'react';

const PathfindingHeader = () => {
  const [algo, setAlgo] = useState('BFS');
  const [speed, setSpeed] = useState(500);
  const handleMaze = (): void => {
    throw new Error('Function not implemented.');
  };

  const handleAddWall = (): void => {
    throw new Error('Function not implemented.');
  };

  const handleResetBoard = (): void => {
    throw new Error('Function not implemented.');
  };

  const handleResetWall = (): void => {
    throw new Error('Function not implemented.');
  };

  const handleAlgo = (): void => {
    throw new Error('Function not implemented.');
  };

  return (
    <div className="flex flex-col gap-2 text-xxs text-gray-900 sm:flex-row sm:gap-3">
      <div>
        <span className="font-medium text-blue-600 underline">Algorithm:</span>
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="BFS">Breadth-first Search</option>
          <option value="DFS">Depth-first Search</option>
        </select>
      </div>

      <div>
        <span className="font-medium text-blue-600 underline">Speed:</span>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        >
          <option value="1000">Slow</option>
          <option value="500">Fast</option>
          <option value="250">Very Fast</option>
        </select>
      </div>
      <button
        onClick={handleMaze}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        generate random Maze
      </button>
      <button
        onClick={handleAddWall}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Add Wall
      </button>
      <button
        onClick={handleResetBoard}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Reset Board
      </button>
      <button
        onClick={handleResetWall}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Reset Wall
      </button>
      <button
        onClick={handleAlgo}
        className="rounded  bg-green-400 px-4 py-1 duration-150 hover:bg-green-500"
      >
        Visualize {algo}
      </button>
    </div>
  );
};

export default PathfindingHeader;
