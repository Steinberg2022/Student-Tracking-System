/*let studentArray = new Array(1);

for(let i = 0; i < studentArray.length; i++){
    studentArray[i] = new Array(7);
}

function extendArray(){
    let tempStudentArray = new Array(studentArray.length + 1);
    for(let i = 0; i < tempStudentArray.length; i++){
        tempStudentArray[i] = new Array(7);
    }

    for(let i = 0; i < studentArray.length; i++){
        for(let j = 0; j < studentArray[0].length; j++){
            tempStudentArray[i][j] = studentArray[i][j];
        }
    }

    studentArray = tempStudentArray;
}*/


let studentString = "";

if(localStorage.getItem("counter") == null){
    localStorage.setItem("counter",0);
}

if(localStorage.getItem("studentIndex") == null){
    localStorage.setItem("studentIndex",0);
}

export function back(page){
    window.location.href = page;
}

export function addStudentFunction(){
    let counter = localStorage.getItem("counter");
    studentString += localStorage.getItem("id") + "_";
    studentString += localStorage.getItem("name") + "_";
    studentString += localStorage.getItem("phone") + "_";
    studentString += localStorage.getItem("eaNumber") + "_";
    studentString += localStorage.getItem("aNumber") + "_";
    studentString += localStorage.getItem("eaNumber") != 0 ?localStorage.getItem("extra")+"_":" " + "_";
    studentString += localStorage.getItem("aNumber") != 0 ?localStorage.getItem("achivement")+"_":" " + "_";

    studentString = studentString.substring(0,studentString.length-1);

    localStorage.setItem("student"+counter,studentString);
    console.log(localStorage.getItem("student"+counter));
    removeLocalStorage();
    counter++;
    localStorage.setItem("counter",counter);
    localStorage.setItem("studentIndex",parseInt(localStorage.getItem("studentIndex"))+1)
}

function removeLocalStorage(){
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("eaNumber");
    localStorage.removeItem("aNumber");
    localStorage.removeItem("extra");
    localStorage.removeItem("achivement");
}

