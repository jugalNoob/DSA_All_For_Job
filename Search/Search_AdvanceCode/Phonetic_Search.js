// 🔊 What is Phonetic Search?


// Phonetic search is a technique used to match words that sound alike, even if they are spelled differently. It focuses on the pronunciation of words rather than their exact spelling.

// 📘 Simple Example:
// Search for "Steven" may also match:

// "Stephen"

// "Stephan"

// "Stevon"

// Because they all sound similar, phonetic search can help you find relevant results even with:

// Spelling mistakes

// Different accents

// Transcriptions or name variations

// 🧠 How Does It Work?
// Phonetic search is based on phonetic encoding algorithms. These convert a word into a code that represents how it sounds.

// Common Phonetic Algorithms:
// Algorithm	Description
// Soundex	One of the earliest; used by US census
// Metaphone	Improves on Soundex for English
// Double Metaphone	Handles multiple possible pronunciations
// NYSIIS	Normalizes names, better for long words
// Cologne Phonetic	Used in German language
// 🧮 Example using Soundex:

// Smith → S530

// Smyth → S530 ➡️ So both match!



// 🔎 Where is Phonetic Search Used?
// Search engines (Google, Elasticsearch)

// Databases (SQL Server, Oracle, etc.)

// Voice recognition systems

// Genealogy software (family trees)

// Contact search in apps

// Autocorrect and autosuggest



function soundex(str) {
    const a = str.toUpperCase().split('');
    const f = a.shift();
    const codes = {
      A: '', E: '', I: '', O: '', U: '',
      H: '', W: '', Y: '',
      B: '1', F: '1', P: '1', V: '1',
      C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
      D: '3', T: '3',
      L: '4',
      M: '5', N: '5',
      R: '6'
    };
  
    const encoded = a.map(char => codes[char] || '').filter((v, i, arr) => v !== arr[i - 1]);
    return (f + encoded.join('') + '000').slice(0, 4);
  }
  
  console.log(soundex('Smith'));  // Output: S530
  console.log(soundex('Smyth'));  // Output: S530
  


  function soundex(str) {
    // Convert to uppercase without using toUpperCase()
    const upperStr = [];
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      // Convert lowercase a-z (ASCII 97–122) to A-Z (65–90)
      if (code >= 97 && code <= 122) {
        upperStr.push(String.fromCharCode(code - 32));
      } else {
        upperStr.push(str[i]);
      }
    }
  
    const codes = {
      A: '', E: '', I: '', O: '', U: '',
      H: '', W: '', Y: '',
      B: '1', F: '1', P: '1', V: '1',
      C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
      D: '3', T: '3',
      L: '4',
      M: '5', N: '5',
      R: '6'
    };
  
    const firstLetter = upperStr[0];
    let result = firstLetter;
    let previousCode = codes[firstLetter] || '';
  
    for (let i = 1; i < upperStr.length; i++) {
      const char = upperStr[i];
      const code = codes[char] || '';
  
      if (code !== '' && code !== previousCode) {
        result += code;
        previousCode = code;
      }
    }
  
    // Pad with 0s or trim to make it exactly 4 characters
    while (result.length < 4) {
      result += '0';
    }
    if (result.length > 4) {
      result = result[0] + result.slice(1, 4);
    }
  
    return result;
  }
  
  console.log(soundex('Smith')); // Output: S530
  console.log(soundex('Smyth')); // Output: S530
  



//   ✅ Benefits:
// Tolerant to spelling mistakes

// User-friendly search experience

// Better for multilingual support

// Works well in name-based systems


// Let me know if you want to:

// Implement phonetic search in Node.js

// Use it with Elasticsearch in your MERN app

// Explore phonetic algorithms in Python or C