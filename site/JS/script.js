
function saveDat(){
    var dOB = document.getElementById("userInput").value;
    return dOB;
}

function saveFN(){
    var fName = document.getElementById("userInput").value;
    return fName;
}

function saveLN(){
    var lName = document.getElementById("userInput").value;
    return lName;
}

function submit(){
    dateOfBirth = saveDat();
    fName = saveFN(); 
    fName = saveLN();
    alert("You are",fName," ",lName," born on",dateOfBirth)
}





