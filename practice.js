var firebaseConfig = {
    apiKey: "AIzaSyA8QDKlcvCMzOb7CxP3-GeKx0LhbDSHy8E",
    authDomain: "kwitter-dab52.firebaseapp.com",
    databaseURL: "https://kwitter-dab52-default-rtdb.firebaseio.com",
    projectId: "kwitter-dab52",
    storageBucket: "kwitter-dab52.appspot.com",
    messagingSenderId: "729072278450",
    appId: "1:729072278450:web:17d408a95644e1c93762ab"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adddUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update ({
purpose: "adding user"
    });
}
