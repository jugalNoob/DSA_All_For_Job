3️⃣ 🧠 Decorrelated Jitter (Advanced – AWS Style)

Used in high-scale distributed systems.

Formula:
sleep = min(max, random(base, previousSleep * 3))

✅ Code:
function decorrelatedJitter(base, previous, max) {

    const newDelay = Math.min(
        max,
        Math.random() * (previous * 3 - base) + base
    );

    return Math.floor(newDelay);
}


Usage:

let sleep = 2000;

for (let i = 0; i < 10; i++) {
    sleep = decorrelatedJitter(2000, sleep, 10000);
    console.log(sleep);
}