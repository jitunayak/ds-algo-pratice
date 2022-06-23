/**
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function rotateMatrix(matrix) {
	const m = matrix[0].length;
	const n = matrix.length;

	let finalResult = [];
	for (let i = 0; i < m; i++) {
		let sub = [];
		for (let j = 0; j < n; j++) {
			sub = [matrix[j][i], ...sub];
		}
		finalResult = [...finalResult, sub];
	}
	return finalResult;
}

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 11, 12],
];
console.log(rotateMatrix(matrix));
