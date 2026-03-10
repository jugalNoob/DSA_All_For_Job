     function mergeInner(arr){

        let mind=Math.floor(arr.length/2)

        let left=mergeInner(arr.slice(0 , mind))

             let right=mergeInner(arr.slice( mind))
     }