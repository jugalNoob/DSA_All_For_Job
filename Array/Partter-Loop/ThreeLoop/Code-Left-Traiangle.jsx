🧩 Your Code (unchanged)
let n = 5;

for (let i = 1; i <= n; i++) {
  let show = '';

  // spaces
  for (let j = 1; j <= n - i; j++) {
    show += '';
  }

  // stars
  for (let b = 1; b <= i; b++) {
    show += '*';
  }

  console.log(show);
}


// ----Reversr Code  --------------Exaplin --------------->>


let n = 5;

for (let i = n; i >= 1; i--) {
  let show = '';

  // spaces
  for (let s = 0; s < n - i; s++) {
    show += ' ';
  }

  // stars
  for (let b = 1; b <= i; b++) {
    show += '*';
  }

  console.log(show);
}
