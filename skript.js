let navHTML = 
'<a href="index.html">⌂</a>' +
'<a href="transformation.html">Transformation Theory</a>' +
'<a href="transformationgermany.html">Germanys transformation after WW2</a>'
'<a href="sounds_of_change.html">Sounds Of Change</a>'  ;

if (document.getElementById("nav")) {
    document.getElementById("nav").innerHTML = navHTML;
}

let footerHTML = 
'<a href="kredits.html">sources?</a>' +
'<a href="sourcecode.html">a look into the Source code</a>';

if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = footerHTML;
}
