
//ADD YOUR FIREBASE LINKS
function adduser (){
user_name=document.getElementById("User_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}