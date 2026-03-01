6️⃣ Cartesian Product for Multiple Arrays (Advanced)

If you have:

[[1,2], ["a","b"], ["X","Y"]]


We need:

[1,"a","X"]
[1,"a","Y"]
[1,"b","X"]
[1,"b","Y"]
[2,"a","X"]
...

Recursive Version
function cartesian(arrays) {
    return arrays.reduce((acc, curr) => {
        const result = [];

        for (let a of acc) {
            for (let b of curr) {
                result.push([...a, b]);
            }
        }

        return result;
    }, [[]]);
}

console.log(cartesian([[1,2], ["a","b"], ["X","Y"]]));
