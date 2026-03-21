
| i | nums[i] | leftSum | totalSum - leftSum - nums[i] | Pivot? |
| - | ------- | ------- | ---------------------------- | ------ |
| 0 | 1       | 0       | 28-0-1=27                    | ❌      |
| 1 | 7       | 1       | 28-1-7=20                      | ❌      |
| 2 | 3       | 8       | 28-8-3=17                    | ❌      |
| 3 | 6       | 11      | 28-11-6=11                   | ✅      |



✅ Output: 3

Explanation:

Total sum = 1+7+3+6+5+6 = 28

Check index 0: left = 0, right = 28 - 0 - 1 = 27 → not equal

Check index 1: left = 1, right = 28 - 1 - 7 = 20 → not equal

Check index 2: left = 1+7 = 8, right = 28 - 8 - 3 = 17 → not equal

Check index 3: left = 1+7+3 = 11, right = 28 - 11 - 6 = 11 ✅ match!