// Sync the getquote function

async function getQuote() {
    let url;
    const data = await fetch("https://random.dog/woof.json");
    // data waits for it to get a quote before continuing
    // Get the values from the link
    const json = await data.json();
    // Wait to complete
    url = json.url;
    // The object is set to what value the link got

    if (url) {
        document.getElementById("url").src=url;
    }
}

getQuote();
// Get the value and display it

function refresh() {
    location.reload()
}