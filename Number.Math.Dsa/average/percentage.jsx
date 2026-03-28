Gemini said
In your specific case, where a person gets
 60 marks out of 100, the "average"
  is usually referred to as the percentage.

The math formula for this is:


$$\text{Percentage (Average)} = \left( \frac{\text{Marks Obtained}}{\text{Total Marks}} \right) \times 100$$





Gemini said
In your specific case, where a person gets 60 marks out of 100, the "average" is usually referred to as the percentage.

The math formula for this is:

Percentage (Average)=( 
Total Marks
Marks Obtained
​
 )×100
JavaScript Code for This Scenario
You can write it like this:

JavaScript
const totalMarks = 100;
const obtainedMarks = 60;

// Calculate the percentage (average)
const average = (obtainedMarks / totalMarks) * 100;

console.log("The average is: " + average + "%"); 
// Output: The average is: 60%
What if there are multiple papers?
If you have multiple papers (for example, three papers of 100 marks each) and you want the overall average, you combine your previous array method with this one:

JavaScript
const marks = [60, 80, 70]; // Marks from 3 different 100-mark papers
const totalPapers = marks.length;
const maxPossiblePerPaper = 100;

// 1. Sum up all the marks
let totalObtained = 0;
for (let i = 0; i < marks.length; i++) {
    totalObtained += marks[i];
}

// 2. Calculate the total possible marks
const totalPossible = totalPapers * maxPossiblePerPaper;

// 3. Calculate the overall average percentage
const overallAverage = (totalObtained / totalPossible) * 100;

console.log("Total Average: " + overallAverage + "%");
// Output: Total Average: 70%
Key Difference:

Array Average: Used when you want to find the "middle value" of several numbers.

Percentage Average: Used when you want to see how much of a "whole" (like 100 marks) you achieved.