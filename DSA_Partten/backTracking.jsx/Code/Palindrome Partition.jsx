✅ Code (Palindrome Partition)
function partition(s) {

    let result = [];

    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    function backtrack(start, path) {

        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {

            let substr = s.substring(start, end);

            if (!isPalindrome(substr)) continue;

            path.push(substr);

            backtrack(end, path);

            path.pop();
        }
    }

    backtrack(0, []);
    return result;
}

🔑 Pattern
Partition string
Validate each piece
Move start → end