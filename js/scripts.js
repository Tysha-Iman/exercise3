
function Artwork (artwork, artist, song, tags, color) {
	this.artwork = artwork;
	this.artist = artist;
	this.song = song;
	this.tags = tags; 
	this.color = color;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color)
		container.addClass("artwork")

		var artworkString = "";
		artworkString += "<ul>"
		artworkString += "<li>" + "<img src=" + this.artwork + ">" + "</li>";
		artworkString += "<li>" + this.artist + "</li>";
		artworkString += "<li>" + this.song + "</li>";
		artworkString += "</ul>"

		container.html(artworkString)
		$(".artworks").prepend(container)
	}
}

var artworks = [
	new Artwork("img/Bravado.JPG", "Lorde", "Bravado", 
		["All","Electropop", "Pop"]),
	new Artwork("img/Bury_a_Friend.png", "Billie Eillish" , "Bury a Friend", 
		["All","Electropop", "Pop"]),
	new Artwork("img/CryBaby.png", "Melanie Martinez" , "Cry Baby", 
		["All","Alternative", "Electropop"]),
	new Artwork("img/Death_of_a_Bachelor.png", "Panic! at the Disco" , "Death of a Bachelor", 
		["All","Alternative", "Rock", "Pop"]),
	new Artwork("img/Funhouse.png", "P!nk" , "Funhouse", 
		["All","Pop", "Rock"]),
	new Artwork("img/LastHope.JPG", "Paramore" , "Last Hope", 
		["All","Alternative", "Rock"]),
	new Artwork("img/LightTunnels.jpg", "Macklemore & Ryan Lewis" , "Light Tunnels", 
		["All","Rap"]),
	new Artwork("img/Love_Gone_Wrong.JPG", "With You." , "Love Gone Wrong", 
		["All","Folk"]),
	new Artwork("img/Masterpiece_Theatre.png", "Marianas Trench" , "Masterpiece Theatre", 
		["All","Rock", "Pop"]),
	new Artwork("img/Paramore.png", "Paramore" , "Album", 
		["All","Alternative"]),
	new Artwork("img/Senorita.png", "Camila Cabello" , "Senorita", 
		["All","Pop"])
]

//global taglist
var tagList = []

artworks.forEach(function(artwork){
	artwork.display();
	artwork.tags.forEach(function(tag){
		//check to see if tag has been added to taglist
		if(!tagList.includes(tag)) {
			//if it isn't added, add it
			tagList.push(tag);
			//and also make a button for it.
			$(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</buttons>")
			}
		})
	})
console.log(tagList)
 
$(".filter").on("click", function() {
	var tag = $(this).attr("id");
	console.log(tag)

	$(".artwork").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")
})









