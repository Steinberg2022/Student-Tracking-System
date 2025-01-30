import { back } from "./main.js";

let domID = document.getElementById("deleteId");
let domName = document.getElementById("deleteName");
let domPhone = document.getElementById("deletePhone");
document.getElementById("deleteButton").disabled = true;

document.getElementById("search_form").addEventListener("submit",function(event){
    event.preventDefault();
    let id = document.getElementById("id").value;

    if(id == ""){
        alert("Enter student's id");
        window.location.href = "deleteStudent.html"
    }

    let i = 0;
    for(i = 0;i<localStorage.getItem("counter");i++){
        const searhcedStudent = localStorage.getItem("student"+i);
        const studentArr = searhcedStudent.split("_");
        if(id == studentArr[0]){
            localStorage.setItem("foundForDeleteIndex",i);
            const searchedStudentArr = searhcedStudent.split("_")
            domID.value = searchedStudentArr[0];
            domName.value = searchedStudentArr[1];
            domPhone.value = searchedStudentArr[2];
            document.getElementById("deleteButton").disabled = false;
            break;
        }
    }
    
    if(i == localStorage.getItem("counter")){
        alert("Student Not Found !")
        window.location.href = "deleteStudent.html"
    }
})

document.getElementById("delete_form").addEventListener("submit",function(event){
    event.preventDefault();

    let deleteStudentIndex = localStorage.getItem("foundForDeleteIndex");
    localStorage.removeItem("student"+deleteStudentIndex);
    localStorage.setItem("counter",localStorage.getItem("counter")-1);
    let i = 0;
    for(i = parseInt(deleteStudentIndex); i<localStorage.getItem("counter"); i++){
        const tempStudentHolder = localStorage.getItem("student"+(i+1));
        console.log((i+1),tempStudentHolder);
        localStorage.removeItem("student"+(i+1));
        localStorage.setItem("student"+i,tempStudentHolder); 
    }

    document.getElementById("deleteButton").disabled = true;
    localStorage.removeItem("foundForDeleteIndex");
})

document.getElementById("back").addEventListener("click",function(){
    back("index.html")
})