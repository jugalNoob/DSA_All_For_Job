
const Fuse = require('fuse.js');

const users = [
  { name: 'Jugal Sharma', username: 'jugalsh' },
  { name: 'Rahul Mehta', username: 'rahul123' },
  { name: 'Anjali Roy', username: 'anjali_roy' }
];

const fuse = new Fuse(users, {
  keys: ['name', 'username'],
  threshold: 0.3 // Lower = stricter, Higher = more fuzzy
});

const result = fuse.search('jgl shrm');
console.log(result);
// [{ item: { name: 'Jugal Sharma', ... }, score: 0.1 }]



🔍 1. Basic Fuzzy Search in Flat Arrays
js
Copy
Edit
const Fuse = require('fuse.js');

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const fuse = new Fuse(fruits, {
  includeScore: true,
  threshold: 0.4
});

const result = fuse.search('aple'); // typo
console.log(result);
// Fuzzy match => apple




👥 2. Search by Multiple Keys
js
Copy
Edit
const users = [
  { name: 'Alice Johnson', email: 'alice@example.com' },
  { name: 'Bob Marley', email: 'bob@reggae.com' },
  { name: 'Charlie Brown', email: 'charlie@peanuts.com' },
];

const fuse = new Fuse(users, {
  keys: ['name', 'email'],
  threshold: 0.3
});

const result = fuse.search('alic jhnson');
console.log(result);
// Fuzzy match for name "Alice Johnson"\



🔢 3. Search by Nested Properties
js
Copy
Edit
const products = [
  { id: 1, details: { title: 'Wireless Mouse', brand: 'Logitech' } },
  { id: 2, details: { title: 'Gaming Keyboard', brand: 'Razer' } },
  { id: 3, details: { title: 'Noise Cancelling Headphones', brand: 'Sony' } },
];

const fuse = new Fuse(products, {
  keys: ['details.title', 'details.brand'],
  threshold: 0.3
});

const result = fuse.search('logi mouse');
console.log(result);




// Matches the Logitech mouse
🧠 4. Tuning Sensitivity with threshold


// Higher threshold means more relaxed matching
const relaxedFuse = new Fuse(users, { keys: ['name'], threshold: 0.6 });
console.log(relaxedFuse.search('char')); // matches 'Charlie Brown'

// Lower threshold = stricter match
const strictFuse = new Fuse(users, { keys: ['name'], threshold: 0.2 });
console.log(strictFuse.search('char')); // may return []




🧱 5. Auto-Suggest Style Search (Prefix or Starts-With)
If you want to only match starting letters (like autocomplete):



const books = [
  { title: 'The Great Gatsby' },
  { title: 'The Grapes of Wrath' },
  { title: 'Great Expectations' }
];

const fuse = new Fuse(books, {
  keys: ['title'],
  threshold: 0.3,
  useExtendedSearch: true
});

const result = fuse.search('^Great'); // Use '^' for startsWith
console.log(result);
// Matches "Great Expectations" only



📜 6. Search with Tokenization (split & match tokens separately)


const data = [
  { name: 'John Smith' },
  { name: 'Smith John' },
  { name: 'Johnny S.' }
];

const fuse = new Fuse(data, {
  keys: ['name'],
  threshold: 0.4,
  tokenize: true,
  includeScore: true
});

console.log(fuse.search('John S'));
Tokenization has been deprecated in latest versions, so if using new versions of Fuse.js, use useExtendedSearch.

🧪 Bonus: Exact Match (if needed with Extended Search)



const cities = [{ name: 'New York' }, { name: 'Yorktown' }, { name: 'Newark' }];

const fuse = new Fuse(cities, {
  keys: ['name'],
  useExtendedSearch: true
});

console.log(fuse.search("'New York'")); // exact match