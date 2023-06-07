function openCity(evt, content) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(content).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById("mySidenav").style.width = 0;
  document.getElementById("mySidenav").style.display = "none";
}

document.getElementById("defaultOpen").click();
