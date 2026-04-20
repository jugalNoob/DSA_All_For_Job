class MaxMath {

    static count = 0;

    constructor() {
        MaxMath.count++;
    }
}

new MaxMath();
new MaxMath();

console.log(MaxMath.count); // ✅ 2