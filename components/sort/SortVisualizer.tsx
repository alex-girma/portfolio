const SortVisualizer = ({ number }: { number: number }) => {
  return (
    <div
      className="rotatex0 flex w-8 items-end justify-center bg-gray-400 text-gray-900 "
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
