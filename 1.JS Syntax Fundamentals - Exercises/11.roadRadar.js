function roadRadar(speed, area) {
  const limits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const difference = speed - limits[area];

  if (speed <= limits[area]) {
    console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
  } else {
    let status;
    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
