/*global $*/ 

//hides div for RS quotes on page load
var rquoteDiv=document.getElementById('rquote');
rquoteDiv.style.visibility = 'hidden';

//hides div for Likes quotes on page load
var stuffDiv=document.getElementById("stuff");
stuffDiv.style.visibility="hidden";

//used to get random number to generate random quote on btn click
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Displays random quote from API, changes background image back to original, optimized for mobile
function ronQuote(){
    stuffDiv.style.visibility = "hidden";
    rquoteDiv.style.visibility = 'visible';
    var n = getRndInteger(0, 58);
    document.getElementById("rquotetext").innerHTML= '"' + rsQuotes[n] + '"';
    document.getElementById("background").style.backgroundImage = "url('https://i.ytimg.com/vi/IcAnhnmWPOI/maxresdefault.jpg')";
    document.getElementById("titletext").innerHTML = "Ron Swanson Quote Generator";
    document.getElementById("mtext").innerHTML= '"' + rsQuotes[n] + '"';
    document.getElementById("matext").innerHTML= " -Ron Swanson";
};

//displays random quote from data object StuffRonLikesQuotes, Changes background image, Setup to Optimize for mobile
function likesQuote(){
    stuffDiv.style.visibility = "visible";
    rquoteDiv.style.visibility = 'hidden';
    var n = getRndInteger(0,8);
    document.getElementById("quotetext").innerHTML= '"' + stuffRonLikesQuotes[n].quote + '"';
    document.getElementById("authortext").innerHTML="-" + stuffRonLikesQuotes[n].author;
    document.getElementById("mtext").innerHTML='"' + stuffRonLikesQuotes[n].quote + '"';
    document.getElementById("matext").innerHTML="-" + stuffRonLikesQuotes[n].author;
    document.getElementById("background").style.backgroundImage = "url('https://vignette4.wikia.nocookie.net/parksandrecreation/images/3/3a/Swanson_Pyramid_of_Greatness.jpg/revision/latest?cb=20111014231319')";
    document.getElementById("titletext").innerHTML = "Ron Swanson's Pyramid of Greatness - Quotes He Would Enjoy";
};

 //tweets text of Ron quote       
function tweetRon () {
  var tweetRQuote = document.getElementById('rquotetext').innerText + " - Ron Swanson";
  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweetRQuote));
};

//shares text of Ron Quote to Reddit 
function redditRon() {
    var redditRQuote = document.getElementById('rquotetext').innerText + " - Ron Swanson";
    window.open('https://www.reddit.com/r/PandR/submit?title=Ron%20Swanson%20Quote&text=' +encodeURIComponent(redditRQuote));
};

//Tweets text of like quote
function tweetLikes(){
    var tweetLikeQuote = document.getElementById("quotetext").innerHTML + document.getElementById("authortext").innerHTML;
      window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweetLikeQuote));
}
//shares text of like quote on Reddit
function redditLikes(){
    var redLikes = document.getElementById("quotetext").innerHTML + document.getElementById("authortext").innerHTML;
    window.open('https://www.reddit.com/r/PandR/submit?title=Quote%20Ron%20Would%20Like&text=' +encodeURIComponent(redLikes));
}

//tweets text of either quote on mobile
function mobileTweet() {
  var tweetmQuote = document.getElementById('mtext').innerText + document.getElementById("matext").innerHTML;
  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweetmQuote));
};

//shares text of either quote on mobile
function mobileReddit() {
        var redditmQuote = document.getElementById('mtext').innerText + document.getElementById("matext").innerHTML;
    window.open('https://www.reddit.com/r/PandR/submit?title=Ron%20Swanson%20Quote%20or%20one%20he%20would%20enjoy&text=' +encodeURIComponent(redditmQuote));
};

//calls API for Ron Swanson quotes and stores in variable to be accessed on btn clicl
var rsQuotes = (function () {
    var rsQuotes = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://ron-swanson-quotes.herokuapp.com/v2/quotes/59",
        'dataType': "json",
        'success': function (data) {
            rsQuotes = data;
        }
    });
    return rsQuotes;
})(); 

//Data structure to store and access quote for "Get Quote About Stuff Ron Likes"
var stuffRonLikesQuotes = [
            {quote: "Too much of anything is bad, but too much good whiskey is barely enough.", author: "Mark Twain"},
            {quote: "There is no bad whiskey. There are only some whiskeys that aren’t as good as others.", author: "Raymond Chandler"},
            {quote: "Happiness is having a rare steak, a bottle of whisky, and a dog to eat the rare steak", author: "Johnny Carson"},
            {quote: "Whisky is liquid sunshine.", author: "George Bernard Shaw"},
            {quote: "Somebody just back of you while you are fishing is as bad as someone looking over your shoulder while you write a letter to your girl.", author: "Ernest Hemingway"},
            {quote: "It has always been my private conviction that any man who pits his intelligence against a fish and loses has it coming.", author: "John Steinbeck"},
            {quote: "The best time to go fishing is when you can get away.", author: "Robert Traver"},
            {quote: "There is no substitution for hard work.", author: "Thomas Edison"},
            {quote: "I would rather risk wearing out than rusting out.", author: "Teddy Roosevelt"},
        ];