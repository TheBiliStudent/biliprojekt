let navHTML = 
'<a href="index.html">⌂</a>' +
'<a href="transformation.html">Transformation Theory</a>' +
'<a href="liberalisation.html">Germanys transformation after WW2</a>' +
'<a href="soundsofchange.html">Sounds of change</a>' +
'<a href="initialposition.html">Initial position in 1989</a>' +
'<a href="peacefulrevolution.html">Peaceful revolution in the GDR</a>' ;

if (document.getElementById("nav")) {
    document.getElementById("nav").innerHTML = navHTML;
}

let footerHTML = 
'<a href="credits.html">sources</a>' +
'<a href="sourcecode.html">a look into the Source code</a>';

if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = footerHTML;
}
