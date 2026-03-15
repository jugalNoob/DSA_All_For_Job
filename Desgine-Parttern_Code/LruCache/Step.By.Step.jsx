2️⃣ Key Idea
Map keeps order of insertion


Example:

Map = {1:A , 2:B , 3:C}


Order:

1 → 2 → 3


Here:

1 = Least Recently Used
3 = Most Recently Used

3️⃣ Step-by-Step Example

Create cache

let cache = new LRUCache(3)


Capacity

3

Step 1
cache.put(1,10)


Map

{1:10}

Step 2
cache.put(2,20)


Map

{1:10 , 2:20}

Step 3
cache.put(3,30)


Map

{1:10 , 2:20 , 3:30}


Cache is full.

Step 4 (Access key)
cache.get(1)


When accessed:

1 becomes most recently used


Process:

delete 1
set 1 again


Map

{2:20 , 3:30 , 1:10}


Now

2 = least recently used

Step 5 (Insert new element)
cache.put(4,40)


Cache full → remove LRU element

LRU

2


Remove it.

Map becomes

{3:30 , 1:10 , 4:40}

Visualization

Before removal

2 → 3 → 1
↑
Least recently used


After insertion

3 → 1 → 4

4️⃣ Important Line Explained
Find Least Recently Used
let firstKey = this.map.keys().next().value


Explanation:

map.keys() → iterator
next() → first key
value → actual key


Example

Map = {2:20 , 3:30 , 1:10}

firstKey = 2