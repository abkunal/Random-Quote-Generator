

$(document).ready(function(){
var quotes = [
	{
		"quote": "The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.",
		"author": "Royal Robbins"
	},
	{
		"quote":"Footsteps always follow us, whenever it is snowing. They always show us where we've been, but never where we're going.",
		"author":"Winnie the Pooh's A-Z"
	},
	{
		"quote":"Small minds discuss people. Average minds discuss events. Great minds discuss ideas.",
		"author":"Unknown"
	},
	{
		"quote":"It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.",
		"author":"Dag Hammarskjold, Sec. Gen. of the UN"
	},
	{
		"quote":"The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
		"author":"Albert Einstein"
	},
	{
		"quote":"We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.",
		"author":"T S Eliot"
	},
	{
		"quote":"Do not go gentle into that good night. Rage, rage against the dying of the light.",
		"author":"Dylan Thomas"
	},
	{
		"quote":"It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being. And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.",
		"author":"Norman Cousins, Anatomy of an Illness"
	},
	{
		"quote":"I have decided to make my life my argument",
		"author":"Albert Schweitzer"
	}
];
	
	$("#newQuote").on('click', function(){
		var q = document.getElementById("quote");
		var a = document.getElementById("auth");
		var randnum = Math.floor(Math.random()*10);
		q.innerHTML = quotes[randnum]["quote"];
		a.innerHTML = quotes[randnum]["author"];
		var twe = $("#tweet");
		twe.attr('href',"http://twitter.com/home/?status=" + quotes[randnum]["quote"] + " by " + quotes[randnum]["author"]);
	});
});