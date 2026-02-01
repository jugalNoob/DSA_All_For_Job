Absolutely! Let’s go step by step. I’ll show you how to create a recommendation system in Node.js, from basic logic to realistic implementations. I’ll also explain the approaches so you can pick what suits your project.

🔹 1️⃣ Types of Recommendation Systems

Popularity-based / Top items

Simplest

Recommend most popular items

No personalization

Example: Top 10 movies, top trending products

Content-based filtering

Recommend items similar to what the user liked

Uses features of items

Example: Movie genres, product categories

Collaborative filtering

Recommend items based on similar users or user-item interactions

Example: “Users who bought X also bought Y”

Hybrid

Combination of content + collaborative

Example: Netflix, Amazon

🔹 2️⃣ Simple Popularity-Based Recommendation in Node.js

Suppose you have a product list with purchase counts.

// products.js
const products = [
  { id: 1, name: "Laptop", sold: 150 },
  { id: 2, name: "Phone", sold: 200 },
  { id: 3, name: "Headphones", sold: 50 },
  { id: 4, name: "Monitor", sold: 120 },
];

export default products;


Recommendation API

import express from "express";
import products from "./products.js";

const app = express();
const PORT = 8000;

app.get("/recommendations", (req, res) => {
  // Top 3 products by sales
  const topProducts = products
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 3);

  res.json(topProducts);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


✅ Simple, works immediately.

🔹 3️⃣ Content-Based Filtering Example

Suppose you have user preferences and item features:

const items = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Phone", category: "Electronics" },
  { id: 3, name: "Chair", category: "Furniture" },
];

const userLikes = ["Electronics"];


Recommendation function

function recommend(userLikes, items) {
  return items.filter(item => userLikes.includes(item.category));
}

console.log(recommend(userLikes, items));
// Output: [{id:1, name:"Laptop"}, {id:2, name:"Phone"}]

🔹 4️⃣ Collaborative Filtering (User-Item Matrix)

Suppose you have users & ratings:

const ratings = {
  Alice: { Laptop: 5, Phone: 3 },
  Bob: { Laptop: 2, Chair: 5 },
  Carol: { Phone: 4, Chair: 2 },
};

// Find items Bob might like (simple)
function recommendForUser(user, ratings) {
  const userRatings = ratings[user];
  const itemsNotRated = {};

  // Loop over other users
  for (let other in ratings) {
    if (other === user) continue;
    for (let item in ratings[other]) {
      if (!userRatings[item]) {
        itemsNotRated[item] = (itemsNotRated[item] || 0) + ratings[other][item];
      }
    }
  }

  // Sort by highest score
  return Object.entries(itemsNotRated)
    .sort((a, b) => b[1] - a[1])
    .map(([item]) => item);
}

console.log(recommendForUser("Bob", ratings));
// Output: ["Phone"] — Bob didn’t rate it, others liked it


✅ This is a basic collaborative filtering logic.

🔹 5️⃣ Using Machine Learning / AI

For large datasets, you can use:

Python + TensorFlow / PyTorch for ML model

Expose model as an API

Node.js fetches recommendations

Or use existing libraries:

recsys (Python)

node-recommendation (Node.js, simple collaborative filtering)

🔹 6️⃣ MongoDB Based Recommendation (Real App)

Suppose your database stores user purchases / views:

// MongoDB collections
users: { _id, name, purchased: [productId] }
products: { _id, name, category }


Get recommendations based on category of purchased items

const user = await db.collection("users").findOne({ _id: userId });
const purchasedCategories = await db.collection("products")
  .find({ _id: { $in: user.purchased } })
  .project({ category: 1 })
  .toArray();

const recommended = await db.collection("products")
  .find({ category: { $in: purchasedCategories.map(c => c.category) }, _id: { $nin: user.purchased } })
  .limit(5)
  .toArray();


✅ This is content-based recommendation using MongoDB aggregation.

🔹 7️⃣ Scaling Up

For millions of users/items:

Use Redis for caching recommendations

Precompute popular items daily

Use collaborative filtering with matrix factorization

Expose recommendations via Node.js API

🔹 8️⃣ Summary / Approach


| Approach      | Node.js Implementation | Complexity  |
| ------------- | ---------------------- | ----------- |
| Popularity    | Sort items by count    | Easy        |
| Content-based | Filter by features     | Easy-Medium |
| Collaborative | User-item matrix       | Medium-Hard |
| ML / AI       | External model + API   | Hard        |




f you want, I can make a ready-to-use Node.js recommendation system with:

JWT-authenticated users

MongoDB storing purchases

Proxy + caching

Top + content + collaborative recommendations