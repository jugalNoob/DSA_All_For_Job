1️⃣ Random Selection → Load Balancer / A/B Testing

Your code:

const arr8 = [1, 2, 3, 4, 5, 6];
const randomPick = arr8[Math.floor(Math.random() * arr8.length)];

Real system design use

Example: A/B testing

Send traffic randomly to two versions of API.

function routeUser(userId){

  const random = Math.random()

  if(random < 0.8){
    return "API_VERSION_A"
  }

  return "API_VERSION_B"
}


Meaning:

80% traffic → A
20% traffic → B


Used in:

Google

Netflix

Facebook