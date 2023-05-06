const PathfindingInfo = () => {
  return (
    <div className="text-xs text-gray-900">
      Drag and drop
      <span className="isStart"></span> or
      <span className="isFinish ml-3 inline-block h-3 w-3"></span> to change
      position. Drag on empty cells to create walls
    </div>
  );
};
export default PathfindingInfo;
