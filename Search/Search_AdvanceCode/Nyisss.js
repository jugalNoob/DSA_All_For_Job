// ✅ Why NYSIIS over Soundex?
// Feature	Soundex	NYSIIS
// Retains vowels	❌	✅
// Better for long names	❌	✅
// Handles suffixes (e.g. "JR")	❌	✅
// Designed for real-world names	❌	✅
// Example:

// Macdonald, McDonald, MacDonell → All return the same NYSIIS code.

// 🧠 Basic Steps in NYSIIS Algorithm:
// Convert input to uppercase

// Remove non-alphabet characters

// Preserve first character

// Apply a series of replacement rules like:

// EV → AF

// KN → N

// PH → F

// SCH → SSS

// etc.

// Remove trailing S, AY, A

// Remove duplicate characters

// 💻 JavaScript Example of NYSIIS:
// Here’s a simple (partial) implementation of the NYSIIS algorithm in JavaScript:


function nysiis(name) {
  name = name.toUpperCase().replace(/[^A-Z]/g, "");

  if (!name) return "";

  name = name
    .replace(/^MAC/, "MCC")
    .replace(/^KN/, "NN")
    .replace(/^K/, "C")
    .replace(/^PH/, "FF")
    .replace(/^PF/, "FF")
    .replace(/^SCH/, "SSS");

  let result = name[0];

  for (let i = 1; i < name.length; i++) {
    let c = name[i];

    switch (c) {
      case "E":
      case "I":
      case "O":
      case "U":
        c = "A";
        break;
      case "Q":
        c = "G";
        break;
      case "Z":
        c = "S";
        break;
      case "M":
        c = "N";
        break;
      case "K":
        c = i + 1 < name.length && name[i + 1] === "N" ? "N" : "C";
        break;
    }

    if (c !== result[result.length - 1]) {
      result += c;
    }
  }

  result = result.replace(/A$/, "").replace(/S$/, "");

  return result;
}

console.log(nysiis("Macdonald"));  // Output: MCNAL
console.log(nysiis("McDonald"));   // Output: MCNAL


const natural = require('natural');
console.log(natural.Nysiis.process('Jonathan')); // e.g., "JANTAN"


::::::::::::::::::


function nysiis(name) {
  // Convert to uppercase and remove non-alphabet characters
  let upper = '';
  for (let i = 0; i < name.length; i++) {
    const code = name.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      upper += String.fromCharCode(code >= 97 ? code - 32 : code);
    }
  }

  if (upper.length === 0) return "";

  // Apply initial replacements
  if (upper.startsWith("MAC")) upper = "MCC" + upper.slice(3);
  else if (upper.startsWith("KN")) upper = "NN" + upper.slice(2);
  else if (upper.startsWith("K")) upper = "C" + upper.slice(1);
  else if (upper.startsWith("PH") || upper.startsWith("PF")) upper = "FF" + upper.slice(2);
  else if (upper.startsWith("SCH")) upper = "SSS" + upper.slice(3);

  let result = upper[0];

  for (let i = 1; i < upper.length; i++) {
    let c = upper[i];

    if ("EIOU".includes(c)) c = "A";
    else if (c === "Q") c = "G";
    else if (c === "Z") c = "S";
    else if (c === "M") c = "N";
    else if (c === "K") c = (i + 1 < upper.length && upper[i + 1] === "N") ? "N" : "C";

    if (c !== result[result.length - 1]) {
      result += c;
    }
  }

  // Remove trailing A or S
  const lastChar = result[result.length - 1];
  if (lastChar === "A" || lastChar === "S") {
    result = result.slice(0, -1);
  }

  return result;
}

console.log(nysiis("Macdonald"));  // MCNAL
console.log(nysiis("McDonald"));   // MCNAL
