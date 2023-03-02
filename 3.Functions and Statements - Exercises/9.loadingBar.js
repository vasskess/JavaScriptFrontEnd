function loadingBar(number){
        const numBars = number / 10;
        const numEmptyBars = 10 - numBars;
        const bars = "[" + "%".repeat(numBars) + ".".repeat(numEmptyBars) + "]";
        if(numBars * 10 === 100){
            console.log(`${numBars * 10}% Complete!`)
            console.log(`${bars}`)
        } else {
            console.log(`${numBars * 10}% ${bars}`);
            console.log('Still loading...')
        }
      }


loadingBar(30)
loadingBar(50)
loadingBar(100)