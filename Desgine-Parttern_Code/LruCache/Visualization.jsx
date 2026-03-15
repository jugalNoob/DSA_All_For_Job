7️⃣ Visualization of Cache Flow

Cache size = 3

put(1)
put(2)
put(3)

Cache
1 → 2 → 3

get(1)

Cache
2 → 3 → 1

put(4)

Remove 2

Cache
3 → 1 → 4
