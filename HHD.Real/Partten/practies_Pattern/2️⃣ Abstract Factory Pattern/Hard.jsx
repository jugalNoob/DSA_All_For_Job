Perfect! Let’s build a full Abstract Factory example that can produce multiple product types — this is what interviews usually expect. 🎯

We’ll do buttons + checkboxes as two product families, with light and dark themes.

1️⃣ Step 1: Product Interfaces / Base Classes
// Buttons
class Button {
    render() {}
}

// Checkboxes
class Checkbox {
    render() {}
}


In JS, we don’t have formal interfaces, but we define base classes / methods that all products implement.

2️⃣ Step 2: Concrete Products
// Dark Theme Products
class DarkButton extends Button {
    render() {
        console.log('Render Dark Button');
    }
}

class DarkCheckbox extends Checkbox {
    render() {
        console.log('Render Dark Checkbox');
    }
}

// Light Theme Products
class LightButton extends Button {
    render() {
        console.log('Render Light Button');
    }
}

class LightCheckbox extends Checkbox {
    render() {
        console.log('Render Light Checkbox');
    }
}

3️⃣ Step 3: Abstract Factory
class GUIFactory {
    createButton() {}
    createCheckbox() {}
}


This defines the interface all factories must implement.

4️⃣ Step 4: Concrete Factories
class DarkFactory extends GUIFactory {
    createButton() {
        return new DarkButton();
    }

    createCheckbox() {
        return new DarkCheckbox();
    }
}

class LightFactory extends GUIFactory {
    createButton() {
        return new LightButton();
    }

    createCheckbox() {
        return new LightCheckbox();
    }
}

5️⃣ Step 5: Usage
function renderUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.render();
}

// Dark theme UI
const darkFactory = new DarkFactory();
renderUI(darkFactory);
// Output:
// Render Dark Button
// Render Dark Checkbox

// Light theme UI
const lightFactory = new LightFactory();
renderUI(lightFactory);
// Output:
// Render Light Button
// Render Light Checkbox