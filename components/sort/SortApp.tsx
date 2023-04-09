import { useEffect, useState } from 'react';
import { creatRandomArray } from '../utility/functions';
import SortHeader from './SortHeader';
import SortVisualizer from './SortVisualizer';

const Sort = () => {
  const [algo, setAlgo] = useState('Bubble');
  const [size, setSize] = useState(10);
  const [dataArray, setDataArray] = useState<number[]>([]);
  useEffect(() => {
    setDataArray(creatRandomArray(size));
  }, [size]);
  return (
    <div className="mb-28">
      <SortHeader
        algo={algo}
        setAlgo={setAlgo}
        size={size}
        setSize={setSize}
        dataArray={dataArray}
        setDataArray={setDataArray}
      />
      <div className=" rotatex180 mt-10 flex h-60 justify-center gap-2">
        {dataArray.map((number) => {
          return <SortVisualizer key={number} number={number} />;
        })}
      </div>
    </div>
  );
};

export default Sort;
