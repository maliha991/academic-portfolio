const path= document.getElementsByClassName("path");
const date = document.getElementsByClassName("date");

path[0].innerText = path[0].innerHTML + window.location.href;
date[0].innerText = date[0].innerHTML + document.lastModified;