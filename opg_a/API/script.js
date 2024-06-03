// Sync the getquote function

async function getQuote() {
    let joke;
    let author;
    const data = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    // data waits for it to get a quote before continuing
    // Get the values from the link
    const json = await data.json();
    // Wait to complete
    joke = json[0].quote;
    author = json[0].author;
    // The object is set to what value the link got

    if (joke) {
        document.getElementById("joke").innerText = "''" + joke + "''";
    }
    // Get the current element (or value) of "joke" and display it between two '' 
    if (author) {
        document.getElementById("author").innerText = "- " + author;
    }
    // Same here but with the author name
}

getQuote();
// Get the value and display it


function refresh() {
    location.reload()
};