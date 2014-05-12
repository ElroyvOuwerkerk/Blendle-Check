var url = $(location).attr('href');
var title = $( ".l-overlay .item-title" ).html();
var provider = $( ".l-overlay .item-provider" ).html();
if (url.indexOf("beta.blendle.nl/#item") == -1){
	alert("Weet je zeker dat je een artikel op Blendle leest?");
} else{
	alert("title: " + title + "\nprovider: " + provider);
}