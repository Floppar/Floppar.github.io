const checktall = () => {
    let heightid = document.getElementById("heightid").value;
    let text = document.getElementById("text");
    text.innerText = "";

    if (heightid >= 3) {
        text.innerText = "NB! Du kan ikkje skrive inn ei høgde over 3 meter. Kontakt Guinness rekordbok dersom du treng å skrive ei høgare tall.";
    } else if (heightid >= 2.8) {
        text.innerText = "OK det er nokk";
    } else if (heightid >= 2.5) {
        text.innerText = "OK Goliat";
    } else if (heightid >= 2.1) {
        text.innerText = "OK du byrja å bli litt for høg";
    } else if (heightid >= 1.9) {
        text.innerText = "OK du byrja å bli litt høg";
    } else if (heightid >= 1.7) {
        text.innerText = "Du har ein god høgde";
    } else if (heightid >= 1.5) {
        text.innerText = "Du har ein OK høgde";
    } else if (heightid >= 1) {
        text.innerText = "Du er litt kort";
    } else {
        text.innerText = "wow du er kort";
    }
}
