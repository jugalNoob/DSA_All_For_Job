let data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],

  [[9 , 10 , 11]]
]


function flatten(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result)
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(data))
::::::::::::::::::::::::::::::::::::::-------------------?>>>>>>>



let data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]

let flat = []

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    flat.push(data[i][j])
  }
}

console.log(flat)



let flats = data.reduce((acc, curr) => {
  return acc.concat(curr)
}, [])

console.log(flats)