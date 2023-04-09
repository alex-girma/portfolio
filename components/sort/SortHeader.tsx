import { useState } from 'react';
import { addClass, creatRandomArray, removeClass } from '../utility/functions';

interface SortHeaderProps {
  algo: string;
  size: number;
  dataArray: number[];
  setAlgo: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setDataArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const SortHeader = ({
  algo,
  setAlgo,
  size,
  setSize,
  dataArray,
  setDataArray,
}: SortHeaderProps) => {
  const [isSorting, setIsSorting] = useState(false);

  const handleRandomData = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isSorting) return;
    e.preventDefault();
    setDataArray(creatRandomArray(size));
    for (let i = 0; i < dataArray.length; i++) {
      removeClass(dataArray[i], 'green');
    }
  };

  const handleSort = () => {
    if (isSorting) return;
    switch (algo) {
      case 'Bubble':
        bubbleSort();
        break;
      case 'Selection':
        selectionSort();
        break;
      case 'Insertion':
        insertionSort();
        break;
      default:
        break;
    }
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    let noSwap;
    for (let i = dataArray.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        addClass(dataArray[j], 'blue');
        addClass(dataArray[j + 1], 'blue');
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (dataArray[j] > dataArray[j + 1]) {
          let right = dataArray[j];
          dataArray[j] = dataArray[j + 1];
          dataArray[j + 1] = right;
          setDataArray([...dataArray]);
          await new Promise((resolve) => setTimeout(resolve, 500));
          noSwap = false;
        }
        removeClass(dataArray[j], 'blue');
        removeClass(dataArray[j + 1], 'blue');
      }
      addClass(dataArray[i - 1], 'green');
      if (noSwap) break;
    }
    for (let i = 0; i < dataArray.length; i++) {
      addClass(dataArray[i - 1], 'green');
    }
    setIsSorting(false);
  };

  const selectionSort = async () => {
    setIsSorting(true);

    for (var i = 0; i < dataArray.length; i++) {
      let smallest = i;
      addClass(dataArray[smallest], 'red');
      await new Promise((resolve) => setTimeout(resolve, 500));
      for (let j = i + 1; j < dataArray.length; j++) {
        addClass(dataArray[j], 'blue');
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (dataArray[j] < dataArray[smallest]) {
          removeClass(dataArray[smallest], 'red');
          smallest = j;
          addClass(dataArray[j], 'red');
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
        removeClass(dataArray[j], 'blue');
      }
      if (i !== smallest) {
        let temp = dataArray[i];
        dataArray[i] = dataArray[smallest];
        dataArray[smallest] = temp;
        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      removeClass(dataArray[i], 'red');
      addClass(dataArray[i], 'green');
    }
    setIsSorting(false);
  };

  const insertionSort = async () => {
    for (let i = 1; i < dataArray.length; i++) {
      let currentValue = dataArray[i];
      await new Promise((resolve) => setTimeout(resolve, 500));
      addClass(currentValue, 'red');
      addClass(currentValue, 'translateY');
      let j = i - 1;

      for (j; j >= 0 && dataArray[j] > currentValue; j--) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        dataArray[j + 1] = dataArray[j];
        dataArray[j] = currentValue;

        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      removeClass(currentValue, 'red');
      await new Promise((resolve) => setTimeout(resolve, 500));
      addClass(currentValue, 'green');
      addClass(dataArray[j], 'green');
      addClass(dataArray[i], 'green');
      removeClass(currentValue, 'translateY');
    }
  };

  return (
    <div className="flex gap-10 text-gray-900">
      <div>
        <span className="font-medium text-blue-600 underline">
          Select Algorithm:
        </span>
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="Bubble">Bubble Sort</option>
          <option value="Selection">Selection Sort</option>
          <option value="Insertion">Insertion Sort</option>
        </select>
      </div>
      <div>
        <span className="font-medium text-blue-600 underline">
          Select array size:
        </span>
        <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value="10">Small</option>
          <option value="15">Big</option>
        </select>
      </div>
      <button
        onClick={handleRandomData}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        random array
      </button>
      <button
        onClick={handleSort}
        className="rounded  bg-blue-400 px-4 py-1 duration-150 hover:bg-blue-500"
      >
        Visualize {algo} Sort
      </button>
    </div>
  );
};

export default SortHeader;