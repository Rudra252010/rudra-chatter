 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCQVN-oRSToU6-UDZ1OQtp7TnJlhRfrDYw",
  authDomain: "kwitter-90901.firebaseapp.com",
  databaseURL: "https://kwitter-90901-default-rtdb.firebaseio.com",
  projectId: "kwitter-90901",
  storageBucket: "kwitter-90901.appspot.com",
  messagingSenderId: "30409950990",
  appId: "1:30409950990:web:4095919d7281a29547395f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="chatter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chatter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}