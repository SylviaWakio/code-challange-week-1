function checkSpeed(speed) {
    const speedLimit = 70;
    const kpd = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const dp = Math.floor((speed - speedLimit) / kpd);
      if (dp > 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + dp);
      }
    }
  }