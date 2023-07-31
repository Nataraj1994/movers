const buttons = document.querySelectorAll(".select");
buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove "selected" class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove("selected");
      });
      
        // Add "selected" class to the clicked button
        button.classList.add("selected");
      });
    });

    const btn=document.getElementById("driver");
    btn.addEventListener("click",function(){
    drop.style.display = "block";
    });


   const close=document.getElementById("close");
   close.addEventListener("click",function(){
    drop.style.display = "none";
   })
   function pass(selectedIndex) {
    const buttons = document.querySelectorAll('.cargoandpass');
  
    buttons.forEach((button, index) => {
        if (index === selectedIndex -1) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    if (selectedIndex === 1) {
      // Do something for Button 1
      console.log("Button 1 clicked!");
      bike.style.display = "none";
      Auto.style.display = "none";
      car.style.display = "none";
      Traveller.style.display = "none";
      Tiller.style.display = "none";
      hitachi.style.display = "none";
      jcb.style.display = "none";
      auto.style.display = "inline-block";
      tempo1.style.display = "inline-block";
      tempo2.style.display = "inline-block";
      tempo3.style.display = "inline-block";
      tempo4.style.display = "inline-block";
      Tipper.style.display = "inline-block";
      Tractor.style.display = "inline-block";
      material.style.display = "block";
      agriplace.style.display = "none";
      droping.style.display = "inline-block";
      pickup.style.display = "inline-block";
      to.style.display = "inline-block";
      km.style.display = "block";
      to1.style.display = "none";
      


    
  
  
  
  } else if (selectedIndex === 2) {
      // Do something for Button 2
      console.log("Button 2 clicked!");
      auto.style.display = "none";
      tempo1.style.display = "none";
      tempo2.style.display = "none";
      tempo3.style.display = "none";
      tempo4.style.display = "none";
      Tipper.style.display = "none";
      Tractor.style.display = "none";
      material.style.display = "none";
      Tiller.style.display = "none";
      hitachi.style.display = "none";
      jcb.style.display = "none";
      bike.style.display = "inline-block";
      Auto.style.display = "inline-block";
      car.style.display = "inline-block";
      droping.style.display = "inline-block";
      pickup.style.display = "inline-block";
      agriplace.style.display = "none";
      Traveller.style.display = "inline-block";
      to.style.display = "inline-block";
    km.style.display = "block";
    to1.style.display = "none";


  
  
  
  } else if (selectedIndex === 3) {
      // Do something for Button 3
      console.log("Button 3 clicked!");
    // cargo.style.background = rgb(233, 233, 235);

    Tiller.style.display = "inline-block";
    hitachi.style.display = "inline-block";
    jcb.style.display = "inline-block";
    auto.style.display = "none";
    tempo1.style.display = "none";
    tempo2.style.display = "none";
    tempo3.style.display = "none";
    tempo4.style.display = "none";
    Tipper.style.display = "none";
    Tractor.style.display = "none";
    material.style.display = "none";
    bike.style.display = "none";
    Auto.style.display = "none";
    car.style.display = "none";
    pickup.style.display = "none";
    agriplace.style.display = "block";
    droping.style.display = "none";
    Traveller.style.display = "none";
    km.style.display = "none";
    to.style.display = "none";
    to1.style.display = "block";

    
  
  
  
  }
 
   }
   window.addEventListener('DOMContentLoaded',function(){
    console.log('clicked');
    cargo.style.background = "orange";
    cargo.style.color = "black";


    bike.style.display = "none";
    Auto.style.display = "none";
    car.style.display = "none";
    Traveller.style.display = "none";
    Tiller.style.display = "none";
    hitachi.style.display = "none";
    jcb.style.display = "none";
    auto.style.display = "inline-block";
    tempo1.style.display = "inline-block";
    tempo2.style.display = "inline-block";
    tempo3.style.display = "inline-block";
    tempo4.style.display = "inline-block";
    Tipper.style.display = "inline-block";
    Tractor.style.display = "inline-block";
    material.style.display = "block";
    agriplace.style.display = "none";
    droping.style.display = "inline-block";
    pickup.style.display = "inline-block";
    to.style.display = "inline-block";
    to1.style.display = "none";

  });
  function icon1(){
    mainul.style.display ="block";
  }
  function homepage(){
    mainul.style.display ="none";
  ;
  }

