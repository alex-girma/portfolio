const SortVisualizer = ({ number }: { number: number }) => {
  return (
    <div
      className="rotatex0 flex w-4 items-end justify-center bg-gray-400 text-xxxs text-gray-900 sm:w-6 sm:text-xs"
      id={String(number)}
      style={{
        height: `${number * 4 + 20}px`,
      }}
    >
      {number}
    </div>
  );
};

export default SortVisualizer;
