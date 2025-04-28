// Your firebaseConfig — Make sure it's the correct one
const firebaseConfig = {
    apiKey: "YOUR_REAL_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get Auth service
  const auth = firebase.auth();
  const storage = firebase.storage();
  const db = firebase.firestore();
  
  // Sign Up function
  function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById('message').innerText = "✅ Signed up successfully!";
        console.log(userCredential.user);
      })
      .catch((error) => {
        document.getElementById('message').innerText = "❌ Error: " + error.message;
        console.error(error);
      });
  }
  
  // Login function
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById('message').innerText = "✅ Logged in successfully!";
        console.log(userCredential.user);
      })
      .catch((error) => {
        document.getElementById('message').innerText = "❌ Error: " + error.message;
        console.error(error);
      });
  }
  
  // Upload file function
  function uploadFile() {
    const file = document.getElementById('file-upload').files[0];
    if (!file) {
      document.getElementById('message').innerText = "❌ No file selected.";
      return;
    }
  
    const storageRef = storage.ref('uploads/' + file.name);
    storageRef.put(file)
      .then(() => {
        document.getElementById('message').innerText = "✅ File uploaded successfully!";
        console.log("File uploaded:", file.name);
      })
      .catch((error) => {
        document.getElementById('message').innerText = "❌ Upload failed: " + error.message;
        console.error(error);
      });
  }
  
  // Create user in Firestore
  function createUser() {
    const userId = document.getElementById('user-id').value;
    const userName = document.getElementById('user-name').value;
  
    db.collection("users").doc(userId).set({
      name: userName
    })
    .then(() => {
      document.getElementById('message').innerText = "✅ User created!";
    })
    .catch((error) => {
      document.getElementById('message').innerText = "❌ Error: " + error.message;
      console.error(error);
    });
  }
  
  // Read user from Firestore
  function readUser() {
    const userId = document.getElementById('user-id').value;
  
    db.collection("users").doc(userId).get()
    .then((doc) => {
      if (doc.exists) {
        document.getElementById('message').innerText = "👤 User Name: " + doc.data().name;
      } else {
        document.getElementById('message').innerText = "❌ No such user!";
      }
    })
    .catch((error) => {
      document.getElementById('message').innerText = "❌ Error: " + error.message;
      console.error(error);
    });
  }
  
  // Update user in Firestore
  function updateUser() {
    const userId = document.getElementById('user-id').value;
    const userName = document.getElementById('user-name').value;
  
    db.collection("users").doc(userId).update({
      name: userName
    })
    .then(() => {
      document.getElementById('message').innerText = "✅ User updated!";
    })
    .catch((error) => {
      document.getElementById('message').innerText = "❌ Error: " + error.message;
      console.error(error);
    });
  }
  
  // Delete user from Firestore
  function deleteUser() {
    const userId = document.getElementById('user-id').value;
  
    db.collection("users").doc(userId).delete()
    .then(() => {
      document.getElementById('message').innerText = "🗑️ User deleted!";
    })
    .catch((error) => {
      document.getElementById('message').innerText = "❌ Error: " + error.message;
      console.error(error);
    });
  }
  