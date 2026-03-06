let data = [];
let current = 0; // points to next free spot
let size = 0;    // current number of elements

function append(value) {
    data[current] = value;
    current++;
    size++;
}

function DeleteQuee() {
    if (size === 0) {
        console.log("Queue is empty");
        return;
    }

    // shift all elements left
    for (let i = 0; i < size - 1; i++) {
        data[i] = data[i + 1];
    }

    data[size - 1] = undefined; // clear last spot
    current--;                  // update next free spot
    size--;
}

function display() {
    if (size === 0) {
        console.log("Queue is empty");
        return;
    }

    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(data[i]);
    }
    console.log(result.join(" -> "));
}

// Testing
append(10);
append(20);
append(30);
append(40);

DeleteQuee(); // removes 10
DeleteQuee(); // removes 20

display();    // 30 -> 40
