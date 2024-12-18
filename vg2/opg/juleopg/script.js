const gifts = [    "Ein personleg gåvebok",    "Ein opplevelsesgåve som fallskjermhopping",    "Eit abonnement på favorittmagasinet",    "Ein fine klokke",    "Ein deilig parfyme",    "Bøker frå favorittforfatteren",    "Ei ny teknologisk gadget",    "Eit gåvekort til ein restaurant",    "Ein kosegenser",    "Heimelagde småkaker",    "Eit medlemskap i ein klubb eller forening",    "Eit kunstverk frå ein lokal kunstner",    "Ein reise til ein spennande destinasjon",    "Eit sett med kvalitetskaffe eller te"];

document.getElementById('generateBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    const suggestion = gifts[randomIndex];
    document.getElementById('giftSuggestion').textContent = suggestion;
});

// Snøfnugg-animasjon  
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Snøfnugg-tegn  
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Variabel størrelse

    document.querySelector('.snow').appendChild(snowflake);

    // Animasjon for å få snøfnuggene til å falle  
    const fallDuration = Math.random() * 3 + 2; // Falltid mellom 2 og 5 sekunder  
    snowflake.style.animation = `fall ${fallDuration}s linear forwards`;

    // Fjern snøfnugget etter at det har falt  
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

// Lag snøfnugg kontinuerlig  
setInterval(createSnowflake, 300); // Lager en snøfnugg hvert 300 ms

// CSS-animasjon for å få snøfnuggene til å falle  
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% { transform: translateY(0); }
    100% { transform: translateY(100vh); }
}
`;
document.head.appendChild(style);