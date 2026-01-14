

    <!-- <script>


    let data = ["jugal", "sharma", "knaika", "ayush", "karan"];
    let searchCounts = {}; // Object to store search counts for each unique name
    
    function flipButton() {
        const searchInput = document.getElementById("Search").value.trim();
        let result = undefined;
    
        // Check if the input exists in the data array
        for (let i = 0; i < data.length; i++) {
            if (data[i] === searchInput) {
                result = data[i];
                break;
            }
        }
    
        // If the search term exists in the data, increment the counter for it
        if (result) {
            if (!searchCounts[result]) {
                searchCounts[result] = 1;  // Initialize count for the first search of this term
            } else {
                searchCounts[result]++;  // Increment count for subsequent searches
            }
            console.log(`Found: ${result}`);
            console.log(`Search count for "${result}": ${searchCounts[result]}`);
    
            // Determine which search term has the highest score
            let maxTerm = null;
            let maxCount = 0;
            for (const [term, count] of Object.entries(searchCounts)) {
                if (count > maxCount) {
                    maxCount = count;
                    maxTerm = term;
                }
            }
            console.log(`Highest search term so far: "${maxTerm}" with count ${maxCount}`);
        } else {
            console.log("Not Found");
        }
    }
    
    
        </script>
         -->