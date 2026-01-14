::::::: Check Array is Sort :::::::::::

let data = [10, 20, 30, 40, 50 ];
let isSorted = true;

for (let i = 1; i < data.length; i++) {
    if (data[i] < data[i - 1]) {
        isSorted = false;
        break;
    }
}

console.log("Array is sorted:", isSorted); // Output: true



/// -----------------> Sort Function 

let yu=[15 ,5 , 3 , 2 , 1]

console.log(yu.sort())

console.log(yu.sort((a, b) => a - b))  // [1, 2, 3, 5, 10]

// console.log(yu.sort((a, b) => b - a))  // [5, 3, 2, 1]





Sort Bubble |||||||||||||||||||||||||||||||||||||||||||||||
let data=[9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1];
for(let i=0; i<data.length; i++){

    for(let j=0; j<data.length; j++){

        if(data[j]>data[j+1]){

            let temp=data[j];

            data[j]=data[j+1]

            data[j+1]=temp
        }
    }
}
console.log(data)


||SleepSort ||||||||||||||||||||||||||||
let data = [6, 5, 4 , 1 , 1];

const sleepSort = () => {
    data.forEach((num) => {
        setTimeout(() => {
            console.log(num);
        }, num ); // multiplying by 1000 to convert seconds to milliseconds
    });
};

sleepSort();


|||||||||||||--------------------------------------Inserting Sort ----------->


let data=[9 , 6 , 5 , 1 , 2]
for(let i=0; i<data.length; i++){
   let current=data[i]
   let j=i-1
   while(j>=0 && data[j] > current){
      data[j+1] = data[j]
      // j=j-1
      j--
   }
   data[j+1]=current
}
console.log(data)






||||||||||||Selection Sort ------------------------------------------------
   let items = [20, 12, 53, 3,56,78,0,5,89,34];
      function selectionSort(data) {
        let minId;
        for (let i = 0; i < data.length; i++) {
          minId = i;
          for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minId]) {
              minId = j;
            }
          }
          let temp = data[minId];
          data[minId] = data[i];
          data[i] = temp;
        }
      }

      selectionSort(items);
      console.warn(items)



::::::::::::: Merge Sirt Important >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function mergesort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergesort(leftArr), mergesort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr]
  return resultArr
}

const arr = [8, 20, -2, 4, -6]
console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]





||||||||qucik sort ||||||||||||||||| --------------------------------------------
function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]



function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [8, 20, -2, 4, -6]
quickSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]