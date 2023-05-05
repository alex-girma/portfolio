import { useState } from 'react';
import { GridProps } from '../utility/functions';

interface HeaderProps {
  grid: GridProps[][];
  setGrid: React.Dispatch<React.SetStateAction<GridProps[][]>>;
}

const PathfindingHeader = ({ grid, setGrid }: HeaderProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [algo, setAlgo] = useState('BFS');
  const [speed, setSpeed] = useState(40);
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
    if (isSearching) return;
    switch (algo) {
      case 'BFS':
        BFS();
        break;
      case 'DFS':
        DFS();
        break;
      default:
        break;
    }
  };

  const BFS = async () => {
    setIsSearching(true);
    let start = [1, 1];
    const ROW = grid.length;
    const COL = grid[0].length;
    const queueToExplore: number[][] = [start];
    const parents = Array.from({ length: ROW }, () => Array(COL).fill(null));

    while (queueToExplore.length) {
      const [currRow, currCol] = queueToExplore.shift()!;
      if (grid[currRow][currCol].isFinish) break;
      grid[currRow][currCol].isVisited = true;
      const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];

      for (const [dx, dy] of directions) {
        const nextRow = currRow + dx;
        const nextCol = currCol + dy;

        if (
          nextRow < 0 ||
          nextCol < 0 ||
          nextRow >= ROW ||
          nextCol >= COL ||
          grid[nextRow][nextCol].isVisited ||
          grid[nextRow][nextCol].isInQueue
          // grid[nextRow][nextCol] === 0 // for walles
        ) {
          continue;
        }

        grid[nextRow][nextCol].isInQueue = true;
        parents[nextRow][nextCol] = [currRow, currCol];
        queueToExplore.push([nextRow, nextCol]);
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setGrid([...grid]);

      // if (grid[start[0]][start[1]].isFinish) return;
      // grid[start[0]][start[1]].isVisited = true;
      // grid[start[0]][start[1]].isStart = true;
      // start = queue.shift()!;
      // topNode = [start[0] + -1, start[1]];
      // rightNode = [start[0], start[1] + 1];
      // bottomNode = [start[0] + 1, start[1]];
      // leftNode = [start[0], start[1] + -1];
      // if (
      //   grid[topNode[0]] &&
      //   grid[topNode[0]][topNode[1]] &&
      //   !grid[topNode[0]][topNode[1]].isInQueue &&
      //   !grid[topNode[0]][topNode[1]].isVisited
      // ) {
      //   grid[topNode[0]][topNode[1]].isInQueue = true;
      //   queue.push(topNode);
      // }
      // if (
      //   grid[rightNode[0]] &&
      //   grid[rightNode[0]][rightNode[1]] &&
      //   !grid[rightNode[0]][rightNode[1]].isInQueue &&
      //   !grid[rightNode[0]][rightNode[1]].isVisited
      // ) {
      //   grid[rightNode[0]][rightNode[1]].isVisited = true;
      //   queue.push(rightNode);
      // }
      // if (
      //   grid[bottomNode[0]] &&
      //   grid[bottomNode[0]][bottomNode[1]] &&
      //   !grid[bottomNode[0]][bottomNode[1]].isInQueue &&
      //   !grid[bottomNode[0]][bottomNode[1]].isVisited
      // ) {
      //   grid[bottomNode[0]][bottomNode[1]].isInQueue = true;
      //   queue.push(bottomNode);
      // }
      // if (
      //   grid[leftNode[0]] &&
      //   grid[leftNode[0]][leftNode[1]] &&
      //   !grid[leftNode[0]][leftNode[1]].isInQueue &&
      //   !grid[leftNode[0]][leftNode[1]].isVisited
      // ) {
      //   grid[leftNode[0]][leftNode[1]].isInQueue = true;
      //   queue.push(leftNode);
      // }
      // await new Promise((resolve) => setTimeout(resolve, speed));
      // setGrid([...grid]);
    }
    const shortestPath = [];
    let currNode = [8, 13];
    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = parents[currNode[0]][currNode[1]];
    }

    shortestPath.reverse();
    console.log(shortestPath);
    setIsSearching(false);
  };
  const DFS = () => {
    setIsSearching(true);
    console.log('DFS');
    setIsSearching(false);
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
          <option value="60">Slow</option>
          <option value="40">Fast</option>
          <option value="20">Very Fast</option>
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
