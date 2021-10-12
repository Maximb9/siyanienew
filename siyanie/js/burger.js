/* function openNav() {
  document.getElementById("myNav").style.width = "20%";
  document.getElementById("main__right").style.width = "80%";
  document.getElementById("myNav").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.visibility = "hidden";
    document.getElementById("main__right").style.width = "100%";

    
  } */




  function openNav() {
    document.getElementById("myNav").style.width = "20%";
    document.getElementById("myNav").style.height = "auto";
    document.getElementById("main__right").style.width = "80%";
    document.getElementById("mainburger").style.visibility = "hidden";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("main__right").style.width = "100%";
    document.getElementById("mainburger").style.visibility = "visible";
  }
