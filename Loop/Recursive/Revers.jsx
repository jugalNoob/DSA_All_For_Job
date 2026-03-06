function test1(x = 3) {
  if (x <= 0) {
    return x;
  }

  console.log(x);
  return test1(x - 1);
}

console.log(test1());
