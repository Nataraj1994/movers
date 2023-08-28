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




var tabbuttons = document.querySelectorAll(".tabcontainer .buttoncontainer button");
var tabpanels = document.querySelectorAll(".tabcontainer .tabpanel");
console.log(tabbuttons);
console.log(tabpanels);


function showpanel(panelIndex,Colorcode){
    tabbuttons.forEach(function (node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabbuttons[panelIndex].style.backgroundColor = Colorcode;
    tabbuttons[panelIndex].style.color="white";
    tabpanels.forEach (function (node){
                                       node.style.display="none";
                                      });
    tabpanels[panelIndex].style.display="block";
    tabpanels[panelIndex].style.backgroundColor=Colorcode;
console.log(panelIndex);
if(panelIndex==0){
  materials.style.display="inline-block";
  b11.style.display="inline-block";
  a11.placeholder = "Enter Pickup point";
}
if(panelIndex==1){
  materials.style.display="none";
  b11.style.display="inline-block";
  a11.placeholder = "Enter Pickup point";
  
}
if(panelIndex==2){
  materials.style.display="none";
  b11.style.display="none";
  a11.placeholder = "Enter Place Of work";
}
    
}
showpanel(0,'#f44336');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const buttons = document.querySelectorAll(".select");

buttons.forEach(button => {
   button.addEventListener("click", () => {
    // Remove "selected" class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove("selected");
    });

    // Add "selected" class to the clicked button
    button.classList.add("selected");
    
  
    // Get the value associated with the clicked button
    const selectedValue = parseInt(button.getAttribute("data-value"));
   
    // Define variables for different prices
    const prices = {
      1: 8,
      2: 10,
      3: 13,
      4: 17,
      5: 20,
      6: 30,
      8: 20,
      9: 7,
      10: 10,
      11: 12,
      12: 18,
    };
  
    // Use the selected value to get the price from the 'prices' object
    const price = prices[selectedValue];
   
    
    // var selectedValueElement =prices[selectedValue]; 
    var km1 = document.getElementById("km1").value;
    console.log(km1);
    console.log(prices[selectedValue]);
    function myFunction12(){
    
      var selectedValueElement =prices[selectedValue]; 
      var km1 = document.getElementById("km1").value;

     let x1=(selectedValueElement*2) * km1;
      document.getElementById("priceleft").value=x1;
      console.log(x1);
      return x1;
    };
    myFunction12();                                     //total amount have to pay (customer side)
   
    // Use the selected value as needed
    var text = document.getElementById("kmprice");
    text.textContent = "Per KM Price : " + price + " RS";
    
  });
});
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var driver=document.getElementById("driver");
  driver.addEventListener('click',()=>{
    drop.style.display="block";

  });
  var close=document.getElementById("close");
  close.addEventListener('click',()=>{
    drop.style.display="none";

  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function icon1(){
    mainul.style.display ="block";
  }
  function homepage(){
    mainul.style.display ="none";
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Order confirmed notification details

function orderconfirm(){
db.collection('userdata').get().then((snapshot)  =>{
  snapshot.docs.forEach(doc => {
      console.log(doc.data().name);

      let aa=doc.data().drivername;
      console.log(aa);
      var p=document.getElementById("a11").value;
      var q=document.getElementById("b11").value;
      var s=document.getElementById("username").value;
      var t=document.getElementById("usermobile").value;
      if(!p||!q||!s||!t){
        console.log(p,q,s,t);
      
        alert("Please enter values in all fields.");
      }else{
      
        console.log(p,q,s,t);
     document.getElementById("customer").style.display="block";
     var a=document.getElementById("a11").value;
     document.getElementById("c_pickup").innerHTML=a;
     var b=document.getElementById("b11").value;
     document.getElementById("c_Drop").innerHTML=b;
     var cc=doc.data().drivername;
     document.getElementById("c_Dname").innerHTML=cc;
     var d=doc.data().drivernum;
     document.getElementById("c_Dnumber").innerHTML=d;
     var e=doc.data().drivervehiclenum ;
     document.getElementById("c_Vnum").innerHTML=e;
     var f=doc.data().vehiclehave ;
     document.getElementById("c_vehicle").innerHTML=f;
     var g=document.getElementById("priceleft").value;
    document.getElementById("c_Price").innerText= g;
    var h=document.getElementById("km1").value;
    console.log('result is ' + h);
    document.getElementById("c_km").innerText=h;


     var closebox=document.getElementById("c_close");
     closebox.addEventListener('click',()=>{
     customer.style.display="none";
     });

    
 
    }
   
  })
  a11.value="";
  b11.value="";
  username.value="";
  usermobile.value="";
  km1.value="";
  priceleft.value="";
  materials.value="";
})
};
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//generate OTP
function generateOTP() {
  const digits = '0123456789';
  let otp = '';

  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      otp += digits.charAt(randomIndex);
  console.log(randomIndex);

  }

  return otp;
 
}

function displayOTP() {
  const otpContainer = document.getElementById('otp');
  otpContainer.value= generateOTP();

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Data store in firebase
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
    let driverliecence1= driverliecence.value.toUpperCase();
    let vehiclehave1= vehiclehave.value;
    let drivervehiclenum1= drivervehiclenum.value.toUpperCase();
 
     console.log(vehiclehave1);
     console.log(driverliecence1);
     console.log(drivername1);
     
 db.collection("userdata").add({
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
 otp.value="";
 });
 
  

 



