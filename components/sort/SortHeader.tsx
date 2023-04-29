import { useState } from 'react';
import { ArrayProp, creatRandomArray } from '../utility/functions';

interface SortHeaderProps {
  algo: string;
  size: number;
  dataArray: ArrayProp[];
  setAlgo: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setDataArray: React.Dispatch<React.SetStateAction<ArrayProp[]>>;
}

const SortHeader = ({
  algo,
  setAlgo,
  size,
  setSize,
  dataArray,
  setDataArray,
}: SortHeaderProps) => {
  const [speed, setSpeed] = useState(500);
  const [isSorting, setIsSorting] = useState(false);

  const handleRandomData = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isSorting) return;
    e.preventDefault();
    setDataArray(creatRandomArray(size));
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
      // case 'Insertion':
      //   insertionSort();
      //   break;
      // case 'Merge':
      //   mergeSort();
      //   break;
      // case 'Quick':
      //   quickSort();
      //   break;
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
        dataArray[j].selected = true;
        dataArray[j + 1].selected = true;
        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        if (dataArray[j].value > dataArray[j + 1].value) {
          let right = dataArray[j].value;
          dataArray[j].value = dataArray[j + 1].value;
          dataArray[j + 1].value = right;
          setDataArray([...dataArray]);
          await new Promise((resolve) => setTimeout(resolve, speed));
          noSwap = false;
        }
        dataArray[j].selected = false;
        dataArray[j + 1].selected = false;
      }
      dataArray[i - 1].sorted = true;
      if (noSwap) break;
    }
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].selected = false;
      dataArray[i].sorted = true;
    }
    setDataArray([...dataArray]);
    setIsSorting(false);
  };

  const selectionSort = async () => {
    setIsSorting(true);

    for (var i = 0; i < dataArray.length; i++) {
      let smallest = i;
      dataArray[smallest].selected = true;
      setDataArray([...dataArray]);
      await new Promise((resolve) => setTimeout(resolve, speed));
      for (let j = i + 1; j < dataArray.length; j++) {
        dataArray[j].sorted = true;
        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        if (dataArray[j].value < dataArray[smallest].value) {
          dataArray[smallest].selected = false;
          smallest = j;
          dataArray[j].selected = true;
          setDataArray([...dataArray]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
        dataArray[j].sorted = false;
        setDataArray([...dataArray]);
      }
      if (i !== smallest) {
        let temp = dataArray[i].value;
        dataArray[i].value = dataArray[smallest].value;
        dataArray[smallest].value = temp;
        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      dataArray[smallest].selected = false;
      dataArray[i].sorted = true;
      setDataArray([...dataArray]);
    }
    setIsSorting(false);
  };

  // const insertionSort = async () => {
  //   setIsSorting(true);
  //   for (let i = 1; i < dataArray.length; i++) {
  //     await new Promise((resolve) => setTimeout(resolve, speed));
  //     let currentValue = dataArray[i];
  //     addClass(currentValue, 'red');
  //     addClass(currentValue, 'translateY');
  //     let j = i - 1;
  //     // await new Promise((resolve) => setTimeout(resolve, speed));

  //     for (j; j >= 0 && dataArray[j] > currentValue; j--) {
  //       dataArray[j + 1] = dataArray[j];
  //       dataArray[j] = currentValue;
  //       await new Promise((resolve) => setTimeout(resolve, speed));

  //       setDataArray([...dataArray]);
  //       addClass(currentValue, 'translateY');
  //       // await new Promise((resolve) => setTimeout(resolve, speed));
  //     }
  //     await new Promise((resolve) => setTimeout(resolve, speed));
  //     addClass(currentValue, 'green');
  //     addClass(dataArray[j], 'green');
  //     addClass(dataArray[i], 'green');
  //     removeClass(currentValue, 'red');
  //     removeClass(currentValue, 'translateY');
  //   }
  //   setIsSorting(false);
  // };

  // const mergeSort = async () => {
  //   const merge = async (left: number[], right: number[]) => {
  //     await new Promise((resolve) => setTimeout(resolve, speed));

  //     const test = [...left, ...right];

  //     for (let i = 0; i < test.length; i++) {
  //       addClass(test[i], 'green');
  //       addClass(test[i], 'translateY');
  //     }
  //     await new Promise((resolve) => setTimeout(resolve, speed));
  //     let arr = [];

  //     let counter = dataArray.indexOf(test[0]);
  //     while (left.length && right.length) {
  //       if (left[0] < right[0]) {
  //         dataArray[dataArray.indexOf(left[0])] = dataArray[counter];
  //         dataArray[counter] = left[0];
  //         await new Promise((resolve) => setTimeout(resolve, speed));
  //         setDataArray([...dataArray]);
  //         await new Promise((resolve) => setTimeout(resolve, speed));
  //         removeClass(dataArray[counter], 'translateY');
  //         await new Promise((resolve) => setTimeout(resolve, speed));
  //         removeClass(dataArray[dataArray.indexOf(left[0])], 'translateY');

  //         arr.push(left.shift());
  //         // removeClass(dataArray[dataArray.indexOf(left[0])], 'translateY');
  //       } else {
  //         dataArray[dataArray.indexOf(right[0])] = dataArray[counter];
  //         dataArray[counter] = right[0];
  //         await new Promise((resolve) => setTimeout(resolve, speed));
  //         setDataArray([...dataArray]);
  //         await new Promise((resolve) => setTimeout(resolve, speed));
  //         removeClass(dataArray[counter], 'translateY');
  //         await new Promise((resolve) => setTimeout(resolve, speed));
  //         removeClass(dataArray[dataArray.indexOf(left[0])], 'translateY');

  //         arr.push(right.shift());
  //       }
  //       // await new Promise((resolve) => setTimeout(resolve, speed));
  //       counter++;
  //     }

  //     const temp = [...left, ...right];

  //     while (temp.length) {
  //       dataArray[dataArray.indexOf(temp[0])] = dataArray[counter];
  //       dataArray[counter] = temp[0];
  //       await new Promise((resolve) => setTimeout(resolve, speed));
  //       setDataArray([...dataArray]);
  //       await new Promise((resolve) => setTimeout(resolve, speed));
  //       removeClass(dataArray[counter], 'translateY');
  //       await new Promise((resolve) => setTimeout(resolve, speed));
  //       removeClass(dataArray[dataArray.indexOf(left[0])], 'translateY');

  //       temp.shift();
  //       counter++;
  //     }

  //     for (let i = 0; i < test.length; i++) {
  //       removeClass(test[i], 'green');
  //     }

  //     return [...arr, ...left, ...right];
  //   };
  //   // @ts-ignore
  //   const sort = async (array: number[]) => {
  //     const half = Math.ceil(array.length / 2);

  //     if (array.length < 2) {
  //       return array;
  //     }

  //     const left = array.splice(0, half);
  //     return merge(await sort(left), await sort(array));
  //   };
  //   console.log(dataArray);
  //   setDataArray(await sort([...dataArray]));
  //   // console.log('coming soon...');
  // };
  // const quickSort = () => {
  //   console.log('Coming soon...');
  // };

  return (
    <div className="flex flex-col gap-2 text-xxs text-gray-900 sm:flex-row sm:gap-10">
      <div>
        <span className="font-medium text-blue-600 underline">Algorithm:</span>
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="Bubble">Bubble Sort</option>
          <option value="Selection">Selection Sort</option>
          <option value="Insertion">Insertion Sort</option>
          <option value="Merge">Merge Sort</option>
          <option value="Quick">Quick Sort</option>
        </select>
      </div>
      <div>
        <span className="font-medium text-blue-600 underline">Size:</span>
        <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value="10">Small</option>
          <option value="15">Big</option>
        </select>
      </div>
      <div>
        <span className="font-medium text-blue-600 underline">Speed:</span>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        >
          <option value="1000">Slow</option>
          <option value="700">Fast</option>
          <option value="250">Very Fast</option>
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
