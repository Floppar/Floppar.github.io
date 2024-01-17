const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");



function prev(){

    let WriteID = document.getElementById("WriteID").value;
    let ToID = document.getElementById("ToID").value;
    let FromID = document.getElementById("FromID").value;



    const heading = document.getElementById("heading");
    const to = document.getElementById("to");
    const from = document.getElementById("from");


    heading.innerHTML = WriteID;
    to.innerHTML = ToID;
    from.innerHTML = FromID;


    ctx.fillStyle = "rgb(33, 64, 39)";
    ctx.rect(0, 0, 300, 56);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillText("Til:", 10, 25);
    ctx.font = "16px Arial";
    ctx.drawImage(image, 230, 3, 50, 50);
    ctx.fillStyle = "#000";
    ctx.fillText(heading.innerHTML, 110, 115);
    ctx.fillText(to.innerHTML, 15, 45);
    ctx.fillText("Frå: ", 10, 180);
    ctx.fillText(from.innerHTML, 40, 180);
}



function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {

        window.navigator.msSaveBlob(canvas.msToBlob(), "Julekort.png");
    } else {

        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "Julekort.png";
        a.click();
        document.body.removeChild(a);
    }
});
