
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDk-DXfW89Y43PH7cEMzhm3ImY74dyodeQ",
      authDomain: "kwitter-b5035.firebaseapp.com",
      databaseURL: "https://kwitter-b5035-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5035",
      storageBucket: "kwitter-b5035.appspot.com",
      messagingSenderId: "227915680857",
      appId: "1:227915680857:web:31f9d9eb166cfbd06c7548"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+ Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom(){
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"
      }

      )
      localStorage.setItem("room_name", Room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}