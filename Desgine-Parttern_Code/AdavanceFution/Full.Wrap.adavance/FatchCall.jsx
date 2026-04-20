function wrap(url, option = {}) {
    return async function () {
        try {
            let result = await fetch(url, option)

            if (!result.ok) {
                throw new Error("API failed")
            }

            let resp = await result.json()
            return resp

        } catch (error) {
            console.error("Error:", error.message)
            return null
        }
    }
}

let callapi = wrap('https://jsonplaceholder.typicode.com/posts')

// handle promise
callapi().then(data => {
    console.log(data)
})
