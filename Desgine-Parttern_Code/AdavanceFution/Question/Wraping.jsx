function wrap(fn){

    console.log('before')

    return function (...args){

        let result=fn(...args)
console.log('after')
        return result
    }
}


function Main(){

    console.log('test function')
}

let test=wrap(Main)

test()



2️⃣ Step-by-step explanation
Step 1: Call wrap(Main)
let test = wrap(Main);


You are passing the function Main as an argument to wrap.

Inside wrap:

console.log('before');


Prints:

before


Then wrap returns a new function:

return function (...args) { ... }


This new function is stored in test.

So test is not Main itself, it’s a wrapped version of Main.

Step 2: Call the wrapped function test()
test();


Now the function returned by wrap runs. Inside this function:

let result = fn(...args);


fn is the original Main function.

So it calls Main() → prints:

test function


After that:

console.log('after');


Prints:

after


Finally, the wrapper function returns result (the value returned by Main).

3️⃣ Output when you run the code
before
test function
after

4️⃣ Simple English Explanation

wrap(fn) → takes a function and returns a new
 function that “wraps” it.

When you call the wrapped function, it:

Can do something before calling the 
original function (console.log('before')
 already ran when wrap was called)

Calls the original function (Main)

Can do something after calling it (console.log('after'))

This is also called a higher-order function: a function that takes another function and returns a new one.

5️⃣ Why use this in real world?

Logging: Print “before” and “after” every function call.

Error handling: Wrap a function to catch errors automatically.

Retry logic: Wrap a function with retry/backoff logic.

Metrics: Measure how long a function takes.

✅ Key concept: wrap lets you add behavior around a function without changing the original function.