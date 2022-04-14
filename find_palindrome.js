function isPalindrome(input) {
  const len = String(input).length;

  if (y < 0) {
    return false;
  }
  const x = Array.from(String(input));
  for (let i = 0; i < len / 2; i++) {
    if (x[i] !== x[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121)); // true
