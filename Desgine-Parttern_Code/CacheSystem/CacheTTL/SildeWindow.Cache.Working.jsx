1️⃣ What Your Cache Stores

When you call:

link.CacheSet('2', 'name:karan sharma')


This runs:

let expires = Date.now() + this.ttl


TTL = 2000 ms (2 seconds).

Example:

Current time = 10000
expires = 10000 + 2000
expires = 12000


So inside the Map:

Map {
 '2' → {
   value: 'name:karan sharma',
   expires: 12000
 }
}

2️⃣ First Access
console.log(link.CacheGet('2'))


Inside CacheGet:

let get = this.cache.get(key)


You get:

{
 value: 'name:karan sharma',
 expires: 12000
}


Check expiration:

if(Date.now() > get.expires)


Suppose:

Date.now() = 10010


Condition:

10010 > 12000 ❌


Not expired.

So return:

name:karan sharma

3️⃣ Sliding Expiration

Then you refresh TTL:

get.expires = Date.now + this.ttl


But here is the bug ⚠️

You forgot **()`.

Correct should be:

get.expires = Date.now() + this.ttl


Otherwise you are assigning a function reference, not a number.

4️⃣ After 1.5 Seconds

This runs:

setTimeout(()=> {
console.log(link.CacheGet('2'))
},1500)


Time:

1500 ms later


Check expiration again.

If sliding TTL works:

expires gets refreshed


So cache still valid.

Output:

name:karan sharma

5️⃣ After 3 Seconds
setTimeout(()=> {
console.log(link.CacheGet('2'))
},3000)


Now:

3 seconds passed


If sliding TTL refreshed earlier, it may still be valid.

Otherwise:

Date.now() > expires


Then:

this.cache.delete(key)


Output:

Cache expired
null

6️⃣ After 5 Seconds

Key already deleted.

So:

this.cache.get(key)


returns:

undefined


Your code will crash here because you didn't check for undefined.

You should add:

if(!get) return null

7️⃣ Correct Version
CacheGet(key){

    let get=this.cache.get(key)

    if(!get) return null

    if(Date.now() > get.expires){

        console.log("Cache expired")

        this.cache.delete(key)

        return null
    }

    // refresh TTL
    get.expires = Date.now() + this.ttl

    return get.value
}

8️⃣ Final Behavior

Example timeline:

0s   set cache
0s   first access → valid
1.5s second access → TTL refreshed
3s   still valid
5s   maybe expired depending on last access

9️⃣ Real System Name

This is called:

Sliding Expiration Cache


Used in:

• Redis sessions
• JWT refresh tokens
• API response caching
• Rate limiting systems

🔟 Interview Tip

Interviewers sometimes ask:

Implement TTL cache in JavaScript


Advanced version includes:

LRU + TTL


Used in Node.js high-performance APIs.