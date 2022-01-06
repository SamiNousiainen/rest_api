function Animal() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke = JSON.parse(this.response)
	     // Access the result here
	     document.getElementById("animalJoke").innerHTML = joke.contents.jokes[0].joke.text;
         document.getElementById("aCopyright").innerHTML = "&copy;" + joke.contents.copyright;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

function Knock_Knock() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke = JSON.parse(this.response)
	     // Access the result here
	     document.getElementById("knockJoke").innerHTML = joke.contents.jokes[0].joke.text;
         document.getElementById("kCopyright").innerHTML = "&copy;" + joke.contents.copyright;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

function Blonde() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke = JSON.parse(this.response)
	     // Access the result here
	     document.getElementById("blondeJoke").innerHTML = joke.contents.jokes[0].joke.text;
         document.getElementById("bCopyright").innerHTML = "&copy;" + joke.contents.copyright;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}