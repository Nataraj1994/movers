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
/////////////////////////////////////////////////////////////////////////////////////
var row=1;
const db = firebase.firestore();
console.log(db);

// var drivername=drivername;
// export const drivername=drivername;
// console.log("mmm:,,"+drivername);
const userlist=document.querySelector('#cafe-list');

function renderUser(doc){
    let li=document.createElement('li');
    let id =document.createElement('span');
    let drivername=document.createElement('span');
    let drivernum =document.createElement('span');
    let driverliecence =document.createElement('span');

    let vehiclehave =document.createElement('span');
    let drivervehiclenum=document.createElement('span');
    


    // li.setAttribute('data-id');
    drivername.textContent= doc.data().drivername+ "   ";
    drivernum.textContent=doc.data().drivernum+"   ";
    driverliecence.textContent=doc.data().driverliecence+"   ";
    vehiclehave.textContent=doc.data().vehiclehave+"   ";
    drivervehiclenum.textContent=doc.data().drivervehiclenum+"   ";
    id.textContent=doc.id+"   ";
    //..................................................................................................................

    var display=document.getElementById('user');
    var newRow=display.insertRow(-1);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    var cell7=newRow.insertCell(6);


    cell1.innerHTML=row;
    cell2.innerHTML=id.textContent;
    cell3.innerHTML=drivername.textContent;
    cell6.innerHTML=drivervehiclenum.textContent;
    cell7.innerHTML=vehiclehave.textContent;
    cell4.innerHTML=drivernum.textContent;
    cell5.innerHTML=driverliecence.textContent;

   row++;

   console.log(cell3);




}

 db.collection('userdata').get().then((snapshot)  =>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data().name);
        renderUser(doc);
      
        
    });
 })
 