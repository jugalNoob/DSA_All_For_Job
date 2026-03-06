
function FixSlide(data , windowsize){


    let max=0

    let current=0


    for(let i=0; i<windowsize; i++){

        max+=data[i]
    }

    current=max


    for(let i=windowsize; i<data.length; i++){

        current=current-data[i-windowsize]+data[i]
        max=Math.max(max , current)
    }

return max
}

const arr = [4, 2, 1, 7, 8, 1, 2,];
const windowSize = 3;

console.log(FixSlide(arr , windowSize))


| Window  | Calculation  | currentSum | maxSum |
| ------- | ------------ | ---------- | ------ |
| [2,1,7] | `7 - 4 + 7`  | 10         | 10     |
| [1,7,8] | `10 - 2 + 8` | 16         | 16     |
| [7,8,1] | `16 - 1 + 1` | 16         | 16     |
| [8,1,2] | `16 - 7 + 2` | 11         | 16     |


Detailed iterations:
i=3 (new element: arr[3]=7):
Leaving: arr[3-3]=arr[0]=4
currentSum = 7 - 4 + 7 = 10
Window now: [2, 1, 7] (sum=10)
maxSum = Math.max(7, 10) = 10


i=4 (new element: arr[4]=8):
Leaving: arr[4-3]=arr[1]=2
currentSum = 10 - 2 + 8 = 16
Window now: [1, 7, 8] (sum=16)
maxSum = Math.max(10, 16) = 16
i=5 (new element: arr[5]=1):
Leaving: arr[5-3]=arr[2]=1
currentSum = 16 - 1 + 1 = 16
Window now: [7, 8, 1] (sum=16)
maxSum = Math.max(16, 16) = 16
i=6 (new element: arr[6]=2):
Leaving: arr[6-3]=arr[3]=7
currentSum = 16 - 7 + 2 = 11
Window now: [8, 1, 2] (sum=11)
maxSum = Math.max(16, 11) = 16

