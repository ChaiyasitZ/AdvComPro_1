class Media { // Create a new class called Media.
    constructor(info) { // Add a constructor() method to the Media class.
        this.publishDate = info.publishDate; // Add a new property to the Media class called publishDate.
        this.name = info.name; // Add a new property to the Media class called name.
    }
}

class Song extends Media { // Create a new class called Song that extends Media.
    constructor(songData) { // Add a constructor() method to the Song class.
        super(songData); // Call the super() method on the first line of the constructor() method.
        this.artist = songData.artist; // Add a new property to the Song class called artist.
    }
}

const mySong = new Song({ // Create a new object instance from the Song class with the following properties:
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong); // Song { publishDate: 1975, name: 'Bohemian Rhapsody', artist: 'Queen' }