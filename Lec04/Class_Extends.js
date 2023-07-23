class Media {
    constructor(info) {
        this.publishDate = info.publishDate; // Add a new property to the Media class called publishDate.
        this.name = info.name; // Add a new property to the Media class called name.
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist; // Add a new property to the Song class called artist.
    }
}

const mySong = new Song({ 
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975
});

console.log(mySong); // Song { publishDate: 1975, name: 'Bohemian Rhapsody', artist: 'Queen' }