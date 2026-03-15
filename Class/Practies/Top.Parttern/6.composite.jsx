// Base interface
class FileSystemComponent {
  getName() {
    throw new Error("Not implemented");
  }

  getSize() {
    throw new Error("Not implemented");
  }

  display() {
    throw new Error("Not implemented");
  }
}

// Child class implements the interface
class File extends FileSystemComponent {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  getName() { return this.name; }
  getSize() { return this.size; }

  display() {
    console.log(`${this.name} (${this.size}KB)`);
  }
}

// Usage
let file1 = new File("myFile.txt", 15);
console.log(file1.getName()); // myFile.txt
console.log(file1.getSize()); // 15
file1.display();              // myFile.txt (15KB)



3️⃣ Key Points

FileSystemComponent → abstract base class

File → implements all required methods (getName, getSize, display)

If File didn’t implement a method → calling it would throw "Not implemented" error

4️⃣ Why This Is Useful

Ensures all child classes follow the same structure.

In a large system, you can treat all objects as FileSystemComponent:

let items = [new File("file1.txt", 10), new File("file2.txt", 20)];
items.forEach(item => item.display());


You don’t care if it’s a file or folder — all have display().

✅ Simplified Concept:

FileSystemComponent = blueprint / contract
Child classes = must implement the methods or JS will throw an error