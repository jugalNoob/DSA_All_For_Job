5️⃣ Minimum Platforms (Train Problem)

Problem:
Find minimum platforms required.

Code
function minPlatforms(arr,dep){

    arr.sort()
    dep.sort()

    let i=0
    let j=0
    let platform=0
    let max=0

    while(i<arr.length){

        if(arr[i] <= dep[j]){
            platform++
            i++
        }else{
            platform--
            j++
        }

        max=Math.max(max,platform)
    }

    return max
}
