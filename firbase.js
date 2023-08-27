
const firebaseConfig = {
    apiKey: "AIzaSyC0YpkxpZC4mtrdxODaMYvJ0vD1ssfbcG0",
    authDomain: "moversnew-ecf01.firebaseapp.com",
    databaseURL: "https://moversnew-ecf01-default-rtdb.firebaseio.com",
    projectId: "moversnew-ecf01",
    storageBucket: "moversnew-ecf01.appspot.com",
    messagingSenderId: "996521849489",
    appId: "1:996521849489:web:a7ad3c4f2e4b5f7a2ac530"
  };
  firebase.initializeApp(firebaseConfig);
console.log("hai ...kjdjd");

const db = firebase.firestore();
console.log(db);

////////////////////////////////////////////////////////////


var userCollection = db.collection("uservalue");
var drivername = document.getElementById("drivername");
var drivernum = document.getElementById("drivernum");

var driverliecence = document.getElementById("driverliecence");
var vehiclehave = document.getElementById("vehiclehave");
var drivervehiclenum = document.getElementById("drivervehiclenum");
var addButton= document.getElementById("submit");

addButton.addEventListener("click", function() {
   // Get the values from the input fields
   let drivername1= drivername.value;
   let drivernum1= drivernum.value;
   let driverliecence1= driverliecence.value;
   let vehiclehave1= vehiclehave.value;
   let drivervehiclenum1= drivervehiclenum.value;

    console.log(vehiclehave1);
    console.log(driverliecence1);
    console.log(drivername1);
    

     

db.collection("uservalue").add({
    drivername: drivername1,
    drivernum: drivernum1,
    driverliecence: driverliecence1,
    vehiclehave: vehiclehave1,
    drivervehiclenum: drivervehiclenum1

 
})
.then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
 
})

.catch((error) => {
   console.error("Error adding document: ", error);
});
driverliecence.value = "";
drivername.value = "";
drivernum.value="";
vehiclehave.value="";
drivervehiclenum.value="";
});
