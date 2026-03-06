2️⃣ 🚀 Equal Jitter

Less aggressive randomness.

Formula:
delay = min(base * 2^attempt, max)
return delay/2 + random(0, delay/2)

✅ Code:
function equalJitter(base, attempt, max) {

    const expDelay = Math.min(base * Math.pow(2, attempt), max);

    const half = expDelay / 2;

    return Math.floor(half + Math.random() * half);
}

🧠 Behavior:

If delay = 8000

Final result:

4000 → 8000


So it never retries too early.

More stable than full jitter.