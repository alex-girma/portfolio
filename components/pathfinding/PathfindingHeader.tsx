import { useEffect, useState } from 'react';
import { GridProps, generateGrid, generateWall } from '../utility/functions';

interface HeaderProps {
  startPosition: number[];
  endPosition: number[];
  wall: number[][];
  grid: GridProps[][];
  setStartPosition: React.Dispatch<React.SetStateAction<number[]>>;
  setEndPosition: React.Dispatch<React.SetStateAction<number[]>>;
  setWall: React.Dispatch<React.SetStateAction<number[][]>>;
  setGrid: React.Dispatch<React.SetStateAction<GridProps[][]>>;
}

const PathfindingHeader = ({
  grid,
  setGrid,
  startPosition,
  endPosition,
  setEndPosition,
  setStartPosition,
  wall,
  setWall,
}: HeaderProps) => {
  const start = [6, 5];
  const end = [6, 24];
  const [isSearching, setIsSearching] = useState(false);
  const [algo, setAlgo] = useState('BFS');
  const [speed, setSpeed] = useState(20);

  useEffect(() => {
    setGrid(generateGrid(startPosition, endPosition, wall));
  }, [startPosition, endPosition, wall, setGrid]);

  const handleRandomMaze = (): void => {
    setWall(generateWall());
    setGrid(generateGrid(startPosition, endPosition, wall));
  };

  // clear the board leaving starting position, finishing position and walls the same
  const handleClearPath = (): void => {
    setGrid(generateGrid(startPosition, endPosition, wall));
  };

  const handleClearWall = (): void => {
    setWall([]);
    setGrid(generateGrid(startPosition, endPosition, wall));
  };

  // reset the whole board to default with fixed starting and finish position and removes walls
  const handleResetBoard = (): void => {
    setStartPosition(start);
    setEndPosition(end);
    setWall([]);
    setGrid(generateGrid(start, end, wall));
  };

  const handleAlgo = (): void => {
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
    let start = startPosition; // change to isStart
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
          grid[nextRow][nextCol].isInQueue ||
          grid[nextRow][nextCol].isWall // for walles
        ) {
          continue;
        }

        grid[nextRow][nextCol].isInQueue = true;
        parents[nextRow][nextCol] = [currRow, currCol];
        queueToExplore.push([nextRow, nextCol]);
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setGrid([...grid]);
    }
    const shortestPath = [];
    let currNode = endPosition;
    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = parents[currNode[0]][currNode[1]];
    }
    shortestPath.reverse();

    for (let i = 0; i < shortestPath.length; i++) {
      if (shortestPath.length < 2) break;
      grid[shortestPath[i][0]][shortestPath[i][1]].isVisited = false;
      grid[shortestPath[i][0]][shortestPath[i][1]].isPath = true;
      await new Promise((resolve) => setTimeout(resolve, speed));

      setGrid([...grid]);
    }
    setIsSearching(false);
  };
  const DFS = async () => {
    setIsSearching(true);

    const ROW = grid.length;
    const COL = grid[0].length;
    const start = startPosition;
    const stack = [start];
    const parents = Array.from({ length: ROW }, () => Array(COL).fill(null));

    while (stack.length > 0) {
      const [currRow, currCol] = stack.pop()!;
      if (grid[currRow][currCol].isVisited) {
        continue;
      }
      grid[currRow][currCol].isVisited = true;
      await new Promise((resolve) => setTimeout(resolve, speed));
      setGrid([...grid]);
      if (grid[currRow][currCol].isFinish) {
        setIsSearching(false);
        break;
      }

      // up right left down
      const directions = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
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
          grid[nextRow][nextCol].isInQueue ||
          grid[nextRow][nextCol].isWall
        ) {
          continue;
        }

        stack.push([nextRow, nextCol]);
        parents[nextRow][nextCol] = [currRow, currCol];
      }
    }
    const shortestPath = [];
    let currNode = endPosition; // change to isFinish
    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = parents[currNode[0]][currNode[1]];
    }
    shortestPath.reverse();

    for (let i = 0; i < shortestPath.length; i++) {
      if (shortestPath.length < 2) break;
      grid[shortestPath[i][0]][shortestPath[i][1]].isVisited = false;
      grid[shortestPath[i][0]][shortestPath[i][1]].isPath = true;
      await new Promise((resolve) => setTimeout(resolve, speed));

      setGrid([...grid]);
    }
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
          <option value="50">Slow</option>
          <option value="20">Fast</option>
          <option value="10">Very Fast</option>
        </select>
      </div>
      <button
        onClick={handleRandomMaze}
        disabled={isSearching}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        generate random Maze
      </button>
      <button
        onClick={handleClearPath}
        disabled={isSearching}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Clear Path
      </button>
      <button
        onClick={handleClearWall}
        disabled={isSearching}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Clear Wall
      </button>
      <button
        onClick={handleResetBoard}
        disabled={isSearching}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Clear Board
      </button>
      <button
        onClick={handleAlgo}
        disabled={isSearching}
        className="rounded  bg-green-400 px-4 py-1 duration-150 hover:bg-green-500"
      >
        Visualize {algo}
      </button>
    </div>
  );
};

export default PathfindingHeader;
