javascript: var host = window.location.hostname; 
if (host == "edpuzzle.com") { 
  var r = new XMLHttpRequest(); 
  r.open("GET", "https://cdn.jsdelivr.net/gh/BizmoFunions895/hacks_sourceCode-links@main/edpuzzle-source.js", true); 
  r.addEventListener("load", function(){eval(this.responseText);});
  r.send();} else if (host == "google.com") {
    alert("To use this, enter this code into a new bookmark URL. Then, run it when you\u0027re on an Edpuzzle assignment.")} 
else {alert("Run this on an Edpuzzle assignment.")}
