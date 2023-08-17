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

 function registered(){
  var drivername = document.getElementById("drivername").value;
  var drivernumber = document.getElementById("drivernum").value;
  let driverliecence = document.getElementById("driverliecence").value;
  let drivervehiclenum = document.getElementById("drivervehiclenum").value;
  let vehiclehave = document.getElementById("vehiclehave").value;
  
  localStorage.setItem("localstoragedrivername",drivername);
  localStorage.setItem("localstoragedrivernum",drivernumber);
  localStorage.setItem("localstoragedriverliecence",driverliecence);
  localStorage.setItem("localstoragedrivervehiclenum",drivervehiclenum);
  localStorage.setItem("localstoragedrivervehiclehave",vehiclehave);
  document.getElementById("submit").addEventListener('click',function(){
  document.getElementById("form").reset();
  // Form.style.display="none";
  // document.getElementById("Successfully").innerHTML="Successfully registered";
 });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function orderconfirm(){
 var p=document.getElementById("a11").value;
 var q=document.getElementById("b11").value;
 var s=document.getElementById("username").value;
 var t=document.getElementById("usermobile").value;
 if(!p||!q||!s||!t){
  console.log(p,q,s,t);

  alert("Please enter values in all fields.");
}else{
  document.getElementById("customer").style.display="block";
  console.log(p,q,s,t);


 
 var a=document.getElementById("a11").value;
 document.getElementById("c_pickup").innerHTML=a;
 var b=document.getElementById("b11").value;
 document.getElementById("c_Drop").innerHTML=b;
 var c=localStorage.getItem("localstoragedrivername");
 document.getElementById("c_Dname").innerHTML=c;
 var d=localStorage.getItem("localstoragedrivernum");
 document.getElementById("c_Dnumber").innerHTML=d;
 var e=localStorage.getItem("localstoragedrivervehiclenum");
 document.getElementById("c_Vnum").innerHTML=e;
 var f=localStorage.getItem("localstoragedrivervehiclehave");
 document.getElementById("c_vehicle").innerHTML=f;
 var g=document.getElementById("priceleft").value;
document.getElementById("c_Price").innerText= g;
var h=document.getElementById("tkm").value;
console.log('result is ' + h);
document.getElementById("c_km").innerHTML=h;
 
var closebox=document.getElementById("c_close");
closebox.addEventListener('click',()=>{
  customer.style.display="none";
});
};
};
  
 

  

 



