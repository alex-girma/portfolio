import { ArrayProp } from '../utility/functions';

const SortVisualizer = ({ value, selected, sorted }: ArrayProp) => {
  return (
    <div
      className={`rotatex0 flex w-4 items-end justify-center bg-gray-400 text-xxxs text-gray-900 sm:w-6 sm:text-xs 
        ${selected ? ' red' : ''} ${sorted ? ' green' : ''}`}
      id={String(value)}
      style={{
        height: `${value * 3 + 14}px`,
      }}
    >
      {value}
    </div>
  );
};

export default SortVisualizer;
