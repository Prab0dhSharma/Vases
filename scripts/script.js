//
    //  Author: Prabodh Sharma
    //  Date: August 03, 2024
    //  File Name: Javascript
//

// Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc"); 

// Hamburger menu function.
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("pv-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}


// Function to display the promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}