quoteLoader();

function quoteLoader() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://type.fit/api/quotes");
    xhr.onload = function () {
        document.getElementById('animation').style.display = "none";
        let quotes = JSON.parse(this.responseText);
        let randomNumber = Math.floor(Math.random() * (1643 - 0) + 0);
        document.getElementById('quote').innerHTML = quotes[randomNumber].text;
        document.getElementById('author').innerHTML = quotes[randomNumber].author;
    }
    xhr.send();
}