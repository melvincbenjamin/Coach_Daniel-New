signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    setMessage("Login successful ✅");
    setTimeout(() => navigate("/track-location"), 1000); // Go to tracker page
  })
