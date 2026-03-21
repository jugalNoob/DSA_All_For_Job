5️⃣ Minimum Platforms (Train Problem)

Problem:
Find minimum platforms required.

Code
function minPlatforms(arr, dep) {

    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let platform = 0;
    let max = 0;

    while (i < arr.length && j < dep.length) {

        if (arr[i] <= dep[j]) {
            platform++;
            i++;
        } else {
            platform--;
            j++;
        }

        max = Math.max(max, platform);
    }

    return max;
}

arr = [900, 940, 950, 1100, 1500, 1800]
dep = [910, 1200, 1120, 1130, 1900, 2000]


console.log(minPlatforms(arr , dep))