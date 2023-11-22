document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
  
    // Simulating password hashing (SHA-256)
    const hashedPassword = sha256(password); // Replace with actual hashing algorithm
  
    // Storing in browser storage (not suitable for production)
    localStorage.setItem(username, hashedPassword);
    alert('Registration successful! Please login.');
  });
  
  // User Login
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const storedPassword = localStorage.getItem(username);
  
    // Simulated password hashing for comparison
    const hashedPassword = sha256(password); // Replace with actual hashing algorithm
  
    if (hashedPassword === storedPassword) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('securedPage').style.display = 'block';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  
  // Simulated SHA-256 hashing algorithm
  function sha256(str) {
    // Replace with actual hashing algorithm implementation
    return str; // For demonstration, returning the input string itself
  }