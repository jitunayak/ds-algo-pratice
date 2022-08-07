const denominations = [1, 2, 5]
const amount = 11;

const dp = Array(denominations.length + 1).fill(amount + 1)


/**
 *
 * @param {number} amount
 * @param {number[]} deno
 */
function coinChange(amount, deno) {
    if (amount === 0) return 0;
    let ans = amount + 1;
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j <= deno.length; j++) {
            if (deno[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - deno[j]] + 1)
            }
        }
    }
    console.table(dp)
}

coinChange(amount, denominations)