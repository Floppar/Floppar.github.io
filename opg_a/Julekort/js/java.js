const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");



function prev(){

    let overskrift = document.getElementById("overskrift").value;
    let til = document.getElementById("til").value;
    let frå = document.getElementById("frå").value;
    window.addEventListener("load", startup, false);



    const overskrv = document.getElementById("overskrv");
    const till = document.getElementById("till");
    const fråå = document.getElementById("fråå");


    overskrv.innerHTML = overskrift;
    till.innerHTML = til;
    fråå.innerHTML = frå;

    let fargeval;
    const defaultColor = "#0000ff";
    
    function startup() {
        colorPicker = document.querySelector("#fargeval");
        colorPicker.value = defaultColor;
        colorPicker.addEventListener("input", updateFirst, false);
        colorPicker.addEventListener("change", updateAll, false);
        colorPicker.select();
      }
      
      function updateFirst(event) {
        const fillStyle = document.querySelector("fillStyle");
        if (fillStyle) {
          fillStyle.style.color = event.target.value;
        }
      }
      
      function updateAll(event) {
        document.querySelectorAll("fillStyle").forEach((fillStyle) => {
          fillStyle.style.color = event.target.value;
        });
      }

    ctx.fillStyle = "rgb(33, 64, 39)";
    ctx.rect(0, 0, 300, 56);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillText("Til:", 10, 25);
    ctx.font = "16px Arial";
    ctx.drawImage(image, 230, 3, 50, 50);
    ctx.fillStyle = "#000";
    ctx.fillText(overskrv.innerHTML, 110, 115);
    ctx.fillText(till.innerHTML, 15, 45);
    ctx.fillText("Frå: ", 10, 180);
    ctx.fillText(fråå.innerHTML, 40, 180);
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
