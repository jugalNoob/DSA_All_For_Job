
let data = [6, 5, 4 , 1 , 1];

const sleepSort = () => {
    data.forEach((num) => {
        setTimeout(() => {
            console.log(num);
        }, num ); // multiplying by 1000 to convert seconds to milliseconds
    });
};

sleepSort();







// const sleepSortDesc = () => {
//     const max = Math.max(...data) + 1;
//     data.forEach(num => {
//         setTimeout(() => console.log(num), (max - num));
//     });
// };