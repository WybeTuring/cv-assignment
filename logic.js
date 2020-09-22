
/*
 Logic for the information page
 */
var getInformation = function(form){
    let firststate, middlestate, laststate, pstate, estate, lstate;
    let fName = document.getElementById("fname").value;
    let mName = document.getElementById("mname").value;
    let lName = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let postalAddress = document.getElementById("paddress").value;
    let phone = document.getElementById("phone").value;
    let pemail = document.getElementById("pemail").value;
    let linkedIn = document.getElementById("linkedin").value;

    var regName = /^[a-zA-Z]+\s*[a-zA-Z]*$/;
    var phone_number = /\+?\d{6,15}$/;
    var emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    var linkedinVal = /^(https:\/\/)?www.linkedin.com\/(\w*\d*\-?)*/;
    
    if(!regName.test(fName)){
        alert("Please enter your first name correctly. Please do not use special characters. ");
        firststate = false;
        return false;
    }else{
        firststate = true;
    }

    if(!regName.test(mName)){
        alert("Please enter your middle name correctly. Please do not use special characters. ");
        middlestate = false;
        return false;
    }else{
        middlestate = true;
    }

    if(!regName.test(lName)){
        alert("Please enter your last name correctly. Please do not use special characters. ");
        laststate = false;
        return false;
    }else{
        laststate = true;
    }

    if(!phone_number.test(phone)){
        alert("Please enter your phone number properly\nPhone numbers can start with a +, and must not have more than 15 digits.\nPlease do not indclude delimeters like - or spaces.")
        pstate = false;
        return false;
    }else{
        pstate = true;
    }

    if(!emailVal.test(pemail)){
        alert("Please enter an email.");
        estate = false;
        return false;
    }else{
        estate = true;
    }

    if(!linkedinVal.test(linkedIn)){
        alert("Please enter a valid linkedIn profile link.\nGo to your profile section, and customise your linkedurl to be of the professional form www.linkedin.com/firtName-lastName.");
        lstate = false;
        return false;
    }else{
        lstate = true;
    }

    let finalState = firststate && middlestate && laststate && pstate && estate && lstate;

    if(!finalState){
        return false;
    }
    else {
        localStorage.setItem("fname", fName);
        localStorage.setItem("mName", mName);
        localStorage.setItem("lName", lName);
        localStorage.setItem("gender", gender);
        localStorage.setItem("postalAddress", postalAddress);
        localStorage.setItem("phone", phone);
        localStorage.setItem("pemail", pemail);
        localStorage.setItem("linkedIn", linkedIn);
        window.location.href = "cv-final.html";

    }

}

var fixCV = function(){

    //clearing the div
    document.getElementById("information").innerHTML = "";

    let fName = localStorage.getItem("fname");
    let mName = localStorage.getItem("mName");
    let lName = localStorage.getItem("lName");
    let gender = localStorage.getItem("gender");
    let postal = localStorage.getItem("postalAddress");
    let phone = localStorage.getItem("phone");
    let pemail = localStorage.getItem("pemail");
    let linkedIn = localStorage.getItem("linkedIn");

    if(fName === null && lName === null){
        window.location.href = "index.html";
        return false;
    }

    let mainID =  document.getElementById("information")

    let para = document.createElement("p");
    para.id = "full-name";
    let text = document.createTextNode(fName + " " + mName + " " + lName);
    para.appendChild(text);
    mainID.appendChild(para);

    para = document.createElement("p");
    text = document.createTextNode(gender);
    para.appendChild(text);
    mainID.appendChild(para);

    para = document.createElement("p");
    text = document.createTextNode(postal);
    para.appendChild(text);
    mainID.appendChild(para);

    para = document.createElement("p");
    text = document.createTextNode(phone);
    para.appendChild(text);
    mainID.appendChild(para);

    para = document.createElement("p");
    text = document.createTextNode(pemail);
    para.appendChild(text);
    mainID.appendChild(para);

    para = document.createElement("p");
    text = document.createTextNode(linkedIn);
    para.appendChild(text);
    mainID.appendChild(para);
}