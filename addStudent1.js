import { addStudentFunction } from "./main.js";
import { back } from "./main.js";

var id = localStorage.getItem("studentIndex");
document.getElementById("id").value = id;
var sName;
var phone;
var eaNumber;
var aNumber;
document.getElementById("form1").addEventListener("submit",function(event) {
    event.preventDefault();
    
    localStorage.setItem("id",document.getElementById("id").value);
    localStorage.setItem("name",document.getElementById("name").value);
    localStorage.setItem("phone",document.getElementById("phone").value);
    localStorage.setItem("eaNumber",document.getElementById("EA_number").value);
    localStorage.setItem("aNumber",document.getElementById("Achivement_number").value);

    if(localStorage.getItem("eaNumber") != 0){
        window.location.href = 'addStudent2.html';
    }else if(localStorage.getItem("aNumber") != 0){
        window.location.href = 'addStudent3.html';
    }else{
        addStudentFunction();
        alert("Student added successfully");
        window.location.href = 'addStudent.html';
    }
});

document.getElementById("back").addEventListener("click",function(){
    back("index.html")
})

