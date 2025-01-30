import { back } from "./main.js";

let id;

document.getElementById("search_form").addEventListener("submit",function(event){
    event.preventDefault();
    id = document.getElementById("id").value;
    
    if(id == ""){
        alert("Enter student's id")
        window.location.href = "searchStudent.html";
    }
    let i = 0
    for(i = 0; i < localStorage.getItem("counter"); i++){
        const searchStudent = localStorage.getItem("student"+i);
        const studentArr = searchStudent.split("_");
        if(id == studentArr[0]){
            localStorage.setItem("foundStudent",searchStudent);
            window.location.href = "foundStudent.html"
            break;
        }
        console.log(i);
    }
    if(i == localStorage.getItem("counter")){
        alert("Student Not Found !")
        window.location.href = "searchStudent.html"
    }

})

document.getElementById("back").addEventListener("click",function(){
    back("index.html")
})


