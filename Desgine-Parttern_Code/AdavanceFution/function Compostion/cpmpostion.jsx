const canEat = () => ({
  eat() {
    console.log("Eating...");
  }
});

const canBark = () => ({
  bark() {
    console.log("Barking...");
  }
});

function createDog() {
  return {
    ...canEat(),
    ...canBark()
  };
}

const dog = createDog();

dog.eat();
dog.bark();




const canDrive = (state) => ({
  drive: () => console.log(${state.name} is driving)
});

const canCode = (state) => ({
  code: () => console.log(${state.name} is coding)
});

function createDeveloper(name) {
  const state = { name };

  return {
    ...canDrive(state),
    ...canCode(state)
  };
}

const dev = createDeveloper("Sara");

dev.drive();
dev.code();