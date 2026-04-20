🔥 9. Session Timeout Logic
let lastActive = Date.now();

function isSessionExpired() {
  const now = Date.now();

  return now - lastActive > 300000; // 5 min
}

🧠 Use cases:
login session expire
security systems