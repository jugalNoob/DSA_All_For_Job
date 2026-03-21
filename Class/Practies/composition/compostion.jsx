// Small reusable behaviors (pure functions or objects)
const canSpeak = (state) => ({
  speak: () => console.log(`${state.name} says: Hello!`)
});

const canFly = (state) => ({
  fly: () => console.log(`${state.name} is flying high!`)
});

const canSwim = (state) => ({
  swim: () => console.log(`${state.name} is swimming.`)
});

// Factory function (very common pattern)
function createSuperHero(name) {
  const state = { name };

  return {
    ...state,
    ...canSpeak(state),
    ...canFly(state),
    ...canSwim(state)
  };
}

const aquaman = createSuperHero("Aquaman");
aquaman.speak();   // Aquaman says: Hello!
aquaman.swim();    // Aquaman is swimming.