Ah! Now I understand — you want to implement your own version of the
 built-in Promise in JavaScript from scratch, to see how it works 
 internally. Let’s do it step by step.

This is a simplified version, enough to understand the mechanics.

🔹 Custom Promise Implementation
function MyPromise(executor) {
    let onResolve;
    let onReject;
    let fulfilled = false;
    let rejected = false;
    let value;
    let reason;

    function resolve(val) {
        fulfilled = true;
        value = val;
        if (typeof onResolve === "function") {
            onResolve(value);
        }
    }

    function reject(err) {
        rejected = true;
        reason = err;
        if (typeof onReject === "function") {
            onReject(reason);
        }
    }

    this.then = function(callback) {
        onResolve = callback;
        if (fulfilled) {
            onResolve(value);
        }
        return this; // allow chaining
    };

    this.catch = function(callback) {
        onReject = callback;
        if (rejected) {
            onReject(reason);
        }
        return this; // allow chaining
    };

    // Execute the executor function
    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

🔹 Example Usage
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Custom Promise Resolved!");
        } else {
            reject("Custom Promise Rejected!");
        }
    }, 2000);
});

promise
    .then((result) => console.log(result))   // Output after 2 sec: Custom Promise Resolved!
    .catch((err) => console.log(err));

🔹 How It Works

Executor Function

executor(resolve, reject) runs immediately.

Internal State

fulfilled and rejected track status.

value stores resolved value, reason stores rejection reason.

then and catch

Callbacks are stored in onResolve / onReject.

If promise already resolved/rejected → immediately call callback.

Chaining

Returns this for simple chaining.

🔹 Notes

This is simplified and doesn’t handle async chaining properly, like real promises do.

Real JS Promises handle:

Returning new promises in then

Multiple then handlers

Proper microtask queue with queueMicrotask