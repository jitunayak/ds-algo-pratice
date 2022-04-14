function isPalindrome(input) {
	const len = String(input).length;

	if (input < 0) {
		// negative numbers are not palindromes
		return false;
	}
	const x = Array.from(String(input)); // convert to char array

	for (let i = 0; i < len / 2; i++) {
		if (x[i] !== x[len - 1 - i]) {
			// compare first and last char
			return false;
		}
	}
	return true;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
