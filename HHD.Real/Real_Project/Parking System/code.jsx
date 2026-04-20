Great choice — Parking System is one of the most asked LLD questions 🔥
I’ll explain it step-by-step (simple → interview-ready) + design patterns used.

🚗 Step 1: Understand Requirements (ALWAYS FIRST)
Basic requirements:


Vehicles: Bike, Car, Truck


Parking spots: Small, Medium, Large


Park a vehicle


Remove a vehicle


Calculate fee



🧠 Step 2: Identify Core Objects
👉 Think like this (real-world mapping):


Vehicle


ParkingSpot


ParkingLot


Ticket



🏗️ Step 3: Class Design (Simple Version)

1. Vehicle
class Vehicle {
  constructor(type, number) {
    this.type = type; // BIKE, CAR, TRUCK
    this.number = number;
  }
}


2. ParkingSpot
class ParkingSpot {
  constructor(type) {
    this.type = type; // SMALL, MEDIUM, LARGE
    this.isOccupied = false;
    this.vehicle = null;
  }

  park(vehicle) {
    this.vehicle = vehicle;
    this.isOccupied = true;
  }

  remove() {
    this.vehicle = null;
    this.isOccupied = false;
  }
}


3. Ticket
class Ticket {
  constructor(vehicle) {
    this.vehicle = vehicle;
    this.entryTime = Date.now();
  }

  calculateFee() {
    const hours = (Date.now() - this.entryTime) / (1000 * 60 * 60);
    return Math.ceil(hours) * 10;
  }
}


4. ParkingLot (Main Brain)
class ParkingLot {
  constructor() {
    this.spots = [];
  }

  addSpot(spot) {
    this.spots.push(spot);
  }

  parkVehicle(vehicle) {
    for (let spot of this.spots) {
      if (!spot.isOccupied && this.canFit(vehicle, spot)) {
        spot.park(vehicle);
        return new Ticket(vehicle);
      }
    }
    return null;
  }

  removeVehicle(vehicle) {
    for (let spot of this.spots) {
      if (spot.vehicle === vehicle) {
        spot.remove();
        return true;
      }
    }
    return false;
  }

  canFit(vehicle, spot) {
    if (vehicle.type === "BIKE" && spot.type === "SMALL") return true;
    if (vehicle.type === "CAR" && spot.type === "MEDIUM") return true;
    if (vehicle.type === "TRUCK" && spot.type === "LARGE") return true;
    return false;
  }
}


🧩 Step 4: Design Patterns Used (IMPORTANT FOR INTERVIEW)

🔥 1. Strategy Pattern (VERY IMPORTANT)
👉 Used for:


Different pricing logic


Different parking rules


Example:
class PricingStrategy {
  calculate(time) {}
}

class HourlyPricing extends PricingStrategy {
  calculate(time) {
    return time * 10;
  }
}

👉 Why?


Easy to change pricing without modifying main code


Interviewers LOVE this answer



🔥 2. Factory Pattern
👉 Used to create vehicles
class VehicleFactory {
  static createVehicle(type, number) {
    return new Vehicle(type, number);
  }
}

👉 Why?


Centralized object creation


Clean code



🔥 3. Singleton Pattern
👉 Used for ParkingLot
class ParkingLot {
  static instance;

  static getInstance() {
    if (!ParkingLot.instance) {
      ParkingLot.instance = new ParkingLot();
    }
    return ParkingLot.instance;
  }
}

👉 Why?


Only ONE parking system exists



🔥 4. Observer Pattern (Advanced)
👉 Used for:


Notifications when spot becomes free


Real-time updates



🧠 Step 5: Interview Explanation (IMPORTANT)
👉 Say like this:


“I’ll define entities: Vehicle, Spot, Ticket, ParkingLot”


“ParkingLot manages allocation”


“I’ll use Strategy for pricing”


“Factory for object creation”


“Singleton for global parking system”



🚀 Step 6: How to Make It ADVANCED
Add:


Multiple floors


Entry/Exit gates


Real-time availability (Redis cache)


Booking system


Payment integration



💥 Final Summary



| Concept    | Used             |
| ---------- | ---------------- |
| OOP        | Classes          |
| Strategy   | Pricing          |
| Factory    | Vehicle creation |
| Singleton  | ParkingLot       |
| Clean Code | Separation       |



🎯 Real Interview Tip

👉 Don’t jump into code first

Say:

Requirements
Entities
Relationships
Then code
🚀 Next Level