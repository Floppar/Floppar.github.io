var krone = Math.floor(Math.random()*2);
while(krone === 0) {
    console.log("Kron! Me flippar igjen...");
    var krone = Math.floor(Math.random()*2);
}
console.log("Mynt! Gratulerar!");