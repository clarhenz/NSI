var dOB = 0;
var fName = "";
var lName = "";

function saveDat(){
    let dOB = prompt();
    return dOB;
}

function saveFN(){
    let fName = prompt();
    return fName;
}

function saveLN(){
    let lName = prompt();
    return lName;
}


function submit(){
    let dateOfBirth = dOB;
    let fName = fName; 
    let fName = lName;
    alert("You are" + fName + " " + lName + " born on" + dateOfBirth);
}





