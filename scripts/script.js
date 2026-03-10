/*
Name: Isaac Sakyi-Djan
Date: 03/10/2026
File: script.js
Description: JavaScript for Wild Rescues Bootstrap site
*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Wild Rescues website loaded successfully.");

    /* Navigation click interaction */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link){

        link.addEventListener("click", function(){

            console.log("Navigation link clicked:", this.textContent);

        });

    });

});
