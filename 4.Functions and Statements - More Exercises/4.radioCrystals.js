function radioCrystal(arr) {
    const thickness = arr[0];
    let xRay = false;
  
    for (let i = 1; i < arr.length; i++) {
      let currCrystal = arr[i];
      console.log(`Processing chunk ${currCrystal} microns`);
  
      const operations = {
        cut: 0,
        lap: 0,
        grind: 0,
        etch: 0,
      };
  
      while (currCrystal !== thickness) {
        while (currCrystal / 4 >= thickness) {
          currCrystal /= 4;
          operations.cut++;
        }
  
        if (operations.cut > 0) {
          console.log(`Cut x${operations.cut}`);
          console.log("Transporting and washing");
          currCrystal = Math.floor(currCrystal);
        }
  
        while (currCrystal - currCrystal * 0.2 >= thickness) {
          currCrystal *= 0.8;
          operations.lap++;
        }
  
        if (operations.lap > 0) {
          console.log(`Lap x${operations.lap}`);
          console.log("Transporting and washing");
          currCrystal = Math.floor(currCrystal);
        }
  
        while (currCrystal - 20 >= thickness) {
          currCrystal -= 20;
          operations.grind++;
        }
  
        if (operations.grind > 0) {
          console.log(`Grind x${operations.grind}`);
          console.log("Transporting and washing");
          currCrystal = Math.floor(currCrystal);
        }
  
        while (currCrystal - 2 >= thickness - 1) {
          currCrystal -= 2;
          operations.etch++;
        }
  
        if (operations.etch > 0) {
          console.log(`Etch x${operations.etch}`);
          console.log("Transporting and washing");
          currCrystal = Math.floor(currCrystal);
        }
  
        if (currCrystal < thickness && !xRay) {
          currCrystal += 1;
          console.log(`X-ray x1`);
          xRay = true;
        }
      }
  
      console.log(`Finished crystal ${currCrystal} microns`);
    }
  }
 
radioCrystal([1375, 50000])