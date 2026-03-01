function Moste(data){
    let start = 0;
    let end = data.length - 1;
    let max = 0;

    while(start < end){
        let height = Math.min(data[start], data[end]);
        let width = end - start;
        let area = height * width;
        max = Math.max(max, area);
        if(data[start] < data[end]){
            start++;
        } else {
            end--;
        }
    }
    return max;
}
const arr = [1,8,6,2,5,4,8,3,7];
console.log(Moste(arr)); // 49




🔥 Key Formula
Area = min(height[left], height[right]) × (right - left)


Why?

Water height = smaller wall

Width = distance between them

✅ Example Array
[1,8,6,2,5,4,8,3,7]


Start:

left = 0 (height 1)
right = 8 (height 7)

🧠 Step-by-Step Dry Run
🔹 Step 1
left = 0 → 1
right = 8 → 7


Height = min(1,7) = 1
Width = 8 - 0 = 8

Area = 1 × 8 = 8

Max = 8

Since 1 < 7
Move left++ (because smaller wall limits water)

🔹 Step 2
left = 1 → 8
right = 8 → 7


Height = min(8,7) = 7
Width = 8 - 1 = 7

Area = 7 × 7 = 49

Max = 49 ✅

Now 8 > 7
Move right--

🔹 Step 3
left = 1 → 8
right = 7 → 3


Height = 3
Width = 6

Area = 18
Max still 49

Move right--

It continues until pointers meet.

Final answer = 49

🔥 Why Move Smaller Pointer?

Very important concept 👇

Water is limited by smaller height.

If:

left height < right height


Moving right won't increase area
Because height is still limited by left.

So only hope to increase area is:
👉 Move the smaller one

This is the greedy idea.

🎯 Visual Understanding

Imagine two walls:

|        |
|        |      ← Water fills only up to smaller wall
|________|


If one wall is short, water can't go higher.

So we try to find a taller wall by moving the smaller pointer.

🚀 Why This Is Fast?

Brute force:
Check every pair → O(n²)

Two pointer:
Scan once from both sides → O(n)

Much faster.

🔥 One-Line Logic

Start with maximum width.
Move the smaller height inward to try increasing area.

If you want, I can next:

🔥 Show animation-style explanation
🔥 Explain why greedy is mathematically correct
🔥 Show trapping rain water next (similar pattern)