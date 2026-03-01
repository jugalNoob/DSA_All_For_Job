
Fisher-Yates Shuffer Algo
/////////////////////////////

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const myArray = [1, 2, 3, 4, 5];
  const shuffledArray = fisherYatesShuffle(myArray);
  console.log(shuffledArray); // Output: [5, 2, 4, 1, 3] (random order)


2 .second

  function shuffleArray(array) { //////
        return array.sort(() => Math.random() - 0.5);
    }
    
    const colors = shuffleArray(['red', 'blue', 'green', 'yellow', 'orange', 'purple']);
    console.log(colors);