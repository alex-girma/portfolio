import Head from 'next/head';
import { useEffect, useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import { ArrayProp, creatRandomArray } from '../utility/functions';
import SortHeader from './SortHeader';
import SortVisualizer from './SortVisualizer';

const Sort = () => {
  const [algo, setAlgo] = useState('Bubble');
  const [size, setSize] = useState(10);
  const [dataArray, setDataArray] = useState<ArrayProp[]>([]);

  useEffect(() => {
    setDataArray(creatRandomArray(size));
  }, [size]);
  return (
    <>
      <Head>
        <title>Visualize Sort Algorithms</title>
      </Head>
      <AppWindowWrapper>
        <div className=" px-4 pb-44 pt-4">
          <SortHeader
            algo={algo}
            setAlgo={setAlgo}
            size={size}
            setSize={setSize}
            dataArray={dataArray}
            setDataArray={setDataArray}
          />
          <div className=" rotatex180 mt-2 flex h-44 justify-center gap-1 sm:gap-2">
            {dataArray.map((element, index) => {
              return (
                <SortVisualizer
                  key={element.value + String(index)}
                  value={element.value}
                  selected={element.selected}
                  sorted={element.sorted}
                  translateY={element.translateY}
                  sement={element.sement}
                />
              );
            })}
          </div>
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default Sort;
