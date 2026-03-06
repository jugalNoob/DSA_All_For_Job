console.log('jugal')


let count = 1;
let clicks = [];   // ✅ store all clicks

function Clickcount() {
    clicks.push({
        count: count,
        time: Date.now()
    });

    count++;
    console.log("Clicks:", clicks);
}

function CleanCount() {
    const FIVE_MINUTES = 5 * 60 * 1000;
    const now = Date.now();

    clicks = clicks.filter(click => now - click.time < FIVE_MINUTES);

    console.log("After Clean:", clicks);
}


Clickcount();
Clickcount();
Clickcount();
Clickcount();
Clickcount();

Clickcount();
Clickcount();
Clickcount();

setTimeout(() => {
    CleanCount(); 
}, 2000);