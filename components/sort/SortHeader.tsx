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
      case 'Insertion':
        insertionSort();
        break;
      case 'Merge':
        mergeSort();
        break;
      case 'Quick':
        quickSort();
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

  const insertionSort = async () => {
    setIsSorting(true);
    for (let i = 1; i < dataArray.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, speed));
      let currentValue = dataArray[i].value;
      let j = i - 1;
      dataArray[i].selected = true;
      dataArray[i].translateY = true;
      setDataArray([...dataArray]);
      await new Promise((resolve) => setTimeout(resolve, speed));
      for (j; j >= 0 && dataArray[j].value > currentValue; j--) {
        const temp = dataArray[j + 1];
        dataArray[j + 1] = dataArray[j];
        dataArray[j] = temp;
        setDataArray([...dataArray]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      dataArray[j + 1].selected = false;
      dataArray[j + 1].translateY = false;
      setDataArray([...dataArray]);
    }

    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].sorted = true;
    }
    setDataArray([...dataArray]);
    setIsSorting(false);
  };

  const mergeSort = async () => {
    setIsSorting(true);
    const merge = async (left: ArrayProp[], right: ArrayProp[]) => {
      await new Promise((resolve) => setTimeout(resolve, speed));
      const leftRight = [...left, ...right];
      const leftRightDeep = JSON.parse(JSON.stringify(leftRight));
      let arr: ArrayProp[] = [];

      while (left.length && right.length) {
        if (left[0].value < right[0].value) {
          arr.push(left.shift()!);
        } else {
          arr.push(right.shift()!);
        }
      }

      let temp = [...arr, ...left, ...right];
      // to deep lone the sorted array for comparation without modifying the original array
      let tempDeep = JSON.parse(JSON.stringify(temp));
      // to get the starting index of the provided array in the dataArray
      let i = dataArray.findIndex((x) => x.value === leftRightDeep[0].value);
      let k = temp.length + i;
      let j = 0;

      for (let i = 0; i < leftRight.length; i++) {
        dataArray[
          dataArray.findIndex((x) => x.value === leftRightDeep[i].value)
        ].selected = true;
        dataArray[
          dataArray.findIndex((x) => x.value === leftRightDeep[i].value)
        ].translateY = true;
      }
      setDataArray([...dataArray]);

      for (i; i < k; i++) {
        await new Promise((resolve) => setTimeout(resolve, speed));
        let index = dataArray.findIndex((x) => x.value === tempDeep[j].value);
        let tempValue = dataArray[i].value;
        dataArray[i].value = tempDeep[j].value;
        dataArray[index].value = tempValue;
        dataArray[i].translateY = false;
        dataArray[i].selected = false;
        dataArray[i].sorted = true;
        setDataArray([...dataArray]);
        j++;
      }
      return tempDeep;
    };
    // @ts-ignore
    const sort = async (array: ArrayProp[]) => {
      const half = Math.ceil(array.length / 2);

      if (array.length < 2) {
        return array;
      }

      const left = array.splice(0, half);
      return merge(await sort(left), await sort(array));
    };

    const temp = await sort([...dataArray]);
    for (let i = 0; i < temp.length; i++) {
      temp[i].sorted = true;
    }
    setIsSorting(false);

    setDataArray([...temp]);
  };
  const quickSort = async () => {
    const pivot = (arr, start = 0, end = arr.length + 1) => {
      let pivot = arr[start];
      let swapIndex = start;
      for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
          swapIndex++;
          let temp = arr[swapIndex];
          arr[swapIndex] = arr[i];
          arr[i] = temp;
        }
      }
      let test = arr[start];
      arr[start] = arr[swapIndex];
      arr[swapIndex] = test;
      return swapIndex;
    };

    const sort = (arr, left = 0, right = arr.length - 1) => {
      if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        sort(arr, left, pivotIndex - 1);
        //right
        sort(arr, pivotIndex + 1, right);
      }
      console.log(arr);
      return arr;
    };

    sort([4, 8, 2, 1, 5, 7, 6, 3]);
  };
  // const quickSort = async () => {
  //   const pivot = (arr, start = 0, end = arr.length + 1) => {
  //     let pivot = arr[start];
  //     let swapIndex = start;
  //     for (let i = start + 1; i < arr.length; i++) {
  //       if (pivot > arr[i]) {
  //         swapIndex++;
  //         let temp = arr[swapIndex];
  //         arr[swapIndex] = arr[i];
  //         arr[i] = temp;
  //       }
  //     }
  //     let test = arr[start];
  //     arr[start] = arr[swapIndex];
  //     arr[swapIndex] = test;
  //     return swapIndex;
  //   };

  //   const sort = (arr, left = 0, right = arr.length - 1) => {
  //     if (left < right) {
  //       let pivotIndex = pivot(arr, left, right);
  //       //left
  //       sort(arr, left, pivotIndex - 1);
  //       //right
  //       sort(arr, pivotIndex + 1, right);
  //     }
  //     console.log(arr);
  //     return arr;
  //   };

  //   sort([4, 8, 2, 1, 5, 7, 6, 3]);
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
          <option value="500">Fast</option>
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
