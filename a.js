function selectButton(selectedIndex) {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button, index) => {
      if (index === selectedIndex- 1) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  });
  if (selectedIndex === 1) {
    // Do something for Button 1
    console.log("Button 1 clicked!");
    picmain.style.display = "block";
    pickmain1.style.display = "none";
    pickmain2.style.display = "none";



} else if (selectedIndex === 2) {
    // Do something for Button 2
    console.log("Button 2 clicked!");
    pickmain1.style.display = "block";
    picmain.style.display = "none";
    pickmain2.style.display = "none";



} else if (selectedIndex === 3) {
    // Do something for Button 3
    console.log("Button 3 clicked!");
    pickmain2.style.display = "block";
    picmain.style.display = "none";
    pickmain1.style.display = "none";



}
}


