2️⃣ Maximum Number of Activities

Problem:
Select maximum activities without overlapping.

Example

start = [1,3,0,5,8,5]
end   = [2,4,6,7,9,9]

Code
function maxActivity(start,end){

    let activities = start.map((s,i)=>[s,end[i]])

    activities.sort((a,b)=>a[1]-b[1])

    let count=1
    let lastEnd=activities[0][1]

    for(let i=1;i<activities.length;i++){

        if(activities[i][0] >= lastEnd){
            count++
            lastEnd=activities[i][1]
        }
    }

    return count
}
