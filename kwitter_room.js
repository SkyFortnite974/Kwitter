const firebaseConfig = {
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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}


getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}