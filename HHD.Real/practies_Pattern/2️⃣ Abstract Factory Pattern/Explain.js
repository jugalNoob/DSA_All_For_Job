2️⃣ Abstract Factory Pattern

Abstract Factory creates families of related objects.

Example: UI Theme System

Two themes:

Dark Theme

Light Theme

Each theme creates:

Button

Input

Abstract Factory Example
class DarkButton{
    paint(){
        console.log("Dark Button")
    }
}

class LightButton{
    paint(){
        console.log("Light Button")
    }
}

class DarkFactory{
    createButton(){
        return new DarkButton()
    }
}

class LightFactory{
    createButton(){
        return new LightButton()
    }
}

function createUI(factory){

    let button = factory.createButton()

    button.paint()
}

createUI(new DarkFactory())


Output:

Dark Button

Diagram
           Abstract Factory
                |
      -------------------------
      |                       |
   DarkFactory             LightFactory
      |                       |
  DarkButton              LightButton

3️⃣ Difference


| Feature    | Simple Factory            | Abstract Factory           |
| ---------- | ------------------------- | -------------------------- |
| Purpose    | Create one type of object | Create families of objects |
| Complexity | Simple                    | More structured            |
| Example    | Notification system       | UI themes                  |



4️⃣ Real World Examples

Used in:

Payment gateways

Notification systems

Database drivers

UI frameworks

Game engines

Example companies use:

Netflix

Uber

Amazon

Airbnb