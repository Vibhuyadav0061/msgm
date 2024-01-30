// form 
var modal = document.getElementById("contact_form");
var contact_btn = document.getElementById("contact_btn");
var sub_contact_btn = document.getElementById("sub_contact_btn");
var close = document.getElementsByClassName("close")[0];
var subadmission  = document.getElementById("sub-admission-box");
var admissioninside = document.getElementById("open-sub-admission-box");



// navbar 
function openmenu(){
    document.getElementById("but-menu").style.display = "block";
}
function closemenu(){
    document.getElementById("but-menu").style.display = "none";
}
// When the user clicks the button, open the modal 
contact_btn.onclick = function(){
     modal.style.display="block";
}
sub_contact_btn.onclick = function(){
    modal.style.display="block";
}
close.onclick = function(){
    modal.style.display ="none";
}

admissioninside.onclick = function(){
    subadmission.style.display = "block";
}
subadmission.onclick = function(){
    subadmission.style.display = "none";
}










