🔹 3. State Pattern

👉 Use when:

Object behavior changes based on state

Example:

Order status

Video player (play, pause)

class Order {
    setState(state) {
        this.state = state;
    }

    next() {
        this.state.next(this);
    }
}