Below is a better Parking Lot LLD using Design Patterns (Factory + Strategy) in JavaScript. This is closer to what interviewers expect in senior LLD rounds. 🚗🔥

We will apply:

Factory Pattern → Create vehicles

Strategy Pattern → Parking spot selection

OOP principles

1️⃣ Requirements

Parking lot should support:

Multiple vehicle types

Multiple parking spot types

Flexible parking strategy

Generate ticket

Park / Unpark vehicle

Vehicle types:

CAR
BIKE
TRUCK
2️⃣ High Level Design
ParkingLot
   └── ParkingFloor
         └── ParkingSpot
VehicleFactory → creates Vehicle
ParkingStrategy → decides where to park
Ticket
3️⃣ Vehicle Classes
class Vehicle {
  constructor(number, type) {
    this.number = number;
    this.type = type;
  }
}

class Car extends Vehicle {
  constructor(number) {
    super(number, "CAR");
  }
}

class Bike extends Vehicle {
  constructor(number) {
    super(number, "BIKE");
  }
}

class Truck extends Vehicle {
  constructor(number) {
    super(number, "TRUCK");
  }
}
4️⃣ Factory Pattern (Vehicle Factory)

Instead of creating vehicles directly.

class VehicleFactory {
  static createVehicle(type, number) {
    switch (type) {
      case "CAR":
        return new Car(number);

      case "BIKE":
        return new Bike(number);

      case "TRUCK":
        return new Truck(number);

      default:
        throw new Error("Invalid vehicle type");
    }
  }
}

Usage:

const car = VehicleFactory.createVehicle("CAR", "JK01AB1234");

✅ Benefits:

Object creation centralized

Easy to add new vehicle types

5️⃣ ParkingSpot Class
class ParkingSpot {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.isOccupied = false;
    this.vehicle = null;
  }

  park(vehicle) {
    this.vehicle = vehicle;
    this.isOccupied = true;
  }

  removeVehicle() {
    this.vehicle = null;
    this.isOccupied = false;
  }
}
6️⃣ Strategy Pattern (Parking Strategy)

Parking strategy decides which spot to assign.

Base strategy:

class ParkingStrategy {
  findSpot(spots, vehicleType) {}
}
Strategy 1: Nearest Parking
class NearestParkingStrategy extends ParkingStrategy {
  findSpot(spots, vehicleType) {
    return spots.find(
      (spot) => !spot.isOccupied && spot.type === vehicleType
    );
  }
}
Strategy 2: Random Parking
class RandomParkingStrategy extends ParkingStrategy {
  findSpot(spots, vehicleType) {
    const available = spots.filter(
      (s) => !s.isOccupied && s.type === vehicleType
    );

    if (available.length === 0) return null;

    return available[Math.floor(Math.random() * available.length)];
  }
}
7️⃣ ParkingFloor
class ParkingFloor {
  constructor(number) {
    this.number = number;
    this.spots = [];
  }

  addSpot(spot) {
    this.spots.push(spot);
  }
}
8️⃣ Ticket Class
class Ticket {
  constructor(vehicle, spot) {
    this.vehicleNumber = vehicle.number;
    this.spotId = spot.id;
    this.entryTime = new Date();
  }
}
9️⃣ ParkingLot (Uses Strategy)
class ParkingLot {
  constructor(strategy) {
    this.floors = [];
    this.strategy = strategy;
  }

  addFloor(floor) {
    this.floors.push(floor);
  }

  parkVehicle(vehicle) {
    for (let floor of this.floors) {
      const spot = this.strategy.findSpot(floor.spots, vehicle.type);

      if (spot) {
        spot.park(vehicle);

        const ticket = new Ticket(vehicle, spot);

        console.log(
          Vehicle parked at Spot ${spot.id} Floor ${floor.number}
        );

        return ticket;
      }
    }

    console.log("Parking Full");
    return null;
  }
}
🔟 Usage Example
const strategy = new NearestParkingStrategy();

const parkingLot = new ParkingLot(strategy);

const floor1 = new ParkingFloor(1);

floor1.addSpot(new ParkingSpot(1, "CAR"));
floor1.addSpot(new ParkingSpot(2, "BIKE"));

parkingLot.addFloor(floor1);

const car = VehicleFactory.createVehicle("CAR", "JK01AB1234");

const ticket = parkingLot.parkVehicle(car);

Output: