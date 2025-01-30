import { addStudentFunction } from "./main.js";
import { back } from "./main.js";

function loadSecondForm(){
    for(let i = 0; i < localStorage.getItem("aNumber"); i++){
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Eg. Class 1st";
        input.required = true;
        input.id = "input_"+i;
        input.className = "form_input";
        document.getElementById("form_id_2").appendChild(input)
    }
}

document.getElementById("form3").addEventListener("submit",function(event){
    event.preventDefault();
    let achivement = "";
    for(let i = 0; i < localStorage.getItem("aNumber");i++){
        achivement += document.getElementById("input_"+i).value + "~";
    }
    achivement = achivement.substring(0, achivement.length-1);
    localStorage.setItem("achivement",achivement);

    addStudentFunction();
    alert("Student added successfully");
    window.location.href = 'addStudent.html';
})

document.getElementById("back").addEventListener("click",function(){
    if(localStorage.getItem("eaNumber") != 0){
        back("addStudent2.html")
    }else{
        back("addStudent.html")
    }
})

window.onload = function(){

    if(window.location.pathname.split("/").pop() == "addStudent3.html"){
        loadSecondForm();
    }
}