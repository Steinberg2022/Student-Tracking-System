import { addStudentFunction } from "./main.js";
import { back } from "./main.js";

function loadSecondForm(){
    for(let i = 0; i < localStorage.getItem("eaNumber"); i++){
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Eg. Football";
        input.id = "input_"+i;
        input.required = true;
        input.className = "form_input";
        document.getElementById("form_id_1").appendChild(input)
    }
}

document.getElementById("form2").addEventListener("submit",function(event){
    event.preventDefault();
    let extra = "";
    for(let i = 0; i < localStorage.getItem("eaNumber");i++){
        extra += document.getElementById("input_"+i).value + "~";
    }
    extra = extra.substring(0, extra.length-1);
    localStorage.setItem("extra",extra);

    if(localStorage.getItem("aNumber") != 0){
        window.location.href = 'addStudent3.html';
    }else{
        addStudentFunction();
        alert("Student added successfully");
        window.location.href = 'addStudent.html';
    }
})

document.getElementById("back").addEventListener("click",function(){
    back("addStudent.html")
})


window.onload = function(){
    if(window.location.pathname.split("/").pop() == "addStudent2.html"){
        loadSecondForm();
    }
}
