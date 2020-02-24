window.onload = function () { //kind of import
    var xmlhttp;
    var oe = document.getElementById("menu");

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "SharedMenu.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
};


//FOR SLIDESHOW
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

//FORM VALIDATION
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 18 || x > 40) {
        text = "If you like to take part in our trips you need to be 18 to 40 years of age";
    } 
    
}
