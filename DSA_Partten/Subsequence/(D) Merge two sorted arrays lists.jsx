D) Merge two sorted arrays / lists

When merging two sorted sequences (subsequences) into one sorted array:

const a = [1,3,5];
const b = [2,4,6];
const merged = [];

let i=0, j=0;
while(i<a.length && j<b.length){
    if(a[i]<b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
}
while(i<a.length) merged.push(a[i++]);
while(j<b.length) merged.push(b[j++]);
console.log(merged); // [1,2,3,4,5,6]


✅ Use case: merge sorted subsequences