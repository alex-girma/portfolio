import { useState } from 'react';
import { GridProps } from '../utility/functions';

const PathfindingVisualizer = ({
  grid,
  wall,
  setWall,
  setStartPosition,
  setEndPosition,
  setGrid,
}: {
  grid: GridProps[][];
  wall: number[][];
  setWall: React.Dispatch<React.SetStateAction<number[][]>>;
  setStartPosition: React.Dispatch<React.SetStateAction<number[]>>;
  setEndPosition: React.Dispatch<React.SetStateAction<number[]>>;
  setGrid: React.Dispatch<React.SetStateAction<GridProps[][]>>;
}) => {
  const [isDraggingStart, setIsDraggingStart] = useState(false);
  const [isDraggingFinish, setIsDraggingFinish] = useState(false);
  const [isDraggingWall, setIsDraggingWall] = useState(false);

  const handleMouseDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const position = target.id.split(',');
    const pos0 = parseInt(position[0]);
    const pos1 = parseInt(position[1]);
    if (grid[pos0][pos1].isStart) setIsDraggingStart(true);
    if (grid[pos0][pos1].isFinish) setIsDraggingFinish(true);
    if (!grid[pos0][pos1].isFinish && !grid[pos0][pos1].isStart)
      setIsDraggingWall(true);
  };

  const handleMouseMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingStart) {
      const target = event.target as HTMLDivElement;
      const position = target.id.split(',');
      const pos0 = parseInt(position[0]);
      const pos1 = parseInt(position[1]);
      setStartPosition([pos0, pos1]);
      setGrid([...grid]);
    }
    if (isDraggingFinish) {
      const target = event.target as HTMLDivElement;
      const position = target.id.split(',');
      const pos0 = parseInt(position[0]);
      const pos1 = parseInt(position[1]);
      setEndPosition([pos0, pos1]);
      setGrid([...grid]);
    }
    if (isDraggingWall) {
      const target = event.target as HTMLDivElement;
      const position = target.id.split(',');
      const pos0 = parseInt(position[0]);
      const pos1 = parseInt(position[1]);
      setWall([...wall, [pos0, pos1]]);
      setGrid([...grid]);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingStart(false);
    setIsDraggingFinish(false);
    setIsDraggingWall(false);
  };

  return (
    <table>
      <tbody
        onPointerDown={handleMouseDown}
        onPointerOver={handleMouseMove}
        onPointerUp={handleMouseUp}
      >
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                id={`${rowIndex},${cellIndex}`}
                className={`h-7 w-7 border border-blue-300 ${
                  cell.isFinish ? ` isFinish` : ``
                } ${cell.isVisited ? ` isVisited` : ``}  ${
                  cell.isStart ? ` isStart` : ``
                } ${cell.isPath ? ` isPath` : ``} ${
                  cell.isWall ? ` isWall` : ``
                }`}
                key={`${rowIndex}-${cellIndex}`}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PathfindingVisualizer;
