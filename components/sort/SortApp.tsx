import Head from 'next/head';
import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
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
    <>
      <Head>
        <title>Visualize Sort Algorithms</title>
      </Head>
      <AppWindowWrapper>
        <div className=" px-4 pb-64 pt-6">
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
      </AppWindowWrapper>
    </>
  );
};

export default Sort;
