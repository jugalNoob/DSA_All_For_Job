function test(x = 0) {
  if (x >= 3) {
    return x;
  }

  console.log(x);
  return test(x + 1);
}

console.log(test());
