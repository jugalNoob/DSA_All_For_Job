<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search User</title>
</head>
<body>
    <h1>Search for a User</h1>

    <!-- Input for search -->
    <input type="text" id="search" placeholder="Enter username">
    <button onclick="apisear()">Search</button>

    <!-- Display all users -->
    <h2>All Users:</h2>
    <div id="all-users"></div>

    <!-- Display search result -->
    <h2>Search Result:</h2>
    <div id="result"></div>

    <script>
        let allUsers = []; // To store all users globally

        // Fetch and display all users when the page loads
        const fetchAllUsers = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) throw new Error("Failed to fetch data");

                allUsers = await response.json();

                // Display all users
                let allUsersDiv = document.getElementById("all-users");
                allUsers.forEach(user => {
                    allUsersDiv.innerHTML += `
                        <p><strong>Name:</strong> ${user.name}, 
                        <strong>Email:</strong> ${user.email}</p>`;
                });
            } catch (error) {
                console.error("Error fetching all users:", error.message);
                document.getElementById("all-users").innerHTML = `
                    <p style="color: red;">An error occurred: ${error.message}</p>`;
            }
        };

        // Search for a specific user
        const apisear = () => {
            let sear = document.getElementById("search").value.trim();
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = ""; // Clear previous result

            let userFound = false;

            allUsers.forEach(user => {
                if (user.name.toLowerCase() === sear.toLowerCase()) {
                    resultDiv.innerHTML = `
                        <h2>User Found:</h2>
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> ${user.website}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>`;
                    userFound = true;
                }
            });

            if (!userFound) {
                resultDiv.innerHTML = `<p style="color: red;">User "${sear}" not found.</p>`;
            }
        };

        // Fetch all users when the page loads
        window.onload = fetchAllUsers;
    </script>
</body>
</html>


        :::::::::::::::: Search :::::::::::::::::::::::::::::::::::::::::::::
import React, { useEffect, useState } from "react";

const App = () => {
  const [allUsers, setAllUsers] = useState([]); // Store all users
  const [searchTerm, setSearchTerm] = useState(""); // Store the search term
  const [searchResult, setSearchResult] = useState(null); // Store the search result

  // Fetch all users when the component mounts
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) throw new Error("Failed to fetch data");

        const users = await response.json();
        setAllUsers(users);
      } catch (error) {
        console.error("Error fetching all users:", error.message);
        setAllUsers([{ error: error.message }]);
      }
    };

    fetchAllUsers();
  }, []);

  // Search for a specific user
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResult(null);
      return;
    }

    const user = allUsers.find(
      (user) => user.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(user || { notFound: true });
  };

  return (
    <div>
      <h1>Search for a User</h1>

      {/* Input for search */}
      <input
        type="text"
        placeholder="Enter username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display all users */}
      <h2>All Users:</h2>
      <div id="all-users">
        {allUsers.length > 0 && !allUsers[0].error ? (
          allUsers.map((user) => (
            <p key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
            </p>
          ))
        ) : (
          <p style={{ color: "red" }}>
            {allUsers[0]?.error || "Loading users..."}
          </p>
        )}
      </div>

      {/* Display search result */}
      <h2>Search Result:</h2>
      <div id="result">
        {searchResult ? (
          searchResult.notFound ? (
            <p style={{ color: "red" }}>
              User "{searchTerm}" not found.
            </p>
          ) : (
            <div>
              <h2>User Found:</h2>
              <p>
                <strong>Name:</strong> {searchResult.name}
              </p>
              <p>
                <strong>Email:</strong> {searchResult.email}
              </p>
              <p>
                <strong>Phone:</strong> {searchResult.phone}
              </p>
              <p>
                <strong>Website:</strong> {searchResult.website}
              </p>
              <p>
                <strong>Company:</strong> {searchResult.company.name}
              </p>
            </div>
          )
        ) : (
          <p>Enter a username to search.</p>
        )}
      </div>``
    </div>
  );
};

export default App;

        
