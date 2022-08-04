/**
 * A bag has a capacity and a list of items. All the items has corresponding weight and value. You need to find the maximum profit you can get from the items in the bag.
 *
 * @param {number} capacity - The capacity of the bag.
 * @param {Array} items - The items in the bag.
 * @constructor
 *
 */

// Given
const capacity = 10;
const weights = [1, 3, 4, 6];
const values = [20, 30, 10, 50];

// Expected output is: weight 3 + 6 = 9, value 4 + 5 = 9

let maximumProfit = 0;

let dp = Array(weights.length + 1).fill(0).map((i) => Array(capacity + 1).fill(0))

for (let i = 1; i < weights.length + 1; i++) {
	for (let j = 1; j < capacity + 1; j++) {
		const currentWeight = weights[i - 1];
		const currentValue = values[i - 1];

		if (currentWeight > j) {
			dp[i][j] = dp[i - 1][j]
		}
		else {
			let remainingCapacity = j - currentWeight;
			dp[i][j] = Math.max(dp[i - 1][remainingCapacity] + currentValue, dp[i - 1][j]);
			// dp[i][j] = dp[i - 1][j];
		}
	}
}

console.table(dp)


/** OUTPUT
 * ┌─────────┬───┬────┬────┬────┬────┬────┬────┬────┬────┬────┬─────┐
│ (index) │ 0 │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │ 7  │ 8  │ 9  │ 10  │
├─────────┼───┼────┼────┼────┼────┼────┼────┼────┼────┼────┼─────┤
│    0    │ 0 │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │  0  │
│    1    │ 0 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20  │
│    2    │ 0 │ 20 │ 20 │ 30 │ 50 │ 50 │ 50 │ 50 │ 50 │ 50 │ 50  │
│    3    │ 0 │ 20 │ 20 │ 30 │ 50 │ 50 │ 50 │ 50 │ 60 │ 60 │ 60  │
│    4    │ 0 │ 20 │ 20 │ 30 │ 50 │ 50 │ 50 │ 70 │ 70 │ 80 │ 100 │
└─────────┴───┴────┴────┴────┴────┴────┴────┴────┴────┴────┴─────┘
 */