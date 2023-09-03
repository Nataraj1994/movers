const auth = firebase.auth()
const db = firebase.firestore()
const loginForm = document.querySelectorAll('.login-signup')[0]

const signupForm = document.querySelectorAll('.login-signup')[1]

const nav_to_signup = document.querySelector('#nav-to-signup')

const nav_to_login = document.querySelector('#nav-to-login')

const login_submit = document.querySelector('#login-submit')

const signup_submit = document.querySelector('#signup-submit')

const forgotpwd = document.querySelector('.forgot-pwd')

const details = document.querySelector('.user-details')

const userDetails = id => {
    window.localStorage.setItem('currently_loggedIn',id)
    const docRef = db.collection('users').doc(id)
    docRef.get().then(doc => {
        if(doc.exists){
            const h1 = details.children[0]
            // h1.textContent = `Welcome ${doc.data().userName}`
            const uid_driver =document.getElementById("uid_driver");
            uid_driver.value=`${doc.id}`;
            const name_driver =document.getElementById("name_driver");
            name_driver.value=`${doc.data().userName}`
            const num_driver =document.getElementById("num_driver");
            num_driver.value=`${doc.data().ContactNumber}`
            const email_driver =document.getElementById("email_driver");
            email_driver.value=`${doc.data().email}`
            const liecence_driver =document.getElementById("liecence_driver");
            liecence_driver.value=`${doc.data().LiecenceNumber}`
            const vehiclenum_driver =document.getElementById("vehiclenum_driver");
            vehiclenum_driver.value=`${doc.data().VehicleNumber}`
            const TypeOfVehicle_driver =document.getElementById("vehicletype_driver");
            TypeOfVehicle_driver.value=`${doc.data().TypeOfVehicle}`

            const signout = details.children[1]
            details.style.display = 'block';
            
            let userinfo=document.getElementById("userinfo");
            userinfo.addEventListener('click',()=>{
            details.style.display = 'none';
            console.log("clicked");
            })
            signout.addEventListener('click' , () => {
                auth.signOut().then(() => {
                    window.localStorage.removeItem('currently_loggedIn')
                    details.style.display = 'none'
                    loginForm.style.display = 'block'
                }).catch(() => {
                    console.log('Error Occurred While Sign Out')
                })
            })
        } else {
            console.log(`No such Document`)
        }
    }).catch(err => {
        console.log(`Error getting document : ${err}`)
    })
}
    
    var driver=document.getElementById("driver");
  driver.addEventListener('click',()=>{
    try{
        const currentUser = window.localStorage.getItem('currently_loggedIn')
        if(currentUser === null){
            throw new Error('No Current User')
        } else {
            userDetails(currentUser)
        }
    }catch(err){
        loginForm.style.display = 'block'
    }
})
var login_close=document.getElementById("login_close");
login_close.addEventListener('click',()=>{
    loginForm.style.display='none';
})


nav_to_signup.addEventListener('click' , () => {
    loginForm.style.display = 'none'
    signupForm.style.display = 'block'
    document.querySelector('#login').reset()
})

nav_to_login.addEventListener('click' , () => {
    loginForm.style.display = 'block'
    signupForm.style.display = 'none'
    document.querySelector('#signup').reset()
})
  
signup_submit.addEventListener('click' , event => {
    event.preventDefault()
    signup_submit.style.display = 'none'
    document.querySelectorAll('.loader')[1].style.display = 'block'
    const userName = document.querySelector('#signup-username').value 
    const email = document.querySelector('#signup-email').value 
    const password = document.querySelector('#signup-pwd').value 
    const ContactNumber= document.querySelector('#signup-num').value 
    const LiecenceNumber = document.querySelector('#signup-liecence').value 
    const VehicleNumber = document.querySelector('#signup-vehiclenum').value 
    const TypeOfVehicle = document.querySelector('#signup-vehiclehave').value 
    
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        swal({
            title : 'Account Created Successfully',
            icon : 'success'
        }).then(() => {
            db.collection('users').doc(cred.user.uid).set({
                userName : userName,
                email : email,
                ContactNumber:ContactNumber,
                LiecenceNumber:LiecenceNumber,
                VehicleNumber:VehicleNumber,
               TypeOfVehicle :TypeOfVehicle

            }).then(() => {
            signup_submit.style.display = 'block'
            document.querySelectorAll('.loader')[1].style.display = 'none'
            document.querySelector('#signup').reset();
            signupForm.style.display = 'none'
            loginForm.style.display = 'block'
        }).catch(err => {
            swal({
                title : err,
                icon : 'error'
            }).then(() => {
                signup_submit.style.display = 'block'
                document.querySelectorAll('.loader')[1].style.display = 'none'
            })
        })
    })
    }).catch(err => {
        swal({
            title : err,
            icon : 'error'
        }).then(() => {
            signup_submit.style.display = 'block'
            document.querySelectorAll('.loader')[1].style.display = 'none'
        })
    })
})


login_submit.addEventListener('click' , event => {
    event.preventDefault()
    login_submit.style.display = 'none'
    document.querySelectorAll('.loader')[0].style.display = 'block'
    const email = document.querySelector('#login-email').value 
    const password = document.querySelector('#login-pwd').value 
    auth.signInWithEmailAndPassword(email,password).then(cred => {
        swal({
            title : 'Login Success',
            icon : 'success'
        }).then(() => {
            login_submit.style.display = 'block'
            document.querySelectorAll('.loader')[0].style.display = 'none'
            // document.querySelector('#login').reset()
            document.querySelector('#login').reset();

            loginForm.style.display = 'none'
            userDetails(cred.user.uid)
        })
    }).catch(err => {
        swal({
            title : err ,
            icon :'error'
        }).then(() => {
            login_submit.style.display = 'block'
            document.querySelectorAll('.loader')[0].style.display = 'none'
        })
    })
})

forgotpwd.addEventListener('click' , () => {
    swal({
        title : 'Reset Password',
        content : {
            element : 'input',
            attributes : {
                placeholder : 'Type your Email',
                type : 'email'
            }
        }
    }).then(val => {
        login_submit.style.display = 'none'
        document.querySelectorAll('.loader')[0].style.display = 'block'
        auth.sendPasswordResetEmail(val).then(() => {
            swal({
                title : 'Check Your Email',
                icon : 'success'
            }).then(() => {
                login_submit.style.display = 'block'
                document.querySelectorAll('.loader')[0].style.display = 'none'
            })
        }).catch(err => {
            swal({
                title : err,
                icon : 'error'
            }).then(() => {
                login_submit.style.display = 'block'
                document.querySelectorAll('.loader')[0].style.display = 'none'
            })
            
        })
       
    })
  
}) 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
console.log("xxxxx"+selectedValue);
   
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
     
    var km1 = document.getElementById("km1").value;
    console.log(km1);
    console.log("selected vehicle price is "+prices[selectedValue]);
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
 
   
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const userdataRef = db.collection('users');

function fetchVehicleData(vehicleType) {
  console.log(`Fetching data for ${vehicleType}`);
  
  userdataRef.where('TypeOfVehicle', '==', vehicleType).get()
    .then((snapshot) => {
      if (!snapshot.empty) {
        snapshot.docs.forEach(doc => {
          const vehicleData = doc.data();
          console.log("Vehicle name: ", vehicleData.userName, "Number: ", vehicleData.ContactNumber);
          const result_name=vehicleData.userName;
          const result_num= vehicleData.ContactNumber;
          console.log(result_name);
        });
      } else {
        console.log(`No document found with the specified vehicle type (${vehicleType}).`);
      }
    })
    .catch((error) => {
      console.error("Error fetching document:", error);
    });
}

const vehicleTypes = [
  '3 wheel Auto(passenger)',
  '4 wheel 5foot',
  '4 wheel 9feet',
  '4 wheel 12 feet',
  '6 wheel Truck',
  'Tipper',
  '',
  'Tractor',
  '2 wheel Bike',
  'Auto',
  'car',
  'Traveller',
  'Tiller',
  'Minihitachi',
  'JCB',
  'Tractor'
];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedValue = parseInt(button.getAttribute("data-value"));
    
    if (selectedValue >= 1 && selectedValue <= vehicleTypes.length) {
      const selectedVehicleType = vehicleTypes[selectedValue -1];
      fetchVehicleData(selectedVehicleType);
      console.log( "user data....."+fetchVehicleData.data);
    } else {
      console.log("Invalid selectedValue");
    }
    
    // Rest of your code...
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function renderUser(doc){
  let TypeOfVehicle =doc.data().TypeOfVehicle + "   ";
    
  
      db.collection('users').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
              // console.log(doc.data().vehiclehave);
              renderUser(doc);
          });
      });
  
  if (selectedValue == 3) {                                  ///////////////////check////////////////////////////
    console.log("hai ,value 3,,,,,");
  
   let  value_to_access = TypeOfVehicle.textContent;
    console.log("output of value access  "+value_to_access);
    // renderUser(doc);
  }}

})});

////////////////////////////////////////////////////////////////////////
function orderconfirm(){
    db.collection('users').get().then((snapshot)  =>{
      snapshot.docs.forEach(doc => {
          console.log(doc.data().name);
    
          let aa=doc.data().drivername;
          console.log(aa);
          var p=document.getElementById("a11").value;
          var q=document.getElementById("b11").value;
          var s=document.getElementById("username").value;
          var t=document.getElementById("usermobile").value;
          var u=document.getElementById("usermobile_otp").value;

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
         var cc=doc.data().userName;
         // var cc=result_name;

         document.getElementById("c_Dname").innerHTML=cc;
         var d=doc.data().ContactNumber;
        //  var d=vehicleData.drivername;
         document.getElementById("c_Dnumber").innerHTML=d;
         var e=doc.data().VehicleNumber ;
         
         document.getElementById("c_Vnum").innerHTML=e;
         var f=doc.data().TypeOfVehicle ;
         document.getElementById("c_vehicle").innerHTML=f;
         var g=document.getElementById("priceleft").value;
        document.getElementById("c_Price").innerText= g;
        var h=document.getElementById("km1").value;
        console.log('result is ' + h);
        document.getElementById("c_km").innerText=h;
    
    
         
    
        
     
        }
       
      })
      a11.value="";
      b11.value="";
      username.value="";
      usermobile.value="";
      km1.value="";
      priceleft.value="";
      materials.value="";
      usermobile_otp.value='';
    })
    var closebox=document.getElementById("c_close");
         closebox.addEventListener('click',()=>{
          customer.style.display="none";
         });
    };
      
