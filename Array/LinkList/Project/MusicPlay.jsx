// 🎵 Song Node
class Song {
  constructor(title) {
    this.title = title;
    this.next = null;
  }
}

// 🎵 Playlist (Linked List)
class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add song at end
  addSong(title) {
    const newSong = new Song(title);

    if (!this.head) {
      this.head = newSong;
      this.tail = newSong;
    } else {
      this.tail.next = newSong;
      this.tail = newSong;
    }

    this.size++;
    console.log(`🎶 "${title}" added to playlist`);
  }

  // Remove song by title
  removeSong(title) {
    if (!this.head) return;

    if (this.head.title === title) {
      this.head = this.head.next;
      this.size--;
      console.log(`❌ "${title}" removed`);
      return;
    }

    let current = this.head;

    while (current.next && current.next.title !== title) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
      console.log(`❌ "${title}" removed`);
    } else {
      console.log("Song not found");
    }
  }

  // Search song
  searchSong(title) {
    let current = this.head;

    while (current) {
      if (current.title === title) {
        console.log(`🔍 "${title}" found in playlist`);
        return true;
      }
      current = current.next;
    }

    console.log("Song not found");
    return false;
  }

  // Reverse playlist
  reversePlaylist() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    console.log("🔁 Playlist reversed");
  }

  // Display playlist
  display() {
    let current = this.head;
    let output = "🎧 Playlist:\n";

    while (current) {
      output += `→ ${current.title}\n`;
      current = current.next;
    }

    console.log(output);
    console.log(`Total Songs: ${this.size}`);
  }
}

// ============================
// 🚀 Demo Usage
// ============================

const myPlaylist = new Playlist();

myPlaylist.addSong("Shape of You");
myPlaylist.addSong("Believer");
myPlaylist.addSong("Blinding Lights");
myPlaylist.addSong("Perfect");

myPlaylist.display();

myPlaylist.removeSong("Believer");
myPlaylist.display();

myPlaylist.searchSong("Perfect");

myPlaylist.reversePlaylist();
myPlaylist.display();
