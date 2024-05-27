function solvebtn() {
    let firstnum = Number(document.getElementById("firstnum").value);
    let secondnum = Number(document.getElementById("secondnum").value);
    var answer = document.getElementById("answer");
    var mathtype = document.getElementById("mathtype").value;
    var solve;
    if (mathtype == "plus") {
        solve = firstnum + secondnum;
    } else if (mathtype == "minus") {
        solve = firstnum - secondnum;
    } else if (mathtype == "divide") {
        solve = firstnum / secondnum;
    } else if (mathtype == "multiply") {
        solve = firstnum * secondnum;
    }
    document.getElementById("answer").innerHTML = solve;
}

function refresh() {
    location.reload()
};