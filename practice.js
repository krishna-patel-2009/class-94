
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBP7Y9jI-WExsrLmjS3gjMa-KBCr7S_bBY",
    authDomain: "kwitter-40595.firebaseapp.com",
    databaseURL: "https://kwitter-40595-default-rtdb.firebaseio.com",
    projectId: "kwitter-40595",
    storageBucket: "kwitter-40595.appspot.com",
    messagingSenderId: "52533284735",
    appId: "1:52533284735:web:27f94422e0bffc1d49944a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("input_practice").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}