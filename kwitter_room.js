
//ADD YOUR FIREBASE LINKS HERE
      //Start code
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBN9S8cB0GXFAs83koV1Q6Xwm86s2p9fj8",
      authDomain: "kwitter-8714e.firebaseapp.com",
      databaseURL: "https://kwitter-8714e-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-8714e",
      storageBucket: "kwitter-8714e.appspot.com",
      messagingSenderId: "812568946391",
      appId: "1:812568946391:web:aef1ced2bb54245397b292",
      measurementId: "G-GYMCVPNX5H"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
      //End code
      });});}  
      user_name=localStorage.getItem("user_name");
      document.getElementById9("user_name").innerHTML="welcome"+user_name+"!";
    function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";

    }   
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
 window.location="kwitter_page.html"; 
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}