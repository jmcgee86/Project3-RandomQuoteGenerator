var famousDiv=document.getElementById('famous');
famousDiv.style.visibility = 'hidden';

var movieDiv=document.getElementById('movie');
movieDiv.style.visibility="hidden";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
      
function famousQuote(){
    movieDiv.style.visibility = "hidden";
    var n = getRndInteger(0, 9);
    famousDiv.style.visibility = 'visible';
    document.getElementById("quotetext").innerHTML= '"' + famousQuotes[n].quote + '"';
    document.getElementById("authortext").innerHTML="-" + famousQuotes[n].author;
    document.getElementById("mqtext").innerHTML= '"' + famousQuotes[n].quote + '"';
    document.getElementById("matext").innerHTML="-" + famousQuotes[n].author;
};

function movieQuote(){
    famousDiv.style.visibility="hidden";
    var n = getRndInteger(0, 9);
    movieDiv.style.visibility = "visible";
    document.getElementById("quotemovietext").innerHTML= '"' + movieQuotes[n].quote + '"';
    document.getElementById("movietext").innerHTML="-" + movieQuotes[n].author;
    document.getElementById("mqtext").innerHTML= '"' + movieQuotes[n].quote + '"';
    document.getElementById("matext").innerHTML="-" + movieQuotes[n].author;
};

var famousQuotes = [
        {quote: "If you are going through hell, keep going.", author: "Sir Winston Churchill "},
        {quote: "He who has a 'why' to live, can bear with almost any 'how'.",author: "Friedrich Nietzsche"},
        {quote: "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.", author: "Frank Lloyd Wright"},
        {quote: "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.", author: "Sir Winston Churchill"},
        {quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.", author: "Ayn Rand"},
        {quote: "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.", author: "A. J. Liebling"},
        {quote: "This book fills a much-needed gap.", author: "Moses Hadas in a review"},
        {quote: "A mathematician is a device for turning coffee into theorems.", author: "Paul Erdos"},
        {quote: "The only difference between me and a madman is that I'm not mad.", author: "Salvador Dali"},
        {quote: "Never interrupt your enemy when he is making a mistake.", author: "Napoleon Bonaparte"}
    ];

var movieQuotes = [
            {quote: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind"},
            {quote: "I'm gonna make him an offer he can't refuse.", author: "The Godfather"},
            {quote: "Toto, I've a feeling we're not in Kansas anymore.", author: "Wizard of Oz"},
            {quote: "You talking to me?", author: "Taxi Driver"},
            {quote: "What we've got here is failure to communicate.", author: "Cool Hand Luke"},
            {quote: "You're gonna need a bigger boat.", author: "Jaws"},
            {quote: "If you build it, he will come.", author: "Field of Dreams"},
            {quote: "We'll always have Paris", author: "Casablanca"},
            {quote: "Greed, for lack of a better word, is good.", author: "Wall Street"},
            {quote: "Gentlemen, you can't fight in here! This is the War Room!", author: "Dr. Strangelove"}
        ];
        
 
        
function tweetfamous () {
  var tweetQuote = document.getElementById('quotetext').innerText + document.getElementById("authortext").innerHTML;
  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweetQuote));
}

function tweetmovie () {
  var tweetmQuote = document.getElementById('quotemovietext').innerText + document.getElementById("movietext").innerHTML;
  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweetmQuote));
}


function tweetmobile() {
  var tweetmQuote = document.getElementById('mqtext').innerText;
  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweetmQuote));
}