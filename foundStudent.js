import { back } from "./main.js";

const sId = document.getElementById("id");
const sName = document.getElementById("name");
const phone = document.getElementById("phone");
const ea = document.getElementById("ea");
const a = document.getElementById("a");

const eaCode = `<div id="ea">
                    <h1 class="normal_h1">Extra Curricular Activities</h1>
                    <div id = "inner_ea"></div>
                </div>`
const aCode = `<div id = "a">
                    <h1 class="normal_h1">Achivements</h1>
                    <div id = "inner_a"></div>
                </div>`

document.getElementById("secondary_tabs").innerHTML = ""

function displayStudent(){
    const student = localStorage.getItem("foundStudent");
    const studentArr = student.split("_");
    sId.innerText = studentArr[0];
    sName.innerText = studentArr[1];
    phone.innerText = studentArr[2];

    if(studentArr[3] != 0){
        document.getElementById("secondary_tabs").innerHTML += eaCode;
        const eaArr = studentArr[5].split("~");
        for (let i = 0; i < studentArr[3]; i++) {
            const h2 = document.createElement("h2");
            h2.innerText = eaArr[i];
            document.getElementById("inner_ea").appendChild(h2);
        }
    }

    if(studentArr[4] != 0){
        document.getElementById("secondary_tabs").innerHTML += aCode;
        const aArr = studentArr[6].split('~');
        for (let i = 0; i < studentArr[4]; i++) {
            console.log(aArr[i])
            const h2 = document.createElement("h2");
            h2.innerText = aArr[i];
            document.getElementById("inner_a").appendChild(h2);
        }
    }

    localStorage.removeItem("foundStudent")
}

document.getElementById("back").addEventListener("click",function(){
    back("searchStudent.html")
})

window.onload=function(){
    displayStudent();
}