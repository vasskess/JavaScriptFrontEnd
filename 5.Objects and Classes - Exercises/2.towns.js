function towns(array) {
  for (const item of array) {
    let [town, latitude, longitude] = item.split(" | ");
    let myObj = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(myObj);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
