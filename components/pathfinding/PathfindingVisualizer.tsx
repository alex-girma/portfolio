import { GridProps } from '../utility/functions';

const PathfindingVisualizer = ({ grid }: { grid: GridProps[][] }) => {
  return (
    <table>
      <tbody className="">
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                className={`h-7 w-7 border border-blue-300 ${
                  cell.isStart ? ` green` : ``
                } ${cell.isFinish ? ` red` : ``}`}
                key={`${rowIndex}-${cellIndex}`}
              >
                {cell.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PathfindingVisualizer;
