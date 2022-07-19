// Ex 1

const welcomePromise = () => {
    return new Promise(() => {
        setTimeout(() => {
            console.log('hello world');
        }, 2000);
	})
};

const waitForResult = async () => {
    const result = await welcomePromise()
    console.log(result)
  }
  
waitForResult()


// Ex 2

 

const checkTemperature = () => {
    return new Promise(() => {
    const temperature = 2

    setTimeout(() => {
      if (temperature <= 10) {
        console.log("Il fait froid")
      } else {
        console.log("Il fait chaud")
      }
    }, 4000)
})
};


const TempResult = async () => {
    const result = await checkTemperature()
    console.log(result)
  }
  
TempResult()


// Ex 3
