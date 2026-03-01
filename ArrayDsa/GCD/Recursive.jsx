🚀 Bonus: Recursive Version
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}


Same logic, cleaner.