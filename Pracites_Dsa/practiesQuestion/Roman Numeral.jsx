function numberToRoman(num) {
    if (num < 1 || num > 3999) {
        return "Number out of range (1-3999 only)";
    }

    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900,  symbol: "CM" },
        { value: 500,  symbol: "D" },
        { value: 400,  symbol: "CD" },
        { value: 100,  symbol: "C" },
        { value: 90,   symbol: "XC" },
        { value: 50,   symbol: "L" },
        { value: 40,   symbol: "XL" },
        { value: 10,   symbol: "X" },
        { value: 9,    symbol: "IX" },
        { value: 5,    symbol: "V" },
        { value: 4,    symbol: "IV" },
        { value: 1,    symbol: "I" }
    ];

    let result = "";

    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }

    return result;
}





Iteration 1:
i = 0

s[i]     = "M"
s[i + 1] = "C"

curr = map["M"] = 1000
next = map["C"] = 100

Iteration 2:
i = 1

s[i]     = "C"
s[i + 1] = "M"

curr = 100
next = 1000


👉 This is where subtraction happens




Examples:

IV = 5 - 1 = 4
IX = 10 - 1 = 9
CM = 1000 - 100 = 900
✅ Optimal Approach (Right → Left scan)

👉 If current < next → subtract
👉 Else → add

💻 Code (Clean + Interview Ready)
function romanToInt(s) {
    let map = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]];
        let next = map[s[i + 1]];

        if (curr < next) {
            total -= curr; // subtract
        } else {
            total += curr; // add
        }
    }

    return total;
}

console.log(romanToInt("MCMXCIV")); // 1994



| i | char | curr | next      | operation | total |
| - | ---- | ---- | --------- | --------- | ----- |
| 0 | M    | 1000 | 100       | +1000     | 1000  |
| 1 | C    | 100  | 1000      | -100      | 900   |
| 2 | M    | 1000 | 10        | +1000     | 1900  |
| 3 | X    | 10   | 100       | -10       | 1890  |
| 4 | C    | 100  | 1         | +100      | 1990  |
| 5 | I    | 1    | 5         | -1        | 1989  |
| 6 | V    | 5    | undefined | +5        | 1994  |



So "III" becomes [1, 1, 1].

Step 2: Loop Logic
let start = map[data[i]];      // current numeral
let end   = map[data[i+1]];    // next numeral


Rule:

If start < end, subtract start (this handles numerals like IV = 4)
Otherwise, add start
Step 3: Example "III"
data = "III"
Values: [1, 1, 1]

Loop iterations:

i = 0:
start = 1, end = 1
start < end? No → total += 1 → total = 1
i = 1:
start = 1, end = 1
start < end? No → total += 1 → total = 2
i = 2:
start = 1, end = undefined (map[undefined] = undefined)
start < end? No → total += 1 → total = 3

✅ Output = 3

Step 4: Example "MCMXCIV" (1994)
data = "MCMXCIV"
Values: [1000, 100, 1000, 10, 100, 1, 5]

Loop logic:

M=1000, C=100 → 1000 < 100? No → total = 1000
C=100, M=1000 → 100 < 1000 → subtract → total = 1000 - 100 = 900
M=1000, X=10 → 1000 < 10? No → total = 900 + 1000 = 1900
X=10, C=100 → 10 < 100 → subtract → total = 1900 - 10 = 1890
C=100, I=1 → 100 < 1? No → total = 1890 + 100 = 1990
I=1, V=5 → 1 < 5 → subtract → total = 1990 - 1 = 1989
V=5, undefined → add → total = 1989 + 5 = 1994

✅ Final result = 1994

Step 5: Key Idea
Roman numerals usually add values, e.g., III = 1 + 1 + 1 = 3
But when a smaller numeral comes before a larger one, we subtract instead, e.g., IV = 5 - 1 = 4

Your code correctly implements this subtractive rule using:

if(start < end){
    total -= start
} else {
    total += start
}


I notice your comment says // 1994 for "III" — that’s wrong. "III" should be 3, and "MCMXCIV" would be 1994.