
// ±20% jitter
// function cacheTTL(baseTTL) {
//   const jitter = baseTTL * 0.2; // 20% variation
//   return Math.floor(baseTTL - jitter + Math.random() * (jitter * 2));
// }




// function cacheTTL(baseTTL, minJitter = 0.1, maxJitter = 0.2) {
//   const jitterPercent = minJitter + Math.random() * (maxJitter - minJitter);
//   const jitterAmount = baseTTL * jitterPercent;
//   return Math.floor(baseTTL - jitterAmount + Math.random() * jitterAmount * 2);
// }





function cacheTTL(baseTTL, minJitter = 0.1, maxJitter = 0.2, log = false) {
  const jitterPercent = minJitter + Math.random() * (maxJitter - minJitter);
  const jitterAmount = baseTTL * jitterPercent;
  const finalTTL = Math.floor(baseTTL - jitterAmount + Math.random() * jitterAmount * 2);
  
  if (log) console.log(`cacheTTL -> base: ${baseTTL}s, final: ${finalTTL}s, jitter: ${Math.round(jitterPercent*100)}%`);
  
  return finalTTL;
}



function test1(){
    for(let i = 0; i < 20; i++){
        const val = cacheTTL(500); // call cacheTTL with baseTTL
        console.log(`i=${i}, jitter=${val}`);
    }
}

test1();
