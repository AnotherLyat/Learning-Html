function clearScreen(){
    document.getElementById("result").value="";
}

function show(value) {
    document.getElementById("result").value +=value;
}

function cal() {
    var res = document.getElementById("result").value;
    res = eval(res)
    document.getElementById("result").value= res;
}
